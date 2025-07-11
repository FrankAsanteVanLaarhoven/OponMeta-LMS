"use client"

import type React from "react"
import { Award, Star } from "lucide-react"
import { cn } from "@/lib/utils"

export interface AwardsComponentProps {
  variant?: "stamp" | "award" | "certificate" | "badge" | "sticker" | "id-card"
  title: string
  subtitle?: string
  description?: string
  date?: string
  recipient?: string
  level?: "bronze" | "silver" | "gold" | "platinum"
  className?: string
  showIcon?: boolean
  customIcon?: React.ReactNode
}

const levelColors = {
  bronze: "from-amber-600 to-amber-800",
  silver: "from-gray-400 to-gray-600",
  gold: "from-yellow-400 to-yellow-600",
  platinum: "from-slate-300 to-slate-500",
}

export function Awards({
  variant = "badge",
  title,
  subtitle,
  description,
  date,
  recipient,
  level = "gold",
  className,
  showIcon = true,
  customIcon,
}: AwardsComponentProps) {
  // Stamp Variant
  if (variant === "stamp") {
    const createSerratedPath = () => {
      const radius = 96 // Half of 192px (w-48)
      const teeth = 40
      const innerRadius = radius - 8
      const outerRadius = radius

      let path = ""
      for (let i = 0; i < teeth; i++) {
        const angle = (i / teeth) * 2 * Math.PI
        const r = i % 2 === 0 ? outerRadius : innerRadius
        const x = Math.cos(angle) * r + radius
        const y = Math.sin(angle) * r + radius

        if (i === 0) {
          path += `M ${x} ${y}`
        } else {
          path += ` L ${x} ${y}`
        }
      }
      path += " Z"
      return path
    }

    // Create curved text path
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const createTextPath = (radius: number, id: string) => {
      const centerX = 96
      const centerY = 96
      return `M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`
    }
    return (
      <div
        className={cn(
          "relative mx-auto flex h-48 w-48 items-center justify-center",
          className
        )}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 192 192"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Define paths for curved text */}
            <path
              id="top-curve"
              d={createTextPath(55, "top-curve")}
              fill="none"
            />
            <path
              id="bottom-curve"
              d={createTextPath(60, "bottom-curve")}
              fill="none"
              transform="rotate(180 96 96)"
            />
          </defs>

          {/* Serrated border */}
          <path
            d={createSerratedPath()}
            strokeWidth="0.2"
            className="fill-white stroke-black dark:fill-black dark:stroke-white"
          />

          {/* Inner circle */}
          <circle
            cx="96"
            cy="96"
            r="78"
            className="fill-white stroke-black dark:fill-black dark:stroke-white"
            strokeWidth="0.2"
          />

          {/* Curved text - top */}
          <text className="fill-white text-xl font-bold">
            <textPath
              href="#top-curve"
              startOffset="50%"
              textAnchor="middle"
              className="fill-black dark:fill-white"
            >
              {title}
            </textPath>
          </text>

          {/* Curved text - bottom */}
          <text className="text-[10px] tracking-wider">
            <textPath
              href="#bottom-curve"
              startOffset="50%"
              textAnchor="middle"
              className="fill-black dark:fill-white"
            >
              {subtitle}
            </textPath>
          </text>
        </svg>

        <div className="relative z-10 text-center">
          {showIcon && (
            <div className="mb-1 flex justify-center text-center text-2xl">
              {<Star className="text-primary fill-primary" />}
            </div>
          )}
          {recipient && (
            <div className="text-primary mt-2 text-[14px]">{recipient}</div>
          )}

          {date && <div className="text-[10px] italic">{date}</div>}
        </div>
      </div>
    )
  }

  // Award Variant
  if (variant === "award") {
    const LaurelWreath = () => (
      <svg
        className={cn(
          "fill-primary absolute top-1/2 h-full w-full -translate-y-1/2"
        )}
        width="892.77"
        height="688.08"
        viewBox="0 0 892.77 688.08"
      >
        <path d="M892.6,358.7c-2.45,21.69-26.03,75.09-50.59,78.41-2.61.35-8.8-.53-10.21.3-.39.23-4.32,6.79-4.75,7.74-6.88,15.27-11.04,42.49-17.43,60.57-2.66,7.51-9.87,21.35-11.03,27.98-.1.58-.26,1.65.51,1.5,6.6-6.88,8.6-17.3,13.33-25.67,13.94-24.66,43.3-43.5,72.17-42.32-2.33,14.6-10.5,29.43-19.18,41.31-12.47,17.06-30.45,32.62-53.23,29.6-7.56-1-6.85-5.3-14.59,1.58-6.35,5.64-9.71,15.53-14.19,22.81-9.91,16.12-20.19,32.01-32.8,46.2,4.66.89,8.76-7.66,11.97-11.03,11.14-11.72,21.81-19.57,38.02-22.98,15.67-3.3,37.45-3.14,52.02,4.03-12.24,25.25-57.46,51.32-84.7,41.67-7.61-2.7-12.94-10.13-22.06-6.43-18.34,18.87-38.7,35.14-61.25,48.75,4.97,1.57,9.28-3.53,13.32-5.68,20.73-11.01,32.74-14.63,56.5-9.15,13.85,3.19,26.55,9.91,38.17,17.82-19.09,21.89-75.53,31.43-97.49,11.5-3.79-3.44-5.4-10.28-10.95-11.04-9.07-1.24-22.07,6.8-31.04,10.07-3.69,1.34-27.01,9.51-28.52,7.99.06-2.6-.8-5.29,1.57-6.93,1.5-1.04,17.65-4.87,21.68-6.32,8.48-3.06,22.88-8.38,30.46-12.54,9.12-5.01,2.78-21.66,2.3-29.72-1.18-19.76,7.83-43.47,20.48-58.5,1.79-2.13,19.39-19.37,21.51-16.98-2.82,28.58.11,60.88-19.03,84.46-2.69,3.03-6.49,6.06-10.06,7.94-4.12,2.16-9.31.65-8.9,7.59,1.27,1.23,11.02-5.38,12.91-6.58,10.31-6.56,22.01-15.72,31.1-23.9,2.59-2.34,19.93-19.11,20.44-20.46.23-.63-.39-11.92-.68-13.33-1.18-5.83-6.95-13.96-8.5-21.5-3.96-19.28-2.28-43.2,4.96-61.49,3.45-8.71,9.01-17.74,15.27-24.73,2.9,17.5,8.39,36.08,10.37,53.62,1.87,16.52.69,35.79-10.9,48.86-4.62,5.21-9.96,5.2-7.97,14.52,13.17-15.31,24.53-32.58,34.16-50.33,1.99-3.66,9.61-17.17,9.7-20.13.33-10.18-12.65-21.57-17.05-30.87-11.72-24.78-14.73-58.69-5.28-84.63.71-1.96,1.42-5.12,3.44-6.04,12.22,32.23,38.76,63.84,24.79,100.27-2.31,6.03-7.68,8.74-4.76,15.73,1.54-.25,1.89-1.87,2.47-3.02,7.87-15.49,14.88-42.87,18.84-60.16,1.87-8.16,6.12-21.11,2.85-28.5-4.29-9.69-11.33-11.15-18.64-17.35-24.62-20.88-33.84-58.75-31.52-89.97,1.97-.51,1.93.81,2.81,1.68,20.75,20.47,53.85,55.45,49.12,86.75-.44,2.9-3.52,7.02-3.71,9.23s2.82,4.83,2.79,7.33c1.42,1.39,1.82-.07,1.99-1.48.8-6.86,1.5-14.15,1.99-21.03,1.05-14.96,1.76-33.12,1.05-48.03-.45-9.51-.5-18.45-7.5-25.5-4.23-4.26-9.74-3.95-14.91-6.09-28.89-12.01-48.06-49.12-49.88-79.13-.07-1.11-2.03-1.97.73-1.73,23.64,16.34,59.89,35.61,63.41,67.59.81,7.39-3.03,17.42,5.1,20.39-.84-15.5-4.12-31.76-7.48-47.01-1.91-8.66-8.25-37.76-12.65-43.35-6.39-8.12-14.14-3.87-22.25-4.75-21.82-2.37-43.12-23.21-53.78-41.22-3.02-5.1-7.72-13-7.34-18.66,29.71,10.05,66.39,12.92,75.07,48.93,1.39,5.76-1.51,11.75,7.44,11.05-9.45-25.34-21.53-49.48-34.15-73.34-9.49-11.1-18.29-1.46-29.31-.62-24.24,1.85-49.97-15.79-62.53-35.54,12.16-1.78,27.18-2.45,39.53-1.53,14.47,1.07,29.13,6.2,36.65,19.35,3.12,5.45,2.93,14.34,10.8,11.68-7.94-13.11-17.24-26.37-27.04-38.45-2.54-3.14-13.54-16.92-15.98-18.02-7.78-3.53-11.89,2.2-17.3,4.66-22.22,10.12-48.27,3.4-65.69-12.67-1.12-1.03-7.02-6.35-5.98-7.51,17.62-2.11,36.48-11.68,54.24-7.75,8.57,1.89,16.8,6.91,22.19,13.81,2.88,3.69.83,6.42,7.06,6.94,1.49.12,2.92.63,2.49-1.49-8.92-8.7-17.38-18.05-26.98-26.03-3.66-3.04-13.47-11.25-17.29-12.71-4.55-1.73-10.25-.33-15.11-.89-27.28-3.12-48.71-29.1-57.58-53.4,1.55-2.18,1.45-.91,2.6-.65,29.66,6.66,68.48,16.71,70.87,53.16,21.14,14.84,39.62,33.01,57,52,.62-8.81-9.38-14.38-14.48-20.52-19.56-23.59-25.5-58.58-24.02-88.47.68-.79,10.44,7.02,11.52,7.97,20.16,17.57,37.02,49.29,34.52,76.57-1,10.9-9.52,15.89-4.29,28.21,1.81,4.26,14.83,18.08,18.66,23.34,9.6,13.17,19.55,27.31,26.6,41.91,1.62.09,2.24.49,1.98-1.47-.48-3.57-9.92-18.62-12.17-23.85-11.51-26.81-14.45-60.89-2.88-88.23.37-.88.81-2.87,2.06-1.96,9.94,12.98,16.87,28.86,21.49,44.52,5.8,19.65,9.83,40.98.04,60.03-1.45,2.82-4.93,5.59-5.48,8.51-2.09,11.08,6.07,21.31,10.12,30.78,7.21,16.81,14.1,33.95,18.83,51.67,1.58-.05,1.97-4.44,1.92-5.42-.27-5.28-7.25-19.63-8.64-27.37-4.67-26.05-2.53-50.65,10.53-73.88,1.45-2.57,4.8-8.51,6.73-10.28,1.69-1.54,1.69-.41,2.66,1.23,12.28,20.79,17.41,81.23,2.78,101.21-2.35,3.21-9.25,7.51-10.45,9.55-.39.66-3.05,12.36-3.11,13.43-.35,5.98,7.73,33.4,9.25,42.34,2.02,11.93,3.48,24.11,4.32,36.18,2.19-.58,1.95-2.71,2.05-4.46.4-6.52-1.93-15.33-2.11-22-.88-33.13,13.53-64.28,38.54-85.52,1.65-.03,3.41,14.23,3.55,16.43,1.54,24.35-4.14,74.1-26.52,88.57-6.99,4.52-12.38,3.46-14.29,13.71-2.29,12.31,3.05,32.46.81,45.81l-4.03,40.46c4.58-3.93,3.21-12.03,4.24-17.25,6.58-33.49,28.21-64.47,60.75-76.75-.37,4.65.51,9.94,0,14.5Z" />
      </svg>
    )
    return (
      <div
        className={cn(
          "relative z-0",
          "flex flex-col items-center justify-center p-6",
          "overflow-hidden",
          className
        )}
      >
        <LaurelWreath />
        <div className="z-10 px-8 text-center">
          <div
            className={cn(
              "mt-6 mb-2 inline-block rounded-md px-4 py-1 tracking-wider text-white",
              `bg-gradient-to-r ${levelColors[level]}`
            )}
          >
            {level.toUpperCase()}
          </div>

          {/* Main Title */}
          <h1 className={cn("text-4xl font-black tracking-tight")}>{title}</h1>

          {/* Decorative Line */}
          <div className="bg-primary mx-auto my-3 h-[1px] w-40"></div>

          {/* Subtitle */}
          <h2 className={cn("mb-4 w-60 text-xl font-light")}>{subtitle}</h2>

          {/* Recipient */}
          {recipient && (
            <p className={cn("text-primary/60 italic")}>{recipient}</p>
          )}

          {/* Date */}
          <div className={cn("text-xl font-bold")}>{date}</div>
        </div>
      </div>
    )
  }

  if (variant === "certificate") {
    const Badge = () => (
      <svg
        className={cn("fill-primary -mt-12 h-18 w-full overflow-hidden")}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      </svg>
    )
    return (
      <div
        className={cn(
          "relative z-0",
          "flex flex-col items-center justify-center rounded-xl border-2 border-dotted p-2",
          "overflow-hidden",
          className
        )}
      >
        <div className="bg-card z-10 rounded-sm border p-6 px-8 text-center">
          <Badge />
          <h1
            className={cn(
              "mt-4 grid text-3xl leading-7 font-bold tracking-tighter uppercase"
            )}
          >
            Certificate
            <span className="text-sm font-light tracking-tight">
              {" "}
              of {title}
            </span>
          </h1>

          <p className="text-muted-foreground mt-4 mb-1 text-xs">
            This is to certify that
          </p>
          <h1
            className={cn(
              "text-primary mb-2 border-b text-xl font-semibold tracking-tight"
            )}
          >
            {recipient}
          </h1>

          <p className="text-muted-foreground mb-1 text-xs">{subtitle}</p>
          <div className="mt-6 flex justify-center">
            <Award strokeWidth={1} className="h-4 w-4" />
          </div>
          <div className={cn("mt-2 text-xs")}>Awarded on: {date}</div>
        </div>
      </div>
    )
  }

  // ... (rest of the variants: badge, sticker, id-card, default fallback)
} 