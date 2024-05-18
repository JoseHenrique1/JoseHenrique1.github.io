import { ReactNode } from "react";

interface cardRootProps {
    children: ReactNode
}

export function CardRoot({children}: cardRootProps) {
    return ( 
        <div className="pt-10 flex gap-8 items-start">
            {children}
        </div>
     );
}
