import { Button } from "../Button";
import { Link } from "../Link";
import { Logo } from "../Logo";

export function Header() {
    const links = [
        { children: "INÍCIO", href: "#home" },
        { children: "SOBRE MIM", href: "#about" },
        { children: "PROJETOS", href: "#projects" },
        { children: "SERVIÇOS", href: "#services" },
        { children: "EXPERIÊNCIA", href: "#experience" },
        { children: "CONTATO", href: "#contact" },
    ]

    return (
        <header id="home"  className="flex justify-center items-center h-24">
            <div className="flex justify-between w-full max-w-screen-xl px-2">
                <Logo />
                <nav className="space-x-8">
                {links.map((item) => {
                    if (item.children == "CONTACT") {
                        return <Button key={item.children} className="inline-flex" href={item.href} > {item.children} </Button>
                    }
                    return <Link key={item.children} href={item.href}> {item.children} </Link>
                })}
                </nav>
            </div>
        </header>
    );
}
