import { ElementType } from "react";

interface iconProps {
    icon : ElementType,
}

export function Icon({icon: Icon}: iconProps) {
    return ( 
        <div 
          className="p-4 rounded-md shadow hover:bg-gradient-to-br bg-gradient-to-tl from-violet-900 to-blue-600 ">
            <Icon
            color="#ffffff"
            size={24}
          />
        </div>
     );
}
