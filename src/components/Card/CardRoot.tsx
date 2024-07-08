import { ReactNode } from "react";

interface cardRootProps {
    children: ReactNode
}

export function CardRoot({children}: cardRootProps) {
    return ( 
        <div className="pt-10 flex flex-col gap-8 md:flex-row">
            {children}
        </div>
     );
}
