import { second2timestamp, timestamp2seconds } from "./timestamp"
import { v4 as uuid } from "uuid"

export type Captions = {
  start: number
  end: number
  content: string
  hash: string // for rendering
}

export function captionsCompare(a: Captions, b: Captions): number {
  if (a.start > b.start) return 1
  else if (b.start > a.start) return -1
  else return 0
}

export function areSameCaptions(a: Captions, b: Captions): boolean {
  return (a.start === b.start) && (a.end === b.end) && (a.content === b.content)
}

// save as .vtt format
export function export2srt({ caps }: { caps: Captions[] }): string {
  return caps.map((c, i) =>
    `${i + 1}\n${second2timestamp(c.start, "complete")} --> ${second2timestamp(c.end, "complete")}\n${c.content}`)
    .join('\n\n')
}

export function parseSrt(content: string): Captions[] {
  const matches = Array.from(content.matchAll(
    /\d+\n([\d,:]{12}) --> ([\d,:]{12})\n(.+?)(?=\d+\n[\d,:]{12}|$)/gs))

  return matches.map(m => ({
    start: timestamp2seconds(m[1]),
    end: timestamp2seconds(m[2]),
    content: m[3].trim(),
    hash: uuid()
  }))
}