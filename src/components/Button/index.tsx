import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}
export function Button({ children, className }: buttonProps) {
    let classNameBase = `
        flex justify-center items-center
        text-sm text-gray-300 
        py-3 px-8 rounded-md   
        bg-gradient-to-r from-cyan-500 to-blue-800
    `;

    return (
        <button
            className={twMerge(classNameBase, className)}
        >{children}</button>
    );
}
