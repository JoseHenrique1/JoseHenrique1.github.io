import { ElementType,} from "react";

interface cardServiceProps {
    title: string,
    description: string,
    icon: ElementType
}
function CardService({title, description, icon:Icon}: cardServiceProps) {
    return (
        <div
            className="
                    p-2 w-full h-72 rounded-md sm:w-96
                    bg-gradient-to-r from-violet-900 to-blue-600
                    shadow-lg shadow-blue-400
                ">
            <div className="p-4 bg-[#101731] size-full rounded-md space-y-4">
                <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-full">
                        <Icon color="#4c1d95"/>
                    </div>
                    <h1 className="text-white text-3xl">{title}</h1>
                </div>
                <p className="text-gray-300">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default CardService;