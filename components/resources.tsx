import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function Resources() {
  return (
    <Card>
      <CardHeader className="bg-blue-500 dark:bg-blue-700 text-white">
        <CardTitle>Tài liệu tham khảo</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="text-lg font-semibold mb-3">Tài liệu chính thức:</h5>
            <ul className="space-y-2">
              {[
                { name: "Git Documentation", url: "https://git-scm.com/doc" },
                { name: "GitHub Docs", url: "https://docs.github.com/" },
                { name: "GitHub Desktop", url: "https://desktop.github.com/" },
              ].map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    {resource.name}
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-3">Hướng dẫn tương tác:</h5>
            <ul className="space-y-2">
              {[
                { name: "Learn Git Branching", url: "https://learngitbranching.js.org/" },
                { name: "Try Git", url: "https://try.github.io/" },
                { name: "Git Immersion", url: "https://gitimmersion.com/" },
              ].map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    {resource.name}
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-3">Video hướng dẫn:</h5>
            <ul className="space-y-2">
              {[
                {
                  name: "Git và GitHub cho người mới bắt đầu",
                  url: "https://www.youtube.com/watch?v=1JuYQgpbrW0&list=PLyxSzL3F7485Xgn7novgNxnou8QU6i485",
                },
                {
                  name: "Làm việc với Git Branch",
                  url: "https://www.youtube.com/watch?v=e2IbNHi4uCI&list=PLyxSzL3F7485Xgn7novgNxnou8QU6i485",
                },
                {
                  name: "Giải quyết xung đột trong Git",
                  url: "https://www.youtube.com/watch?v=lX9hsdsAeTk&list=PLyxSzL3F7485Xgn7novgNxnou8QU6i485",
                },
                {
                  name: "Toàn bộ playlist hướng dẫn Git & GitHub",
                  url: "https://www.youtube.com/playlist?list=PLyxSzL3F7485Xgn7novgNxnou8QU6i485",
                },
              ].map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    {resource.name}
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
