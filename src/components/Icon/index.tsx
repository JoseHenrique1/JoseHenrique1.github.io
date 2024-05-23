import { AnchorHTMLAttributes, ElementType } from "react";

interface iconProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    icon : ElementType,
}

export function Icon({icon: Icon, ...props}: iconProps) {
    return ( 
        <a 
          {...props}
          className="p-4 rounded-md shadow cursor-pointer hover:bg-gradient-to-br bg-gradient-to-tl from-violet-900 to-blue-600 ">
            <Icon
            color="#ffffff"
            size={24}
          />
        </a>
     );
}
