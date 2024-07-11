import { Button } from "../components/Button";
import photoPersonal from "../assets/img/foto-pessoal.jpeg"

export function Home() {
  return (
    <section>
      <div className="flex flex-col gap-6  md:flex-row md:items-center">
        <div className="flex-grow md:order-2">
          <div className="w-auto max-w-max md:mx-auto lg:my-auto">
            <h1 className="text-gray-300 text-xl sm:text-3xl ">Eu me chamo</h1>
            <h1
              className="mt-1 mb-6 text-white font-semibold text-5xl sm:text-6xl  lg:text-7xl"
            >JOSÉ HENRIQUE</h1>
            <h1
              className="text-cyan-500 tracking-tight text-2xl sm:text-3xl"
            >Desenvolvedor frontend</h1>
            <Button
              className="mt-3 max-w-80 hidden md:flex bg-gradient-to-r from-transparent to-transparent border border-blue-800 text-lg  transition duration-200  hover:text-blue-700 md:px-6 lg:px-12"
              target="_blank"
              href="/Currículo.pdf">Baixar CV</Button>
          </div>
        </div>
        <img className="self-center w-full max-w-96 rounded shadow shadow-blue-800" src={photoPersonal} />
        <Button
          className="flex w-full max-w-96 mx-auto md:hidden bg-gradient-to-r from-transparent to-transparent border border-blue-800 text-lg  transition duration-200  hover:text-blue-700 md:px-6 lg:px-12"
          target="_blank"
          href="/Currículo.pdf">Baixar CV</Button>
      </div>
    </section>
  )
}