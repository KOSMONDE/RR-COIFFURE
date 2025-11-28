import { Badge } from "@/components/ui/badge"

interface PriceRowProps {
  name: string
  from: string
  note?: string
  isNew?: boolean
}

export function PriceRow({ name, from, note, isNew }: PriceRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-border/50 last:border-0">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-foreground">{name}</h3>
          {isNew && (
            <Badge variant="default" className="text-xs rounded-full">
              Nouveau
            </Badge>
          )}
        </div>
        {note && <p className="text-sm text-muted-foreground mt-1">{note}</p>}
      </div>
      <div className="text-right">
        <p className="font-semibold text-primary whitespace-nowrap">{from}</p>
      </div>
    </div>
  )
}
