import { Linkedin, Github, Instagram, Mail } from "lucide-react";
import { Icon } from "../Icon";
import { Logo } from "../Logo";
import { useRef } from "react";

export function Footer() {
    const dialog = useRef<HTMLDialogElement>(null)

    function copyEmail() {
        navigator.clipboard.writeText("josehenriquearaujodasilva2@gmail.com");
        dialog.current?.show();
        setTimeout(() => dialog.current?.close(), 1500);
    }

    return (
        <footer
            id="contact"
            className="p-6 space-y-3 rounded-t-[100px] bg-gradient-to-br from-violet-900 to-blue-600"
        >
            <h1 className="text-white text-center text-4xl">CONTACT</h1>
            <p className="text-white text-center">Deseja falar comigo? Acesse minhas redes sociais.</p>
            <div className="flex justify-between w-full max-w-screen-xl border-t pt-3">
                <Logo />
                <div className="flex justify-end gap-2">
                    <Icon icon={Mail} onClick={copyEmail} />
                    <Icon icon={Linkedin} href="https://www.linkedin.com/in/jos%C3%A9-henrique-araujo-da-silva-43970a274/" target="_blank" />
                    <Icon icon={Github} href="https://github.com/JoseHenrique1" target="_blank" />
                    <Icon icon={Instagram} href="https://www.instagram.com/josehenrii10/" target="_blank" />
                </div>
            </div>

            <dialog
                ref={dialog}
                className="fixed bottom-[90vh] ml-auto mr-10 bg-transparent focus:border-none">
                <div
                    className="w-auto p-2 font-medium text-lg text-gray-100 bg-green-400/70 rounded"
                >Copied email !</div>
            </dialog>
        </footer>
    );
}
