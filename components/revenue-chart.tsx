"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { maand: "Feb", omzet: 4200 },
  { maand: "Mrt", omzet: 5100 },
  { maand: "Apr", omzet: 4800 },
  { maand: "Mei", omzet: 6300 },
  { maand: "Jun", omzet: 7100 },
  { maand: "Jul", omzet: 8950 },
]

const config = {
  omzet: { label: "Omzet", color: "var(--chart-1)" },
} satisfies ChartConfig

export function RevenueChart() {
  return (
    <ChartContainer config={config} className="h-[220px] w-full">
      <AreaChart data={data} margin={{ left: 0, right: 12, top: 8 }}>
        <defs>
          <linearGradient id="omzetFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-omzet)" stopOpacity={0.35} />
            <stop offset="95%" stopColor="var(--color-omzet)" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="maand" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
        <Area
          dataKey="omzet"
          type="monotone"
          fill="url(#omzetFill)"
          stroke="var(--color-omzet)"
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  )
}
