import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();

    if (!process.env.GOOGLE_AI_API_KEY) {
      return NextResponse.json(
        { error: "Google AI API key is not configured" },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Tạo prompt với context về Git/GitHub
    const systemPrompt = `Bạn là một trợ lý AI chuyên về Git và GitHub. Bạn đang hỗ trợ người dùng học Git/GitHub thông qua một lộ trình 6 ngày.

Ngữ cảnh của ứng dụng:
- Đây là một ứng dụng học Git/GitHub với lộ trình 6 ngày
- Người dùng có thể theo dõi tiến độ, đánh dấu hoàn thành các phần
- Có hệ thống ghi chú và bookmark để lưu nội dung quan trọng
- Có quiz để kiểm tra kiến thức

Hãy trả lời bằng tiếng Việt và tập trung vào:
1. Giải thích các khái niệm Git/GitHub một cách dễ hiểu
2. Đưa ra ví dụ thực tế và commands cụ thể
3. Hướng dẫn cách sử dụng các tính năng của ứng dụng
4. Giải đáp thắc mắc về lộ trình học tập
5. Khuyến khích và hỗ trợ người dùng trong quá trình học

${context ? `Thông tin ngữ cảnh thêm: ${context}` : ""}

Câu hỏi của người dùng: ${message}`;

    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Có lỗi xảy ra khi xử lý tin nhắn" },
      { status: 500 }
    );
  }
}
