import { AnchorHTMLAttributes } from "react";
import { Button } from "../Button";

interface cardAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function CardAnchor({children, ...props}: cardAnchorProps) {
  return (
    <a {...props} target="_blank" download>
      <Button
        className="bg-gradient-to-r from-transparent to-transparent border border-blue-800 text-lg px-12 transition duration-300  hover:text-blue-700"
      >{children}</Button>
    </a>
  );
}
