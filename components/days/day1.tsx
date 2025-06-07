import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExerciseCard } from "@/components/exercise-card"
import { Quiz } from "@/components/quiz/quiz"
import { day1Questions } from "@/components/quiz/quiz-data"
import { BookmarkButton } from "@/components/bookmark-button"
import { NoteButton } from "@/components/note-button"
import { NoteDisplay } from "@/components/note-display"
import { CompletionCheckbox } from "@/components/completion-checkbox"

export default function Day1Content() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Ngày 1: Làm quen với Git và GitHub</h2>

      <Card className="mb-6" id="day1-basic-concepts">
        <CardHeader
          actions={
            <div className="flex items-center gap-1">
              <CompletionCheckbox id="day1-basic-concepts" title="Khái niệm cơ bản về quản lý phiên bản" />
              <NoteButton sectionId="day1-basic-concepts" sectionTitle="Khái niệm cơ bản về quản lý phiên bản" />
              <BookmarkButton id="day1-basic-concepts" title="Khái niệm cơ bản về quản lý phiên bản" path="day1" />
            </div>
          }
        >
          <CardTitle>Khái niệm cơ bản về quản lý phiên bản</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-4">
            Git là một hệ thống quản lý phiên bản phân tán (Distributed Version Control System - DVCS) được sử dụng để
            theo dõi các thay đổi trong mã nguồn trong quá trình phát triển phần mềm.
          </p>
          <h4 className="text-lg font-semibold mb-2">Các khái niệm cơ bản:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Repository (Kho lưu trữ)</strong>: Nơi lưu trữ tất cả lịch sử các phiên bản của dự án
            </li>
            <li>
              <strong>Commit</strong>: Một bản ghi thay đổi tại một thời điểm cụ thể
            </li>
            <li>
              <strong>Branch (Nhánh)</strong>: Một phiên bản song song của repository
            </li>
            <li>
              <strong>Merge</strong>: Kết hợp các thay đổi từ các branch khác nhau
            </li>
            <li>
              <strong>Pull/Push</strong>: Lấy về hoặc đẩy lên các thay đổi giữa các repository
            </li>
          </ul>

          <NoteDisplay sectionId="day1-basic-concepts" sectionTitle="Khái niệm cơ bản về quản lý phiên bản" />
        </CardContent>
      </Card>

      <Card className="mb-6" id="day1-installation">
        <CardHeader
          actions={
            <div className="flex items-center gap-1">
              <CompletionCheckbox id="day1-installation" title="Cài đặt Git và GitHub Desktop" />
              <NoteButton sectionId="day1-installation" sectionTitle="Cài đặt Git và GitHub Desktop" />
              <BookmarkButton id="day1-installation" title="Cài đặt Git và GitHub Desktop" path="day1" />
            </div>
          }
        >
          <CardTitle>Cài đặt Git và GitHub Desktop</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold mb-2">Cài đặt Git:</h4>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>
              Truy cập
              <a
                href="https://git-scm.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mx-1"
              >
                https://git-scm.com/downloads
              </a>
            </li>
            <li>Tải phiên bản phù hợp với hệ điều hành của bạn</li>
            <li>Thực hiện cài đặt theo hướng dẫn</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Cài đặt GitHub Desktop:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Truy cập
              <a
                href="https://desktop.github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mx-1"
              >
                https://desktop.github.com/
              </a>
            </li>
            <li>Tải phiên bản phù hợp với hệ điều hành của bạn</li>
            <li>Thực hiện cài đặt theo hướng dẫn</li>
          </ol>

          <NoteDisplay sectionId="day1-installation" sectionTitle="Cài đặt Git và GitHub Desktop" />
        </CardContent>
      </Card>

      <Card className="mb-6" id="day1-github-account">
        <CardHeader
          actions={
            <div className="flex items-center gap-1">
              <CompletionCheckbox id="day1-github-account" title="Thiết lập tài khoản GitHub" />
              <NoteButton sectionId="day1-github-account" sectionTitle="Thiết lập tài khoản GitHub" />
              <BookmarkButton id="day1-github-account" title="Thiết lập tài khoản GitHub" path="day1" />
            </div>
          }
        >
          <CardTitle>Thiết lập tài khoản GitHub</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Truy cập
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mx-1"
              >
                https://github.com/
              </a>
            </li>
            <li>Nhấp vào "Sign up" và làm theo hướng dẫn để tạo tài khoản mới</li>
            <li>Đăng nhập vào GitHub Desktop bằng tài khoản GitHub của bạn</li>
          </ol>

          <NoteDisplay sectionId="day1-github-account" sectionTitle="Thiết lập tài khoản GitHub" />
        </CardContent>
      </Card>

      <ExerciseCard
        title="Bài tập thực hành: Thiết lập môi trường Git"
        bookmarkId="day1-exercise"
        bookmarkTitle="Bài tập thực hành: Thiết lập môi trường Git"
        bookmarkPath="day1"
        noteId="day1-exercise"
        noteTitle="Bài tập thực hành: Thiết lập môi trường Git"
        completionId="day1-exercise"
        steps={[
          "Cài đặt Git và GitHub Desktop",
          "Tạo tài khoản GitHub (nếu chưa có)",
          "Cấu hình Git trên máy tính của bạn bằng terminal hoặc command prompt:",
        ]}
        codeBlock={`git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
git config --global --list # Kiểm tra cấu hình`}
        conclusion="Sau khi hoàn tất, bạn đã sẵn sàng để bắt đầu sử dụng Git!"
      />

      <div className="mt-10" id="day1-quiz">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-xl font-bold">Kiểm tra kiến thức</h3>
          <CompletionCheckbox id="day1-quiz" title="Bài kiểm tra Ngày 1" />
        </div>
        <Quiz
          title="Bài kiểm tra Ngày 1"
          description="Hãy kiểm tra kiến thức của bạn về Git và GitHub cơ bản"
          questions={day1Questions}
        />
      </div>
    </div>
  )
}
