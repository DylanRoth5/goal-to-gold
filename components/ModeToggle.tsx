"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import sun from "../public/sun.svg"
import moon from "../public/moon.svg"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-10 h-10 p-0">
          <Image src={sun} alt="sun" height={20} width={20} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 translate-x-[0.6rem] transition-all dark:-rotate-90 dark:scale-0"></Image>
          <Image src={moon} alt="moon" height={20} width={20} className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 -translate-x-[0.6rem] transition-all dark:rotate-0 dark:scale-100"></Image>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
