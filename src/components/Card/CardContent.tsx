import { ReactNode } from "react";

interface cardContentProps {
    children?: ReactNode,
    title: string,
    description: string
}
export function CardContent({children, title, description}: cardContentProps) {
    return ( 
        <div className="space-y-8">
            <h1 className="text-white text-3xl">{title}</h1>
            <p className="text-gray-300 text-sm">{description}</p>
            <div className="flex gap-4">
                {children}
            </div>
        </div>
     );
}
