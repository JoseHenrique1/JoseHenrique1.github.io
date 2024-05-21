import { Link } from "../Link";
import { Logo } from "../Logo";

export function Header() {
    const links = [
        { children: "HOME", href: "#home" },
        { children: "ABOUT ME", href: "#about" },
        { children: "PROJECTS", href: "#projects" },
        { children: "SERVICES", href: "#services" },
        { children: "EXPERIENCE", href: "#experience" },
        { children: "CONTACT", href: "#contact" },
    ]

    const styleContact = `
        inline-flex py-3 px-8 
        text-sm text-gray-300 
        rounded-md   
        bg-gradient-to-r from-cyan-500 to-blue-800
    `;

    return (
        <header id="home"  className="flex justify-center items-center h-24">
            <div className="flex justify-between w-full max-w-screen-xl px-2">
                <Logo />
                <nav className="space-x-8">
                {links.map((item) => {
                    if (item.children == "CONTACT") {
                        return <Link className={styleContact} href={item.href} > {item.children} </Link>
                    }
                    return <Link href={item.href}> {item.children} </Link>
                })}
                </nav>
            </div>
        </header>
    );
}
