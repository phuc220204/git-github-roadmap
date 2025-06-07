import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExerciseCard } from "@/components/exercise-card"

export default function Day5Content() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Ngày 5: Các tính năng nâng cao</h2>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Git ignore</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-4">.gitignore là file chỉ định các file hoặc thư mục mà Git sẽ bỏ qua, không theo dõi.</p>

          <h4 className="text-lg font-semibold mb-2">Tạo file .gitignore:</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Tạo file có tên là ".gitignore" trong thư mục gốc của repository</li>
            <li>Thêm các mẫu tên file hoặc thư mục cần bỏ qua</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Ví dụ về nội dung file .gitignore:</h4>
          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
            <pre>{`# Bỏ qua các file tạm
*.tmp
*.temp

# Bỏ qua thư mục node_modules
node_modules/

# Bỏ qua các file log
*.log

# Bỏ qua các file cấu hình IDE
.vscode/
.idea/

# Bỏ qua file môi trường
.env
.env.local`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Git rebase</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-4">
            Rebase là công cụ để tái cấu trúc lịch sử commit, giúp tạo ra lịch sử sạch và tuyến tính.
          </p>

          <h4 className="text-lg font-semibold mb-2">Rebase cơ bản:</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Chuyển sang branch cần rebase</li>
            <li>Rebase với branch đích (thường là main)</li>
          </ol>

          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
            <pre>{`# Chuyển sang feature branch
git checkout feature-branch

# Rebase với main
git rebase main`}</pre>
          </div>

          <h4 className="text-lg font-semibold mb-2">Interactive rebase:</h4>
          <p className="mb-4">Cho phép bạn chỉnh sửa, kết hợp, sắp xếp lại các commit:</p>
          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
            <pre>{`# Rebase tương tác 3 commit gần nhất
git rebase -i HEAD~3`}</pre>
          </div>
          <p className="mb-2">Các lệnh trong interactive rebase:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded">pick</code>: giữ commit
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded">reword</code>: thay đổi commit message
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded">edit</code>: dừng để chỉnh sửa commit
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded">squash</code>: kết hợp commit với commit trước đó
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded">fixup</code>: giống squash nhưng bỏ qua commit message
            </li>
            <li>
              <code className="bg-gray-100 px-1 py-0.5 rounded">drop</code>: xóa commit
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Git stash</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-4">Stash giúp lưu trữ tạm thời các thay đổi chưa commit để chuyển sang công việc khác.</p>

          <h4 className="text-lg font-semibold mb-2">Các lệnh stash cơ bản:</h4>
          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
            <pre>{`# Lưu tất cả thay đổi vào stash
git stash

# Lưu với message mô tả
git stash save "Mô tả thay đổi"

# Xem danh sách stash
git stash list

# Áp dụng stash gần nhất và giữ lại trong danh sách
git stash apply

# Áp dụng stash gần nhất và xóa khỏi danh sách
git stash pop

# Áp dụng stash cụ thể
git stash apply stash@{n}

# Xóa stash cụ thể
git stash drop stash@{n}

# Xóa tất cả stash
git stash clear`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Pull requests và code review</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold mb-2">Tạo Pull Request trên GitHub:</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Đẩy branch của bạn lên GitHub</li>
            <li>Truy cập repository trên GitHub</li>
            <li>
              Nhấp vào {"Pull requests"} {`>`} {"New pull request"}
            </li>
            <li>Chọn branch đích (thường là main) và branch của bạn</li>
            <li>Nhấp vào "Create pull request"</li>
            <li>Điền tiêu đề và mô tả cho pull request</li>
            <li>Nhấp vào "Create pull request" để hoàn tất</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Code Review:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Xem tab "Files changed" để xem các thay đổi</li>
            <li>Thêm comment cho từng dòng code bằng cách nhấp vào dấu "+" ở đầu dòng</li>
            <li>Thêm comment chung cho pull request trong tab "Conversation"</li>
            <li>
              Chọn "Review changes" để gửi review với một trong các trạng thái:
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Comment: Chỉ gửi feedback</li>
                <li>Approve: Đồng ý với các thay đổi</li>
                <li>Request changes: Yêu cầu chỉnh sửa trước khi merge</li>
              </ul>
            </li>
            <li>Sau khi pull request được approve, có thể merge bằng cách nhấp vào "Merge pull request"</li>
          </ol>
        </CardContent>
      </Card>

      <ExerciseCard
        title="Bài tập thực hành: Sử dụng tính năng nâng cao"
        steps={["Tạo file .gitignore trong repository của bạn với nội dung:"]}
        codeBlock={`# File tạm và log
*.log
*.tmp

# Thư mục IDE
.vscode/
.idea/`}
        additionalContent={
          <>
            <li className="mb-3">
              Tạo một branch mới tên là "feature-advanced":
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`git checkout -b feature-advanced`}</pre>
              </div>
            </li>
            <li className="mb-3">Tạo một file log tạm (test.log) để kiểm tra .gitignore</li>
            <li className="mb-3">
              Tạo một file JavaScript mới (script.js) với nội dung:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }
});`}</pre>
              </div>
            </li>
            <li className="mb-3">
              Liên kết file JavaScript với HTML bằng cách thêm vào trước thẻ đóng body:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`<script src="script.js"></script>`}</pre>
              </div>
            </li>
            <li className="mb-3">
              Commit các thay đổi:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`git add .gitignore
git add script.js
git add index.html
git commit -m "Add JavaScript and gitignore"`}</pre>
              </div>
            </li>
            <li className="mb-3">Thực hiện thêm một số commit nhỏ trên branch này</li>
            <li className="mb-3">
              Sử dụng interactive rebase để kết hợp các commit nhỏ:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`git rebase -i HEAD~3`}</pre>
              </div>
            </li>
            <li className="mb-3">
              Push branch lên GitHub:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`git push -u origin feature-advanced`}</pre>
              </div>
            </li>
            <li className="mb-3">Tạo Pull Request từ branch "feature-advanced" vào branch main</li>
          </>
        }
      />
    </div>
  )
}
