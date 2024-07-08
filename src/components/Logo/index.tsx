import { AnchorHTMLAttributes } from "react";

interface logoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}
export function Logo({...props}: logoProps) {
  return ( 
    <a {...props} href="#home">
      <img src="/src/assets/img/logo.png" alt="logo" className="w-14 sm:min-w-14" />
    </a>
   );
}