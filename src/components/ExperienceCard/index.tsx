import { ImgHTMLAttributes } from "react";

interface experienceCardProps extends ImgHTMLAttributes<HTMLImageElement> {
    name: string
}
export function ExperienceCard({name, src}: experienceCardProps) {
    return ( 
        <div className="max-w-48 space-y-4">
            <div className="h-24 flex">
                <img src={src} className="w-24 mx-0 my-auto" alt="" />
            </div>
            <p className="text-gray-300 text-center">{name}</p>
        </div>
     );
}
