import { ReactNode } from "react"
import Link from "next/link"

interface CardProps {
    icon?: ReactNode
    title: string
    subtitle?: string
    date?: string
    description?: string
    className?: string
    link?: string // 🔗 new prop
}

const Card = ({
    icon,
    title,
    subtitle,
    date,
    description,
    className,
    link,
}: CardProps) => {
    const content = (
        <div
            className={`bg-gray-900 border border-gray-800 shadow-md cursor-pointer rounded-2xl p-6 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ${className || ""}`}
        >
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2 text-lg font-semibold">
                    {icon && <span className="w-[40px] h-[40px] flex items-center justify-center">{icon}</span>}
                    <span>{title}</span>
                </div>
                {date && <span className="text-gray-400 text-sm">{date}</span>}
            </div>
            {subtitle && <p className="text-gray-400 text-sm mb-2">{subtitle}</p>}
            {description && <p className="text-gray-300 text-sm leading-relaxed">{description}</p>}
        </div>
    )

    return link ? (
        <Link href={link} target="_blank" rel="noopener noreferrer">
            {content}
        </Link>
    ) : (
        content
    )
}

export default Card
