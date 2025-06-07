import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExerciseCard } from "@/components/exercise-card"
import { Quiz } from "@/components/quiz/quiz"
import { day3Questions } from "@/components/quiz/quiz-data"

export default function Day3Content() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Ngày 3: Làm việc với branch</h2>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Tạo và chuyển đổi branch</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-4">
            Branch cho phép bạn phát triển tính năng, sửa lỗi hoặc thử nghiệm mà không ảnh hưởng đến code chính.
          </p>

          <h4 className="text-lg font-semibold mb-2">Sử dụng GitHub Desktop:</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Nhấp vào "Current Branch" ở trên cùng</li>
            <li>Chọn "New Branch" và đặt tên cho branch mới</li>
            <li>Nhấp vào "Create Branch"</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Sử dụng Git command line:</h4>
          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
            <pre>{`# Xem danh sách branch
git branch

# Tạo branch mới
git branch feature-name

# Chuyển sang branch mới
git checkout feature-name

# Tạo và chuyển sang branch mới (kết hợp 2 lệnh trên)
git checkout -b feature-name`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Merge branch</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold mb-2">Sử dụng GitHub Desktop:</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Chuyển sang branch đích (thường là main)</li>
            <li>Nhấp vào "Branch" trong menu</li>
            <li>Chọn "Merge into current branch..."</li>
            <li>Chọn branch cần merge và nhấp "Merge"</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Sử dụng Git command line:</h4>
          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
            <pre>{`# Chuyển sang branch đích
git checkout main

# Merge branch feature vào branch hiện tại
git merge feature-name`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Giải quyết xung đột (conflict)</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-4">Xung đột xảy ra khi hai branch thay đổi cùng một phần của một file.</p>

          <h4 className="text-lg font-semibold mb-2">Sử dụng GitHub Desktop:</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>GitHub Desktop sẽ hiển thị thông báo về xung đột sau khi merge</li>
            <li>Nhấp vào "Open in editor" để mở editor mặc định</li>
            <li>
              Trong file, các xung đột được đánh dấu bằng
              <code className="bg-gray-100 px-1 py-0.5 rounded mx-1">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>,
              <code className="bg-gray-100 px-1 py-0.5 rounded mx-1">=======</code>, và
              <code className="bg-gray-100 px-1 py-0.5 rounded mx-1">&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>
            </li>
            <li>Chỉnh sửa file để giữ lại phần mong muốn</li>
            <li>Xóa các markers và lưu file</li>
            <li>Quay lại GitHub Desktop và commit các thay đổi</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Sử dụng Git command line:</h4>
          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
            <pre>{`# Kiểm tra trạng thái sau khi merge xảy ra xung đột
git status

# Mở file có xung đột trong editor và chỉnh sửa
# Sau khi chỉnh sửa, đánh dấu file đã giải quyết xung đột
git add filename.ext

# Hoàn tất merge
git commit`}</pre>
          </div>
        </CardContent>
      </Card>

      <ExerciseCard
        title="Bài tập thực hành: Làm việc với branch"
        steps={[
          'Mở repository "my-first-repo" đã tạo trước đó',
          'Tạo một branch mới tên là "feature-button"',
          'Chuyển sang branch "feature-button"',
          "Chỉnh sửa file index.html để thêm một nút:",
        ]}
        codeBlock={`<button>Click Me!</button>`}
        additionalSteps={[
          'Commit thay đổi với message "Add button"',
          "Chuyển về branch main",
          "Chỉnh sửa file index.html trên branch main để thêm một đoạn văn bản mới (ở cùng vị trí với nút trong branch feature-button)",
          'Commit thay đổi với message "Add new paragraph"',
          'Merge branch "feature-button" vào branch main',
          "Giải quyết xung đột nếu có",
          "Push các thay đổi lên GitHub",
        ]}
      />

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Kiểm tra kiến thức</h3>
        <Quiz
          title="Bài kiểm tra Ngày 3"
          description="Hãy kiểm tra kiến thức của bạn về làm việc với branch"
          questions={day3Questions}
        />
      </div>
    </div>
  )
}
