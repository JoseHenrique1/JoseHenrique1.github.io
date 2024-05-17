import { Button } from "../Button";
import { Link } from "../Link";

export function Header() {
    const links = [
        { children: "HOME", href: "#" },
        { children: "ABOUT ME", href: "#" },
        { children: "PROJECTS", href: "#" },
        { children: "SERVICES", href: "#" },
        { children: "EXPERIENCE", href: "#" },
    ]
    return (
        <header className="flex justify-center items-center h-24">
            <div className="flex justify-between w-full max-w-screen-xl px-2">
                <h1 className="text-5xl font-semibold text-cyan-500">JH</h1>
                <nav className="space-x-8">
                    {
                        links.map(item => <Link href={item.href}> {item.children} </Link>)
                    }
                    <Button className="inline-flex font-normal">CONTACT</Button>
                </nav>
            </div>
        </header>
    );
}
