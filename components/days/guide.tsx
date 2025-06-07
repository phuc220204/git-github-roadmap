import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GuideContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Hướng dẫn đẩy dự án lên GitHub</h2>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-4">Các bước đẩy dự án lên GitHub</h3>
          <p className="mb-6">Hướng dẫn này sẽ giúp bạn đẩy một dự án đã có sẵn trên máy tính lên GitHub.</p>

          <Tabs defaultValue="desktop" className="mb-6">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="desktop">GitHub Desktop</TabsTrigger>
              <TabsTrigger value="cli">Git Command Line</TabsTrigger>
              <TabsTrigger value="vscode">VS Code</TabsTrigger>
            </TabsList>
            <TabsContent value="desktop" className="p-4 border rounded-lg">
              <h4 className="text-lg font-semibold mb-4 text-blue-600">Cách 1: Sử dụng GitHub Desktop</h4>
              <ol className="list-decimal pl-6 space-y-4">
                <li className="mb-3">
                  <strong>Tạo repository trên GitHub:</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Đăng nhập vào GitHub.com</li>
                    <li>Nhấp vào nút "New" (màu xanh) hoặc dấu "+" ở góc trên phải</li>
                    <li>Chọn "New repository"</li>
                    <li>Điền tên repository</li>
                    <li>Chọn "Public" hoặc "Private"</li>
                    <li>KHÔNG chọn "Initialize with README" nếu dự án đã có sẵn</li>
                    <li>Nhấp "Create repository"</li>
                  </ul>
                </li>
                <li className="mb-3">
                  <strong>Thêm repository vào GitHub Desktop:</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Mở GitHub Desktop</li>
                    <li>Chọn "File" {`>`} "Add Local Repository"</li>
                    <li>Chọn thư mục dự án của bạn</li>
                    <li>Nhấp "Add Repository"</li>
                  </ul>
                </li>
                <li className="mb-3">
                  <strong>Publish repository:</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Nhấp vào "Publish repository" trong GitHub Desktop</li>
                    <li>Chọn tên và mô tả</li>
                    <li>Chọn "Keep this code private" nếu muốn repo riêng tư</li>
                    <li>Nhấp "Publish Repository"</li>
                  </ul>
                </li>
                <li className="mb-3">
                  <strong>Commit và push các thay đổi:</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Tất cả file sẽ hiển thị trong "Changes"</li>
                    <li>Nhập commit message trong ô "Summary"</li>
                    <li>Nhấp "Commit to main"</li>
                    <li>Nhấp "Push origin" để đẩy lên GitHub</li>
                  </ul>
                </li>
              </ol>
            </TabsContent>
            <TabsContent value="cli" className="p-4 border rounded-lg">
              <h4 className="text-lg font-semibold mb-4 text-green-600">Cách 2: Sử dụng Git Command Line</h4>
              <ol className="list-decimal pl-6 space-y-4">
                <li className="mb-3">
                  <strong>Tạo repository trên GitHub</strong> (giống như cách 1)
                </li>
                <li className="mb-3">
                  <strong>Mở terminal/command prompt tại thư mục dự án:</strong>
                  <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                    <pre>{`cd path/to/your/project`}</pre>
                  </div>
                </li>
                <li className="mb-3">
                  <strong>Khởi tạo Git repository:</strong>
                  <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                    <pre>{`git init`}</pre>
                  </div>
                </li>
                <li className="mb-3">
                  <strong>Thêm tất cả file vào staging:</strong>
                  <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                    <pre>{`git add .`}</pre>
                  </div>
                </li>
                <li className="mb-3">
                  <strong>Commit lần đầu:</strong>
                  <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                    <pre>{`git commit -m "Initial commit"`}</pre>
                  </div>
                </li>
                <li className="mb-3">
                  <strong>Thêm remote repository:</strong>
                  <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                    <pre>{`git remote add origin https://github.com/username/repository-name.git`}</pre>
                  </div>
                </li>
                <li className="mb-3">
                  <strong>Đẩy code lên GitHub:</strong>
                  <div className="bg-gray-100 p-4 rounded-md font-mono text-sm my-2 overflow-x-auto">
                    <pre>{`git branch -M main
git push -u origin main`}</pre>
                  </div>
                </li>
              </ol>
            </TabsContent>
            <TabsContent value="vscode" className="p-4 border rounded-lg">
              <h4 className="text-lg font-semibold mb-4 text-purple-600">Cách 3: Sử dụng VS Code</h4>
              <ol className="list-decimal pl-6 space-y-4">
                <li className="mb-3">
                  <strong>Tạo repository trên GitHub</strong> (giống như các cách trên)
                </li>
                <li className="mb-3">
                  <strong>Mở dự án trong VS Code:</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Mở VS Code</li>
                    <li>File {`>`} Open Folder</li>
                    <li>Chọn thư mục dự án</li>
                  </ul>
                </li>
                <li className="mb-3">
                  <strong>Khởi tạo Git repository:</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Mở Source Control view (Ctrl+Shift+G)</li>
                    <li>Nhấp "Initialize Repository"</li>
                  </ul>
                </li>
                <li className="mb-3">
                  <strong>Stage và commit files:</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Tất cả file sẽ hiển thị trong "Changes"</li>
                    <li>Nhấp dấu "+" để stage tất cả</li>
                    <li>Nhập commit message</li>
                    <li>Nhấn Ctrl+Enter để commit</li>
                  </ul>
                </li>
                <li className="mb-3">
                  <strong>Thêm remote và push:</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Mở Command Palette (Ctrl+Shift+P)</li>
                    <li>Gõ "Git: Add Remote" và nhấn Enter</li>
                    <li>Nhập URL của GitHub repository</li>
                    <li>Đặt tên "origin"</li>
                    <li>
                      Trong Source Control, nhấp "..." {`>`} "Push to..." {`>`} "origin"
                    </li>
                  </ul>
                </li>
              </ol>
            </TabsContent>
          </Tabs>

          <Alert variant="warning" className="mb-6">
            <AlertTitle>Lưu ý quan trọng:</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Tạo file <code className="bg-gray-100 px-1 py-0.5 rounded">.gitignore</code> trước khi commit để loại
                  trừ các file không cần thiết
                </li>
                <li>Kiểm tra kỹ các file trước khi push để tránh upload nhầm thông tin nhạy cảm</li>
                <li>Viết commit message rõ ràng và có ý nghĩa</li>
                <li>
                  Nếu repository đã có trên GitHub và có README, dùng
                  <code className="bg-gray-100 px-1 py-0.5 rounded ml-1">git pull origin main</code> trước khi push
                </li>
              </ul>
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader className="bg-gray-700 text-white">
              <CardTitle>Ví dụ về cấu trúc file .gitignore phổ biến</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto">
                <pre>{`# Logs
logs
*.log
npm-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# nyc test coverage
.nyc_output

# Grunt intermediate storage
.grunt

# node_modules
node_modules/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db`}</pre>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}
