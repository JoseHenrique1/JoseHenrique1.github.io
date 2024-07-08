import { AnchorHTMLAttributes } from "react";
import { Button } from "../Button";

interface cardAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function CardAnchor({children, ...props}: cardAnchorProps) {
  return (
    <a {...props} target="_blank" download>
      <Button
        className="bg-gradient-to-r from-transparent to-transparent border border-blue-800 text-lg  transition duration-300  hover:text-blue-700 md:px-6 lg:px-12"
      >{children}</Button>
    </a>
  );
}
