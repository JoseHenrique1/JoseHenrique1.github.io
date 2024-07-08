import { AnchorHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface buttonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode
}
export function Button({ children, className, ...props }: buttonProps) {
    let classNameBase = `
        flex justify-center items-center
        text-sm text-gray-300 
        py-3 px-8 rounded-md   
        bg-gradient-to-r from-cyan-500 to-blue-800
        hover:bg-gradient-to-br
    `;

    return (
        <a
            target="_blank"
            {...props}
            className={twMerge(classNameBase, className)}
        >{children}</a>
    );
}
