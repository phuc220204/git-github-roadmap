import type { QuizQuestion } from "./quiz"

// Dữ liệu câu hỏi cho Ngày 1
export const day1Questions: QuizQuestion[] = [
  {
    question: "Git là gì?",
    options: [
      "Một hệ điều hành",
      "Một ngôn ngữ lập trình",
      "Một hệ thống quản lý phiên bản phân tán",
      "Một phần mềm thiết kế đồ họa",
    ],
    correctAnswer: 2,
    explanation:
      "Git là một hệ thống quản lý phiên bản phân tán (DVCS) được sử dụng để theo dõi các thay đổi trong mã nguồn trong quá trình phát triển phần mềm.",
  },
  {
    question: "Repository trong Git là gì?",
    options: [
      "Một thư mục chứa mã nguồn",
      "Nơi lưu trữ tất cả lịch sử các phiên bản của dự án",
      "Một nhánh trong Git",
      "Một công cụ để commit code",
    ],
    correctAnswer: 1,
    explanation:
      "Repository (kho lưu trữ) trong Git là nơi lưu trữ tất cả lịch sử các phiên bản của dự án, bao gồm tất cả các commit, branch, và metadata khác.",
  },
  {
    question: "Lệnh nào được sử dụng để cấu hình tên người dùng trong Git?",
    options: [
      'git config --global user.name "Tên của bạn"',
      'git init user.name "Tên của bạn"',
      'git user --set "Tên của bạn"',
      'git name --global "Tên của bạn"',
    ],
    correctAnswer: 0,
    explanation:
      'Lệnh git config --global user.name "Tên của bạn" được sử dụng để cấu hình tên người dùng trong Git, được sử dụng trong các commit.',
  },
  {
    question: "GitHub là gì?",
    options: [
      "Một phiên bản khác của Git",
      "Một dịch vụ lưu trữ repository Git trực tuyến",
      "Một giao diện đồ họa cho Git",
      "Một hệ điều hành dựa trên Git",
    ],
    correctAnswer: 1,
    explanation:
      "GitHub là một dịch vụ lưu trữ repository Git trực tuyến, cung cấp các tính năng bổ sung như quản lý dự án, theo dõi vấn đề, và hợp tác.",
  },
  {
    question: "GitHub Desktop là gì?",
    options: [
      "Một phiên bản của Git chỉ chạy trên máy tính để bàn",
      "Một ứng dụng web của GitHub",
      "Một giao diện đồ họa cho Git",
      "Một hệ điều hành dựa trên Git",
    ],
    correctAnswer: 2,
    explanation:
      "GitHub Desktop là một ứng dụng giao diện đồ họa (GUI) cho Git, giúp người dùng thực hiện các thao tác Git mà không cần sử dụng dòng lệnh.",
  },
]

// Dữ liệu câu hỏi cho Ngày 2
export const day2Questions: QuizQuestion[] = [
  {
    question: "Lệnh nào được sử dụng để thêm tất cả các file vào staging area?",
    options: ["git commit -a", "git add .", "git stage --all", "git push --all"],
    correctAnswer: 1,
    explanation:
      "Lệnh git add . được sử dụng để thêm tất cả các file đã thay đổi vào staging area, chuẩn bị cho việc commit.",
  },
  {
    question: "Commit trong Git là gì?",
    options: [
      "Một bản sao của repository",
      "Một bản ghi thay đổi tại một thời điểm cụ thể",
      "Một nhánh trong Git",
      "Một lệnh để đẩy code lên remote repository",
    ],
    correctAnswer: 1,
    explanation:
      "Commit trong Git là một bản ghi thay đổi tại một thời điểm cụ thể, bao gồm các thay đổi, thông điệp mô tả, tác giả, và thời gian.",
  },
  {
    question: "Lệnh nào được sử dụng để xem lịch sử commit?",
    options: ["git history", "git show", "git log", "git status"],
    correctAnswer: 2,
    explanation:
      "Lệnh git log được sử dụng để xem lịch sử commit trong repository, hiển thị thông tin về các commit như ID, tác giả, thời gian, và thông điệp.",
  },
  {
    question: "Lệnh nào được sử dụng để đẩy các thay đổi lên remote repository?",
    options: ["git commit", "git add", "git push", "git fetch"],
    correctAnswer: 2,
    explanation:
      "Lệnh git push được sử dụng để đẩy các commit từ local repository lên remote repository, chia sẻ các thay đổi với người khác.",
  },
  {
    question: "Lệnh nào được sử dụng để lấy các thay đổi từ remote repository về local repository?",
    options: ["git pull", "git fetch", "git clone", "git download"],
    correctAnswer: 0,
    explanation:
      "Lệnh git pull được sử dụng để lấy các thay đổi từ remote repository về local repository và tự động merge các thay đổi đó vào branch hiện tại.",
  },
]

