import { Link } from "../Link";

export function Header() {
    const links = [
        {children: "HOME", href: "#"},
        {children: "ABOUT ME", href: "#"},
        {children: "PROJECTS", href: "#"},
        {children: "SERVICES", href: "#"},
        {children: "EXPERIENCE", href: "#"},
        {children: "CONTACT", href: "#"},
    ]
    return ( 
        <header className="flex justify-center items-center min-h-10">
           <nav className="space-x-6">
            {
                links.map(item=> <Link href={item.href}> {item.children} </Link>)
            }
           </nav>
        </header>
     );
}
