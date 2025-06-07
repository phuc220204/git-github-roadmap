import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExerciseCard } from "@/components/exercise-card"

export default function Day6Content() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Ngày 6: Làm việc nhóm và ôn tập</h2>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Quy trình làm việc nhóm với Git</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold mb-2">Quy trình Gitflow:</h4>
          <p className="mb-4">Gitflow là quy trình làm việc phổ biến với Git, có các branch chính:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>main/master</strong>: Branch chính, chứa code sản phẩm
            </li>
            <li>
              <strong>develop</strong>: Branch phát triển, chứa code đang trong quá trình phát triển
            </li>
            <li>
              <strong>feature/*</strong>: Các branch phát triển tính năng mới
            </li>
            <li>
              <strong>release/*</strong>: Branch chuẩn bị cho việc release
            </li>
            <li>
              <strong>hotfix/*</strong>: Branch để sửa lỗi khẩn cấp trên main
            </li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Quy trình làm việc cơ bản:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Cập nhật branch chính (main hoặc develop):
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`git checkout main
git pull origin main`}</pre>
              </div>
            </li>
            <li>
              Tạo branch mới cho tính năng:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`git checkout -b feature/new-feature`}</pre>
              </div>
            </li>
            <li>Phát triển và commit code trên branch này</li>
            <li>
              Thường xuyên cập nhật từ branch chính để tránh xung đột lớn:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`git checkout main
git pull origin main
git checkout feature/new-feature
git merge main`}</pre>
              </div>
            </li>
            <li>
              Hoàn tất phát triển và push branch lên remote:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`git push -u origin feature/new-feature`}</pre>
              </div>
            </li>
            <li>Tạo Pull Request và code review</li>
            <li>Merge vào branch chính sau khi được approve</li>
          </ol>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Khắc phục lỗi thường gặp</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold mb-2">Lỗi khi pull/push:</h4>
          <ul className="list-disc pl-6 space-y-4 mb-6">
            <li>
              <strong>Lỗi conflict khi pull:</strong>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`# Lưu tạm thời các thay đổi
git stash
# Pull từ remote
git pull origin main
# Áp dụng lại các thay đổi
git stash pop
# Giải quyết conflict và commit`}</pre>
              </div>
            </li>
            <li>
              <strong>Lỗi push bị từ chối:</strong>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`# Pull về trước
git pull origin main
# Giải quyết conflict nếu có và commit
# Push lại
git push origin main`}</pre>
              </div>
            </li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Hoàn tác thay đổi:</h4>
          <ul className="list-disc pl-6 space-y-4 mb-6">
            <li>
              <strong>Hoàn tác file chưa stage:</strong>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`git checkout -- filename.ext`}</pre>
              </div>
            </li>
            <li>
              <strong>Hoàn tác file đã stage:</strong>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`git reset HEAD filename.ext
git checkout -- filename.ext`}</pre>
              </div>
            </li>
            <li>
              <strong>Hoàn tác commit gần nhất:</strong>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`# Hoàn tác nhưng giữ các thay đổi
git reset --soft HEAD^

# Hoàn tác và xóa các thay đổi
git reset --hard HEAD^`}</pre>
              </div>
            </li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Sửa commit message:</h4>
          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
            <pre>{`# Sửa commit gần nhất
git commit --amend -m "New commit message"`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle>Tối ưu hóa quy trình làm việc</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold mb-2">Sử dụng git alias:</h4>
          <p className="mb-4">Tạo lệnh tắt cho các lệnh Git thường dùng:</p>
          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
            <pre>{`# Tạo alias
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'`}</pre>
          </div>
          <p className="mb-4">
            Với các alias trên, bạn có thể dùng <code className="bg-gray-100 px-1 py-0.5 rounded">git co</code> thay vì
            <code className="bg-gray-100 px-1 py-0.5 rounded">git checkout</code>,{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">git ci</code> thay vì
            <code className="bg-gray-100 px-1 py-0.5 rounded">git commit</code>, v.v.
          </p>

          <h4 className="text-lg font-semibold mb-2">Tạo commit tốt:</h4>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Mỗi commit nên đại diện cho một thay đổi logic, không quá lớn và không quá nhỏ</li>
            <li>Viết commit message rõ ràng, theo chuẩn: "Động từ + mô tả ngắn gọn (50 ký tự)"</li>
            <li>Thêm phần mô tả chi tiết nếu cần</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Sử dụng Git hooks:</h4>
          <p className="mb-4">
            Git hooks là scripts tự động chạy trước hoặc sau các sự kiện Git như commit, push, v.v.
          </p>
          <p className="mb-2">Ví dụ về pre-commit hook để kiểm tra linting:</p>
          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
            <pre>{`#!/bin/sh
# File: .git/hooks/pre-commit
# Kiểm tra linting trước khi commit

npm run lint
if [ $? -ne 0 ]; then
    echo "Linting failed! Commit aborted."
    exit 1
fi`}</pre>
          </div>
        </CardContent>
      </Card>

      <ExerciseCard
        title="Bài tập thực hành: Quy trình làm việc nhóm"
        steps={[
          'Tạo một repository mới trên GitHub tên là "team-project"',
          "Clone repository về máy",
          "Tạo branch develop:",
        ]}
        codeBlock={`git branch develop
git checkout develop
git push -u origin develop`}
        additionalContent={
          <>
            <li className="mb-3">
              Tạo branch cho tính năng mới:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`git checkout -b feature/homepage`}</pre>
              </div>
            </li>
            <li className="mb-3">
              Tạo file index.html đơn giản:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`<!DOCTYPE html>
<html>
<head>
    <title>Team Project</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Our Team Project</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h2>Welcome to our project!</h2>
            <p>This is a sample team project to practice Git workflow.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 Team Project</p>
    </footer>
</body>
</html>`}</pre>
              </div>
            </li>
            <li className="mb-3">
              Tạo file styles.css:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: white;
    padding: 1rem;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
}

nav a {
    color: white;
    text-decoration: none;
}

main {
    padding: 1rem;
}

footer {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}`}</pre>
              </div>
            </li>
            <li className="mb-3">
              Commit và push:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`git add .
git commit -m "Add homepage with basic styling"
git push -u origin feature/homepage`}</pre>
              </div>
            </li>
            <li className="mb-3">Tạo Pull Request từ branch feature/homepage vào branch develop</li>
            <li className="mb-3">Merge Pull Request</li>
            <li className="mb-3">
              Tạo branch release:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`git checkout develop
git pull origin develop
git checkout -b release/v1.0.0`}</pre>
              </div>
            </li>
            <li className="mb-3">Thực hiện các chỉnh sửa cuối cùng nếu cần</li>
            <li className="mb-3">
              Merge release vào cả main và develop:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`# Merge vào main
git checkout main
git merge release/v1.0.0
git push origin main

# Merge vào develop
git checkout develop
git merge release/v1.0.0
git push origin develop`}</pre>
              </div>
            </li>
            <li className="mb-3">
              Tạo tag cho phiên bản:
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                <pre>{`git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0`}</pre>
              </div>
            </li>
          </>
        }
      />
    </div>
  )
}
