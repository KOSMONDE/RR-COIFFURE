"use client"

import { useEffect, useState } from "react"

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(
    sectionIds[0] ?? null,
  )

  useEffect(() => {
    if (sectionIds.length === 0) return

    const handleScroll = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[]

      if (sections.length === 0) return

      const scrollY = window.scrollY
      const offset = 160 // hauteur approximative du header + marge

      let currentId: string | null = sections[0].id

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - offset
        if (scrollY >= sectionTop) {
          currentId = section.id
        }
      })

      setActiveId(currentId)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [sectionIds])

  return activeId
}
