import { formatDate } from "@lib/utils"
import type { CollectionEntry } from "astro:content"

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">
  pill?: boolean
}

export default function ArrowCard({entry, pill}: Props) {
    return (
      <a href={`/${entry.collection}/${entry.slug}`} class="group p-4 gap-3 flex items-center border border-cyber-blue/50 hover:bg-cyber-blue/10 transition-colors duration-300 ease-in-out">
      <div class="w-full text-cyber-green">
        <div class="flex flex-wrap items-center gap-2">
          {pill &&
            <div class="text-sm capitalize px-2 py-0.5 rounded-full border border-cyber-pink/50">
              {entry.collection === "blog" ? "post" : "project"}
            </div>
          }
          <div class="text-sm uppercase">
            {formatDate(entry.data.date)}
          </div>
        </div>
        <div class="font-semibold mt-3 text-cyber-blue text-glow">
          {entry.data.title}
        </div>

        <div class="text-sm line-clamp-2">
          {entry.data.summary}
        </div>
        <ul class="flex flex-wrap mt-2 gap-1">
          {entry.data.tags.map((tag: string) => (
            <li class="text-xs uppercase py-0.5 px-1 rounded bg-cyber-pink/20 text-cyber-pink">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-cyber-blue group-hover:text-cyber-pink">
        <line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
        <polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
      </svg>
    </a>
   )
}