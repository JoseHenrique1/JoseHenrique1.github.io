import { Linkedin, Github, Instagram } from "lucide-react";
import { Icon } from "../Icon";
import { Logo } from "../Logo";

export function FooterContact() {
    return (
        <div className="border-t-2 pt-8  col-span-2 flex ">
            {/* <h1 className=" basis-1/4 text-5xl font-semibold text-cyan-500">JH</h1> */}
            <Logo className="basis-1/4" />
            <p className="flex-grow text-center text-gray-300">2024 - José Henrique, All rights reserved</p>
            <div className="basis-1/4    flex justify-end gap-2">
                <a href="https://www.linkedin.com/in/jos%C3%A9-henrique-araujo-da-silva-43970a274/" target="_blank">
                    <Icon icon={Linkedin} />
                </a>
                <a href="https://github.com/JoseHenrique1" target="_blank">
                    <Icon icon={Github} />
                </a>
                <a href="https://www.instagram.com/josehenrii10/" target="_blank">
                    <Icon icon={Instagram} />
                </a>
            </div>
        </div>
    );
}
