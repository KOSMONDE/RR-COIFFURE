import Image from "next/image"
import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ServiceCardProps {
  title: string
  desc: string
  priceFrom: string
  imageSrc: string
  href: string
}

export function ServiceCard({ title, desc, priceFrom, imageSrc, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group">
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] rounded-2xl border-brand-100">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-xl font-bold text-ink group-hover:text-brand-600 transition-colors">
              {title}
            </CardTitle>
            <Badge
              variant="secondary"
              className="shrink-0 rounded-full bg-gradient-to-r from-brand-300 to-brand-600 text-white border-0"
            >
              {priceFrom}
            </Badge>
          </div>
          <CardDescription className="text-muted-foreground">{desc}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
