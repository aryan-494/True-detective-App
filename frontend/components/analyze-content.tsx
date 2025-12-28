"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function AnalyzeContent() {
  const [content, setContent] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAnalyze = async () => {
    if (!content.trim()) return

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL

      if (!API_URL) {
        throw new Error("API URL not configured")
      }

      const res = await fetch(`${API_URL}/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Analysis failed")
      }

      setResult(data.data)
    } catch (err: any) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold mb-3">Analyze Content</h1>
        <p className="text-muted-foreground">
          Paste a message, headline, or post you want to examine
        </p>
      </div>

      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Paste content here…"
        className="min-h-[200px]"
      />

      <Button onClick={handleAnalyze} disabled={loading}>
        {loading ? "Analyzing..." : "Run Analysis"}
      </Button>

      {error && (
        <div className="text-red-500 font-medium">
          ❌ {error}
        </div>
      )}

      {result && (
        <div className="mt-6 rounded-xl border bg-card shadow-sm">
          <div className="border-b px-5 py-3 font-semibold text-lg flex items-center gap-2">
            🧠 Gemini Analysis
          </div>

          <div className="px-5 py-4 max-h-[400px] overflow-y-auto">
            <p className="whitespace-pre-wrap leading-relaxed text-sm text-muted-foreground">
              {result}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
