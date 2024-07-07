import { Menu } from "lucide-react";
import { Button } from "../Button";
import { Link } from "../Link";
import { Logo } from "../Logo";
import { useRef } from "react";

export function Header() {
    const navbar = useRef<HTMLDivElement>(null)

    function handleShow() {
        if (navbar.current?.classList.contains("flex")) {
            navbar.current?.classList.remove("flex")
            navbar.current?.classList.add("hidden")
        }
        else {
            navbar.current?.classList.remove("hidden")
            navbar.current?.classList.add("flex")
        }
    }

    const links = [
        { children: "INÍCIO", href: "#home" },
        { children: "SOBRE MIM", href: "#about" },
        { children: "PROJETOS", href: "#projects" },
        { children: "SERVIÇOS", href: "#services" },
        { children: "EXPERIÊNCIA", href: "#experience" },
        { children: "CONTATO", href: "#contact" },
    ]

    return (
        <header id="home" className="flex justify-center min-h-24 p-4">
            <nav className="flex flex-col gap-4 w-full max-w-screen-xl md:flex-row md:justify-between md:items-start">
                <div className="flex w-full items-center justify-between md:w-auto">
                    <Logo />
                    <Menu size={28} color="#ffffff" className="block md:hidden" onClick={handleShow}/>
                </div>
                <div ref={navbar} className="hidden flex-col gap-4 md:flex md:flex-row md:items-center md:gap-4 lg:gap-8">
                    {links.map((item) => {
                        if (item.children == "CONTATO") {
                            return <Button key={item.children} className="inline-flex" href={item.href} target="_self" > {item.children} </Button>
                        }
                        return <Link key={item.children} href={item.href}> {item.children} </Link>
                    })}
                </div>
            </nav>
        </header>
    );
}
