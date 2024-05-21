import { FormContact } from "../FormContact";
import { InfoContact } from "../InfoContact";
import { FooterContact } from "../FooterContact";

export function Footer() {
    return (
        <footer
            id="contact"
            className="p-6 space-y-6 rounded-t-[100px] bg-gradient-to-br from-violet-900 to-blue-600"
        >
            <h1 className="text-white text-center text-4xl">CONTACT</h1>
            <div className="grid grid-cols-2 gap-16 w-full max-w-screen-xl">
                <InfoContact/>
                <FormContact />
                <FooterContact />
            </div>
        </footer>
    );
}