// Dữ liệu câu hỏi cho Ngày 3
export const day3Questions: QuizQuestion[] = [
  {
    question: "Branch trong Git là gì?",
    options: [
      "Một bản sao của repository",
      "Một phiên bản song song của repository",
      "Một commit đặc biệt",
      "Một lệnh để đẩy code lên remote repository",
    ],
    correctAnswer: 1,
    explanation:
      "Branch (nhánh) trong Git là một phiên bản song song của repository, cho phép bạn phát triển tính năng, sửa lỗi hoặc thử nghiệm mà không ảnh hưởng đến code chính.",
  },
  {
    question: "Lệnh nào được sử dụng để tạo một branch mới và chuyển sang branch đó?",
    options: [
      "git branch new-branch",
      "git checkout new-branch",
      "git checkout -b new-branch",
      "git create new-branch",
    ],
    correctAnswer: 2,
    explanation:
      "Lệnh git checkout -b new-branch được sử dụng để tạo một branch mới và chuyển sang branch đó trong một lệnh duy nhất.",
  },
  {
    question: "Merge trong Git là gì?",
    options: [
      "Xóa một branch",
      "Tạo một branch mới",
      "Kết hợp các thay đổi từ các branch khác nhau",
      "Đẩy code lên remote repository",
    ],
    correctAnswer: 2,
    explanation:
      "Merge trong Git là quá trình kết hợp các thay đổi từ một branch vào branch khác, thường là từ một feature branch vào branch chính (main/master).",
  },
  {
    question: "Conflict trong Git xảy ra khi nào?",
    options: [
      "Khi bạn tạo một branch mới",
      "Khi bạn commit code",
      "Khi hai branch thay đổi cùng một phần của một file",
      "Khi bạn push code lên remote repository",
    ],
    correctAnswer: 2,
    explanation:
      "Conflict (xung đột) trong Git xảy ra khi hai branch thay đổi cùng một phần của một file và Git không thể tự động merge các thay đổi đó.",
  },
  {
    question: "Làm thế nào để giải quyết conflict trong Git?",
    options: [
      "Sử dụng lệnh git resolve",
      "Chỉnh sửa file để giữ lại phần mong muốn, xóa markers và commit",
      "Tạo một branch mới",
      "Xóa một trong hai branch gây conflict",
    ],
    correctAnswer: 1,
    explanation:
      "Để giải quyết conflict trong Git, bạn cần chỉnh sửa file để giữ lại phần mong muốn, xóa các markers conflict (<<<<<<, =======, >>>>>>>), sau đó add và commit các thay đổi.",
  },
]

// Dữ liệu câu hỏi cho Ngày 4
export const day4Questions: QuizQuestion[] = [
  {
    question: "VS Code có tích hợp sẵn Git không?",
    options: ["Có", "Không, cần cài đặt extension", "Chỉ trong phiên bản Pro", "Chỉ trên hệ điều hành Windows"],
    correctAnswer: 0,
    explanation:
      "VS Code có tích hợp sẵn Git, cho phép bạn thực hiện các thao tác Git cơ bản như commit, push, pull mà không cần cài đặt extension bổ sung.",
  },
  {
    question: "Làm thế nào để mở Source Control view trong VS Code?",
    options: ["Nhấn Ctrl+Shift+P và gõ 'Git'", "Nhấn Ctrl+Shift+G", "Nhấn Ctrl+G", "Nhấn Alt+G"],
    correctAnswer: 1,
    explanation:
      "Để mở Source Control view trong VS Code, bạn có thể nhấn Ctrl+Shift+G hoặc nhấp vào biểu tượng Git ở sidebar bên trái.",
  },
  {
    question: "GitLens là gì?",
    options: [
      "Một phiên bản của Git",
      "Một extension cho VS Code mở rộng khả năng quản lý Git",
      "Một công cụ để tạo repository",
      "Một lệnh Git để xem lịch sử commit",
    ],
    correctAnswer: 1,
    explanation:
      "GitLens là một extension phổ biến cho VS Code, mở rộng khả năng quản lý Git với các tính năng như hiển thị thông tin chi tiết về commit ngay trong code, xem lịch sử thay đổi của từng dòng code, và nhiều tính năng khác.",
  },
  {
    question: "Làm thế nào để stage một file trong VS Code?",
    options: [
      "Nhấp vào dấu '+' bên cạnh file trong Source Control view",
      "Nhấn Ctrl+S",
      "Nhấp chuột phải vào file và chọn 'Add to Git'",
      "Nhấn Alt+G, S",
    ],
    correctAnswer: 0,
    explanation:
      "Để stage một file trong VS Code, bạn nhấp vào dấu '+' bên cạnh file trong Source Control view. Điều này tương đương với lệnh git add trong command line.",
  },
  {
    question: "Làm thế nào để commit các thay đổi đã stage trong VS Code?",
    options: [
      "Nhấn Ctrl+Enter trong Source Control view",
      "Nhấn Ctrl+S",
      "Nhấp chuột phải vào file và chọn 'Commit'",
      "Nhấn Alt+G, C",
    ],
    correctAnswer: 0,
    explanation:
      "Để commit các thay đổi đã stage trong VS Code, bạn nhập commit message trong ô nhập ở trên cùng của Source Control view, sau đó nhấn Ctrl+Enter hoặc nhấp vào nút 'Commit'.",
  },
]

