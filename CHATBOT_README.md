# 🤖 Hướng dẫn cấu hình Chatbot AI

Ứng dụng Git/GitHub Learning Roadmap đã được tích hợp chatbot AI sử dụng Google AI Studio (Gemini).

## 🚀 Cách cấu hình

### 1. Lấy API Key từ Google AI Studio

1. Truy cập [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Đăng nhập bằng tài khoản Google của bạn
3. Tạo API key mới
4. Sao chép API key

### 2. Cấu hình trong dự án

1. Tạo file `.env.local` trong thư mục gốc của dự án (nếu chưa có)
2. Thêm API key vào file:

```bash
GOOGLE_AI_API_KEY=your_api_key_here
```

3. Thay thế `your_api_key_here` bằng API key thực của bạn

### 3. Restart ứng dụng

```bash
npm run dev
```

## ✨ Tính năng Chatbot

### 🎯 Chức năng chính
- **Hỗ trợ Git/GitHub**: Giải thích các khái niệm, commands, workflows
- **Hướng dẫn thực hành**: Đưa ra ví dụ cụ thể và bài tập
- **Hỗ trợ lộ trình**: Giúp người dùng điều hướng qua 6 ngày học
- **Trả lời bằng tiếng Việt**: Interface và phản hồi hoàn toàn bằng tiếng Việt

### 🎨 Giao diện
- **Chat widget floating**: Button chat ở góc phải màn hình
- **Dialog đầy đủ tính năng**: Hiển thị lịch sử chat, typing indicator
- **Markdown support**: Render code, lists, formatting
- **Responsive design**: Hoạt động tốt trên mọi thiết bị

### 🤝 Câu hỏi gợi ý
Chatbot sẽ hiển thị các câu hỏi gợi ý như:
- "Git là gì và tại sao nó quan trọng?"
- "Cách tạo repository mới trên GitHub?"
- "Hướng dẫn commit và push code lên GitHub"
- "Cách khắc phục merge conflict?"

## 🛠️ Technical Details

### Components được thêm
- `contexts/chat-context.tsx` - Quản lý state chat
- `components/chat/chat-dialog.tsx` - Dialog chính
- `components/chat/chat-widget.tsx` - Floating button
- `components/chat/message-item.tsx` - Hiển thị tin nhắn
- `components/chat/message-list.tsx` - Danh sách tin nhắn
- `components/chat/message-input.tsx` - Input nhập tin nhắn
- `components/chat/suggested-questions.tsx` - Câu hỏi gợi ý
- `app/api/chat/route.ts` - API endpoint

### Dependencies
- `@google/generative-ai` - Google AI SDK
- `react-markdown` - Render markdown content
- `date-fns` - Format thời gian
- `lucide-react` - Icons

## 🔒 Bảo mật

- API key được lưu trong `.env.local` (không commit lên Git)
- Tất cả requests được xử lý server-side
- Không lưu trữ lịch sử chat lâu dài

## 🎯 Lưu ý

- Chatbot được tối ưu cho chủ đề Git/GitHub
- Phản hồi sẽ được cá nhân hóa theo ngữ cảnh ứng dụng
- API key Google AI Studio có giới hạn requests (check quota)

Chúc bạn học Git/GitHub hiệu quả! 🚀
