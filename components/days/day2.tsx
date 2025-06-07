import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExerciseCard } from "@/components/exercise-card"
import { Quiz } from "@/components/quiz/quiz"
import { day2Questions } from "@/components/quiz/quiz-data"

export default function Day2Content() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Ngày 2: Làm việc với Git cơ bản</h2>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Tạo repository</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold mb-2">Tạo repository trên GitHub:</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Đăng nhập vào GitHub</li>
            <li>Nhấp vào nút "+" ở góc trên bên phải và chọn "New repository"</li>
            <li>Đặt tên và mô tả cho repository</li>
            <li>Chọn "Public" hoặc "Private"</li>
            <li>Chọn "Initialize this repository with a README" (nếu muốn)</li>
            <li>Nhấp vào "Create repository"</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Tạo repository từ GitHub Desktop:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Mở GitHub Desktop</li>
            <li>Chọn "File" {`>`} "New repository"</li>
            <li>Điền thông tin cần thiết và nhấp vào "Create repository"</li>
          </ol>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Thêm và commit files</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold mb-2">Sử dụng GitHub Desktop:</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Thêm file vào thư mục của repository</li>
            <li>GitHub Desktop sẽ hiển thị các thay đổi trong tab "Changes"</li>
            <li>Nhập mô tả commit trong ô "Summary"</li>
            <li>Nhấp vào "Commit to main"</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Sử dụng Git command line:</h4>
          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
            <pre>{`# Thêm file cụ thể
git add filename.ext

# Thêm tất cả các file
git add .

# Commit với message
git commit -m "Mô tả commit"`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Xem lịch sử các thay đổi</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold mb-2">Sử dụng GitHub Desktop:</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Chọn tab "History" để xem lịch sử các commit</li>
            <li>Nhấp vào từng commit để xem chi tiết thay đổi</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Sử dụng Git command line:</h4>
          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
            <pre>{`# Xem lịch sử commit
git log

# Xem lịch sử với format ngắn gọn
git log --oneline

# Xem thay đổi chi tiết của một commit
git show [commit-id]`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Push và pull từ remote repository</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold mb-2">Sử dụng GitHub Desktop:</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Sau khi commit, nhấp vào "Push origin" để đẩy lên GitHub</li>
            <li>Để lấy về các thay đổi mới, nhấp vào "Fetch origin" và sau đó "Pull origin"</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Sử dụng Git command line:</h4>
          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
            <pre>{`# Push lên remote repository
git push origin main

# Fetch các thay đổi từ remote
git fetch

# Pull các thay đổi từ remote
git pull origin main`}</pre>
          </div>
        </CardContent>
      </Card>

      <ExerciseCard
        title="Bài tập thực hành: Tạo và quản lý repository"
        steps={[
          'Tạo một repository mới trên GitHub với tên "my-first-repo"',
          "Clone repository về máy của bạn bằng GitHub Desktop",
          "Tạo một file HTML đơn giản trong thư mục repository:",
        ]}
        codeBlock={`<!DOCTYPE html>
<html>
<head>
    <title>My First Repo</title>
</head>
<body>
    <h1>Hello, Git!</h1>
    <p>This is my first repository.</p>
</body>
</html>`}
        additionalSteps={[
          'Commit file này với message "Add index.html"',
          "Chỉnh sửa file, thêm một đoạn văn bản mới",
          'Commit lại với message "Update index.html"',
          "Push các thay đổi lên GitHub",
          "Xem lịch sử commit trong GitHub Desktop",
        ]}
      />

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Kiểm tra kiến thức</h3>
        <Quiz
          title="Bài kiểm tra Ngày 2"
          description="Hãy kiểm tra kiến thức của bạn về làm việc với Git cơ bản"
          questions={day2Questions}
        />
      </div>
    </div>
  )
}
