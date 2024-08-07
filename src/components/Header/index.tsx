import { Menu } from "lucide-react";
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
    { children: "SOBRE MIM", href: "#about" },
    { children: "PROJETOS", href: "#projects" },
    { children: "SERVIÇOS", href: "#services" },
    { children: "CONTATO", href: "#contact" },
  ]

  return (
    <header id="home" className="flex justify-center">
      <nav className="flex flex-col gap-4 w-full max-w-screen-xl md:flex-row md:justify-between md:items-center p-4">
        <div className="flex w-full items-center justify-between md:w-auto">
          <Logo />
          <Menu size={28} color="#ffffff" className="block md:hidden" onClick={handleShow}/>
        </div>
        <div ref={navbar} className="hidden flex-col gap-4 md:flex md:flex-row md:items-center md:gap-4 lg:gap-8">
          {links.map((item) => {
            if (item.children == "CONTATO") {
              return <a
                key={item.children} 
                className=" inline-flex justify-center items-center
                            text-sm text-gray-300 
                            py-3 px-8 rounded-md   
                            bg-gradient-to-r from-cyan-500 to-blue-800
                            hover:bg-gradient-to-br" 
                href={item.href} 
                > {item.children} </a>
            }
            return <Link key={item.children} href={item.href}> {item.children} </Link>
          })}
        </div>
      </nav>
    </header>
  );
}
