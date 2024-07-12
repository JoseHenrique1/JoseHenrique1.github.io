import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface props extends ComponentProps<'button'> {}

export function Button({ children, className, ...props }: props) {
    return (
        <button
            {...props}
            className={twMerge("flex justify-center items-center px-2 py-1 rounded border enabled:text-white enabled:border-blue-800 enabled:hover:text-blue-500 enabled:hover:border-blue-600  disabled:text-gray-400 disabled:border-blue-900 ", className)}
        >{children}</button>
    );
}
