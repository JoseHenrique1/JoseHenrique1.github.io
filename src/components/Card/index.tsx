import {CardAnchor} from "./CardAnchor";
import { CardContent } from "./CardContent";
import { CardImage } from "./CardImage";
import CardLink from "./CardLink";
import {CardRoot} from "./CardRoot";

export const Card = {
    Root: CardRoot,
    Image: CardImage,
    Content: CardContent,
    Link: CardLink,
    Anchor: CardAnchor
}

/*

 <section className="pt-10 flex gap-8 items-start bg-red-500  ">
            <ImageCustom/>
            <div className="space-y-8">
                <h1 className="text-white text-3xl">ABOUT ME</h1>
                <p className="text-gray-300 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, numquam totam incidunt debitis alias amet distinctio, voluptatem nobis hic suscipit laboriosam exercitationem et. Modi at eius sit, quasi vero sunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, esse? Saepe asperiores nisi accusamus nulla dolorum esse, amet impedit officiis quibusdam ea sint accusantium vel porro error natus. Delectus, dolorum.</p>
                <div className="flex gap-4">
                    <Button className="text-lg px-12">HIRE ME</Button>
                    <Button 
                    className="bg-gradient-to-r from-transparent to-transparent 
                               border border-blue-800 text-lg px-12"
                    >RESUME</Button>
                </div>
            </div>
        </section>

*/ 