// Dữ liệu câu hỏi cho Ngày 5
export const day5Questions: QuizQuestion[] = [
  {
    question: "File .gitignore được sử dụng để làm gì?",
    options: [
      "Chỉ định các file hoặc thư mục mà Git sẽ bỏ qua, không theo dõi",
      "Chỉ định các file hoặc thư mục mà Git sẽ theo dõi",
      "Chỉ định các file hoặc thư mục mà Git sẽ commit tự động",
      "Chỉ định các file hoặc thư mục mà Git sẽ push lên remote repository",
    ],
    correctAnswer: 0,
    explanation:
      "File .gitignore được sử dụng để chỉ định các file hoặc thư mục mà Git sẽ bỏ qua, không theo dõi. Điều này hữu ích cho các file tạm, file log, thư mục node_modules, và các file cấu hình cá nhân.",
  },
  {
    question: "Git rebase được sử dụng để làm gì?",
    options: ["Tạo một branch mới", "Xóa một branch", "Tái cấu trúc lịch sử commit", "Đẩy code lên remote repository"],
    correctAnswer: 2,
    explanation:
      "Git rebase được sử dụng để tái cấu trúc lịch sử commit, giúp tạo ra lịch sử sạch và tuyến tính. Nó có thể được sử dụng để kết hợp các commit, thay đổi thứ tự commit, hoặc thay đổi commit message.",
  },
  {
    question: "Git stash được sử dụng để làm gì?",
    options: [
      "Lưu trữ tạm thời các thay đổi chưa commit",
      "Xóa các thay đổi chưa commit",
      "Commit các thay đổi",
      "Push các thay đổi lên remote repository",
    ],
    correctAnswer: 0,
    explanation:
      "Git stash được sử dụng để lưu trữ tạm thời các thay đổi chưa commit, cho phép bạn chuyển sang công việc khác và sau đó quay lại với các thay đổi đó sau.",
  },
  {
    question: "Pull request trên GitHub là gì?",
    options: [
      "Một lệnh để pull code từ remote repository",
      "Một yêu cầu để merge các thay đổi từ một branch vào branch khác",
      "Một lệnh để push code lên remote repository",
      "Một lệnh để tạo branch mới",
    ],
    correctAnswer: 1,
    explanation:
      "Pull request (PR) trên GitHub là một yêu cầu để merge các thay đổi từ một branch vào branch khác, thường là từ một feature branch vào branch chính (main/master). PR cho phép code review và thảo luận trước khi merge.",
  },
  {
    question: "Code review là gì?",
    options: [
      "Một công cụ để tự động kiểm tra code",
      "Một quá trình kiểm tra code của người khác trước khi merge",
      "Một lệnh Git để xem lịch sử commit",
      "Một extension cho VS Code",
    ],
    correctAnswer: 1,
    explanation:
      "Code review là quá trình kiểm tra code của người khác trước khi merge, nhằm đảm bảo chất lượng code, phát hiện lỗi, và chia sẻ kiến thức giữa các thành viên trong team.",
  },
]

