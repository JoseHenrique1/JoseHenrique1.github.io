import { AnchorHTMLAttributes } from "react";

interface logoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}
export function Logo({...props}: logoProps) {
  return ( 
    <a {...props} href="#">
      <h1 className="text-5xl font-semibold text-cyan-500">JH</h1>
    </a>
   );
}