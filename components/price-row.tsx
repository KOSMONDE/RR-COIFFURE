import { Badge } from "@/components/ui/badge"

interface PriceRowProps {
  name: string
  from: string
  note?: string
  isNew?: boolean
}

export function PriceRow({ name, from, note, isNew }: PriceRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-[#F9A8D4]/40 last:border-0">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-[#2b1019]">{name}</h3>
          {isNew && (
            <Badge
              variant="outline"
              className="rounded-full border-[#F9A8D4]/60 bg-[#FDE7F3] text-[10px] font-semibold text-[#EC4899]"
            >
              Nouveau
            </Badge>
          )}
        </div>
        {note && <p className="mt-1 text-xs text-[#a0526e]">{note}</p>}
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold text-[#EC4899] whitespace-nowrap">{from}</p>
      </div>
    </div>
  )
}