// Dữ liệu câu hỏi cho Ngày 6
export const day6Questions: QuizQuestion[] = [
  {
    question: "Gitflow là gì?",
    options: [
      "Một lệnh Git",
      "Một extension cho VS Code",
      "Một quy trình làm việc phổ biến với Git",
      "Một công cụ để tạo repository",
    ],
    correctAnswer: 2,
    explanation:
      "Gitflow là một quy trình làm việc phổ biến với Git, định nghĩa một cấu trúc branch cụ thể cho việc phát triển, release, và hotfix, giúp quản lý dự án hiệu quả hơn.",
  },
  {
    question: "Branch nào thường được sử dụng để phát triển tính năng mới trong Gitflow?",
    options: ["main/master", "develop", "feature/*", "release/*"],
    correctAnswer: 2,
    explanation:
      "Trong Gitflow, các branch feature/* được sử dụng để phát triển tính năng mới. Mỗi tính năng mới sẽ được phát triển trong một branch riêng biệt, sau đó merge vào branch develop.",
  },
  {
    question: "Lệnh nào được sử dụng để hoàn tác commit gần nhất nhưng giữ các thay đổi?",
    options: ["git reset --soft HEAD^", "git reset --hard HEAD^", "git revert HEAD", "git checkout HEAD^"],
    correctAnswer: 0,
    explanation:
      "Lệnh git reset --soft HEAD^ được sử dụng để hoàn tác commit gần nhất nhưng giữ các thay đổi trong working directory, cho phép bạn chỉnh sửa và commit lại.",
  },
  {
    question: "Git alias được sử dụng để làm gì?",
    options: ["Đổi tên branch", "Đổi tên repository", "Tạo lệnh tắt cho các lệnh Git thường dùng", "Đổi tên commit"],
    correctAnswer: 2,
    explanation:
      "Git alias được sử dụng để tạo lệnh tắt cho các lệnh Git thường dùng, giúp tiết kiệm thời gian và tăng hiệu quả làm việc. Ví dụ: git config --global alias.co checkout tạo alias 'co' cho lệnh 'checkout'.",
  },
  {
    question: "Làm thế nào để tạo tag cho một phiên bản trong Git?",
    options: [
      'git tag -a v1.0.0 -m "Version 1.0.0"',
      "git version v1.0.0",
      "git release v1.0.0",
      "git create-tag v1.0.0",
    ],
    correctAnswer: 0,
    explanation:
      "Lệnh git tag -a v1.0.0 -m \"Version 1.0.0\" được sử dụng để tạo một annotated tag cho một phiên bản trong Git, với tên tag là 'v1.0.0' và thông điệp mô tả là 'Version 1.0.0'.",
  },
]

// Dữ liệu câu hỏi cho phần Hướng dẫn đẩy dự án
export const guideQuestions: QuizQuestion[] = [
  {
    question: "Lệnh nào được sử dụng để khởi tạo một Git repository mới?",
    options: ["git start", "git create", "git init", "git new"],
    correctAnswer: 2,
    explanation:
      "Lệnh git init được sử dụng để khởi tạo một Git repository mới trong thư mục hiện tại, tạo ra thư mục .git chứa tất cả metadata cần thiết cho repository.",
  },
  {
    question: "Lệnh nào được sử dụng để thêm remote repository?",
    options: [
      "git remote add origin [URL]",
      "git add remote origin [URL]",
      "git remote create origin [URL]",
      "git create remote origin [URL]",
    ],
    correctAnswer: 0,
    explanation:
      "Lệnh git remote add origin [URL] được sử dụng để thêm một remote repository với tên 'origin' và URL chỉ định, cho phép bạn push và pull code từ remote repository đó.",
  },
  {
    question: "Lệnh nào được sử dụng để đổi tên branch chính từ 'master' thành 'main'?",
    options: [
      "git rename master main",
      "git branch -m master main",
      "git change-name master main",
      "git switch master main",
    ],
    correctAnswer: 1,
    explanation:
      "Lệnh git branch -m master main được sử dụng để đổi tên branch từ 'master' thành 'main'. Đây là một thực hành phổ biến hiện nay để sử dụng thuật ngữ bao quát hơn.",
  },
  {
    question: "Tại sao nên tạo file .gitignore trước khi commit?",
    options: [
      "Để tăng tốc độ commit",
      "Để giảm kích thước repository",
      "Để loại trừ các file không cần thiết khỏi repository",
      "Để tự động commit các file",
    ],
    correctAnswer: 2,
    explanation:
      "Nên tạo file .gitignore trước khi commit để loại trừ các file không cần thiết khỏi repository, như file tạm, file log, thư mục node_modules, và các file cấu hình cá nhân, tránh commit nhầm các file này.",
  },
  {
    question: "Làm thế nào để push branch mới lên remote repository lần đầu tiên?",
    options: [
      "git push origin new-branch",
      "git push -u origin new-branch",
      "git push --set-upstream origin new-branch",
      "Cả B và C đều đúng",
    ],
    correctAnswer: 3,
    explanation:
      "Để push branch mới lên remote repository lần đầu tiên, bạn có thể sử dụng lệnh git push -u origin new-branch hoặc git push --set-upstream origin new-branch. Cả hai lệnh này đều thiết lập tracking relationship giữa local branch và remote branch.",
  },
]
