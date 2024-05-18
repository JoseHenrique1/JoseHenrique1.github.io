import { ImgHTMLAttributes } from "react";

interface cardImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    layout: "horizontal" | "vertical"
}
export function CardImage({layout, src}: cardImageProps) {
    const divClassName = layout === "horizontal"?
    "shrink-0 relative box-border border-8 border-cyan-500 ml-6 rounded-md w-[480px] h-64"
    :
    "shrink-0 relative box-border border-8 border-cyan-500 ml-6 rounded-md w-96 h-[438px]";


    const imgClassName = layout === "horizontal"?
    "absolute -top-12 -left-8 rounded-md w-[480px] h-64"
    :
    "absolute -top-12 -left-8 rounded-md w-96 h-[438px]";

    return ( 
        <div 
            className={divClassName}
        >
            <img 
                className={imgClassName} src={src}
                alt="foto pessoal" />
        </div>
         
     );
}
