import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ExerciseCard } from "@/components/exercise-card"
import { Quiz } from "@/components/quiz/quiz"
import { day4Questions } from "@/components/quiz/quiz-data"

export default function Day4Content() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Ngày 4: Sử dụng Git trong VS Code</h2>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Cài đặt và cấu hình Git trong VS Code</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold mb-2">Cài đặt VS Code:</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>
              Tải VS Code từ
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mx-1"
              >
                https://code.visualstudio.com/
              </a>
            </li>
            <li>Cài đặt và mở VS Code</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Cấu hình Git:</h4>
          <p className="mb-4">VS Code có tích hợp sẵn Git. Để kiểm tra và cấu hình:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Mở VS Code</li>
            <li>Nhấp vào biểu tượng Extensions (hoặc nhấn Ctrl+Shift+X)</li>
            <li>Tìm kiếm "GitLens" và cài đặt (tùy chọn, nhưng rất hữu ích)</li>
          </ol>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Thực hiện các thao tác Git cơ bản trong VS Code</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold mb-2">Mở và clone repository:</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Chọn "File" {`>`} "Open Folder" để mở một repository đã tồn tại</li>
            <li>
              Hoặc chọn "View" {`>`} "SCM" (hoặc nhấn Ctrl+Shift+G) {`>`} "Clone Repository"
            </li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Thực hiện các thao tác Git:</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Mở Source Control view (biểu tượng Git hoặc Ctrl+Shift+G)</li>
            <li>Các file thay đổi sẽ hiển thị trong "Changes"</li>
            <li>Nhấp vào dấu "+" bên cạnh file để stage</li>
            <li>Nhập commit message và nhấn Ctrl+Enter hoặc click vào nút "Commit"</li>
            <li>Sử dụng menu dropdown "..." để thực hiện các thao tác khác như push, pull, branch</li>
          </ol>

          <Alert className="mb-6">
            <AlertDescription>
              <h6 className="font-bold mb-2">Mô tả giao diện Git trong VS Code:</h6>
              <ul className="space-y-1">
                <li>
                  <strong>Source Control sidebar:</strong> Hiển thị ở bên trái với biểu tượng branch (Y)
                </li>
                <li>
                  <strong>Changes section:</strong> Danh sách các file đã thay đổi
                </li>
                <li>
                  <strong>Staged Changes:</strong> Các file đã được stage để commit
                </li>
                <li>
                  <strong>Commit box:</strong> Ô nhập message ở trên cùng
                </li>
                <li>
                  <strong>Action buttons:</strong> Các nút +, -, refresh, commit (✓)
                </li>
                <li>
                  <strong>Branch info:</strong> Hiển thị branch hiện tại ở status bar dưới cùng
                </li>
              </ul>
            </AlertDescription>
          </Alert>

          <h4 className="text-lg font-semibold mb-2">Các lệnh Git thông dụng trong VS Code:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Mở Command Palette (Ctrl+Shift+P)</li>
            <li>Gõ "Git:" để xem danh sách các lệnh Git có sẵn</li>
            <li>Một số lệnh thông dụng: "Git: Commit", "Git: Push", "Git: Pull", "Git: Checkout to..."</li>
          </ol>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Sử dụng extension hỗ trợ Git</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold mb-2">GitLens:</h4>
          <p className="mb-4">GitLens là một extension mạnh mẽ giúp mở rộng khả năng quản lý Git trong VS Code:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Hiển thị thông tin chi tiết về commit ngay trong code</li>
            <li>Xem lịch sử thay đổi của từng dòng code</li>
            <li>Tìm kiếm và so sánh giữa các commit</li>
            <li>Quản lý các branch và remote dễ dàng hơn</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Git History:</h4>
          <p className="mb-4">Git History giúp xem lịch sử Git một cách trực quan:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Xem graph lịch sử commit</li>
            <li>So sánh các phiên bản của file</li>
            <li>Tìm kiếm trong lịch sử commit</li>
          </ul>
        </CardContent>
      </Card>

      <ExerciseCard
        title="Bài tập thực hành: Sử dụng Git trong VS Code"
        steps={["Mở VS Code và cài đặt extension GitLens", 'Clone repository "my-first-repo" từ GitHub về VS Code:']}
        subSteps={[
          "Mở Command Palette (Ctrl+Shift+P)",
          'Gõ "Git: Clone" và nhấn Enter',
          "Nhập URL repository GitHub của bạn",
          "Chọn thư mục để lưu repository",
        ]}
        additionalContent={
          <>
            <li className="mb-3">
              Tạo một file CSS mới (styles.css) trong repository:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f4;
}

h1 {
    color: #333;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}`}</pre>
              </div>
            </li>
            <li className="mb-3">
              Liên kết file CSS với file HTML bằng cách thêm dòng sau vào phần head của file index.html:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`<link rel="stylesheet" href="styles.css">`}</pre>
              </div>
            </li>
            <li className="mb-3">
              Stage và commit các thay đổi trong VS Code:
              <ul className="list-disc pl-6 space-y-1 my-2">
                <li>Mở Source Control view (Ctrl+Shift+G)</li>
                <li>Stage tất cả các thay đổi bằng cách nhấp vào dấu "+" bên cạnh "Changes"</li>
                <li>Nhập commit message: "Add CSS styling"</li>
                <li>Nhấn Ctrl+Enter để commit</li>
              </ul>
            </li>
            <li className="mb-3">
              Push các thay đổi từ VS Code lên GitHub:
              <ul className="list-disc pl-6 space-y-1 my-2">
                <li>Nhấp vào "..." trong Source Control view</li>
                <li>Chọn "Push"</li>
              </ul>
            </li>
            <li className="mb-3">
              Xem lịch sử commit bằng GitLens:
              <ul className="list-disc pl-6 space-y-1 my-2">
                <li>Mở Command Palette (Ctrl+Shift+P)</li>
                <li>Gõ "GitLens: Show File History" và nhấn Enter</li>
              </ul>
            </li>
          </>
        }
      />

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Kiểm tra kiến thức</h3>
        <Quiz
          title="Bài kiểm tra Ngày 4"
          description="Hãy kiểm tra kiến thức của bạn về sử dụng Git trong VS Code"
          questions={day4Questions}
        />
      </div>
    </div>
  )
}
