import { AnchorHTMLAttributes } from "react";
import logo from "../../assets/img/logo.png"
interface logoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}
export function Logo({...props}: logoProps) {
  return ( 
    <a {...props} href="#home">
      <img src={logo} alt="logo" className="w-14 sm:min-w-14" />
    </a>
   );
}