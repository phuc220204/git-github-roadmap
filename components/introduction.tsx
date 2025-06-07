import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function Introduction() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">Giới thiệu</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Lộ trình này được thiết kế để giúp bạn học Git và GitHub Desktop. Mỗi ngày sẽ tập trung vào một chủ đề cụ thể
          và bao gồm các bài tập thực hành để củng cố kiến thức.
        </p>
        <p className="mb-2 font-medium">Sau khi hoàn thành lộ trình này, bạn sẽ có thể:</p>
        <ul className="space-y-2 mt-4">
          {[
            "Hiểu các khái niệm cơ bản của Git",
            "Sử dụng GitHub Desktop để quản lý mã nguồn",
            "Sử dụng Git trong VS Code",
            "Làm việc với các nhánh (branch) và giải quyết xung đột",
            "Đẩy dự án lên GitHub và quản lý repository",
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
