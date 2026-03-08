import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function ApiKeyNotice() {
  return (
    <Card className="w-full bg-amber-900/20 backdrop-blur-sm border-amber-800/50 shadow-xl mt-4">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
          <div className="space-y-2">
            <h3 className="font-semibold text-amber-400">YouTube API Key Required</h3>
            <p className="text-amber-200/90 text-sm">
              This application requires a YouTube Data API key to function. The administrator needs to set up the
              <code className="bg-black/30 px-1 py-0.5 rounded mx-1 text-amber-300">YOUTUBE_API_KEY</code>
              environment variable.
            </p>
            <div className="text-xs text-amber-200/70 space-y-1 mt-2">
              <p>To set up your own instance:</p>
              <ol className="list-decimal list-inside space-y-1 pl-2">
                <li>
                  Create a project in the{" "}
                  <a
                    href="https://console.cloud.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline"
                  >
                    Google Cloud Console
                  </a>
                </li>
                <li>Enable the YouTube Data API v3</li>
                <li>Create an API key</li>
                <li>Add the API key to your environment variables</li>
              </ol>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
