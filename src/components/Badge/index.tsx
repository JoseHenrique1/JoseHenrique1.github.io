import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
interface props extends ComponentProps<'div'> {}

export function Badge({children, className, title}: props) {
  return ( 
    <div 
      title={title}
      className={twMerge("text-sm font-medium text-white rounded px-1", className)}>
      {children}
    </div>
   );
}
