import { Button } from "../components/Button";

export function Home() {
  //<main className="flex-grow flex flex-col max-w-screen-xl mx-auto my-0 bg-red-600">
  return (
    <section className="flex flex-col justify-center items-start py-6 home sm:justify-start">
      <h1 className="text-gray-300 font-semibold text-xl sm:text-2xl md:text-3xl">Eu sou um</h1>
      <div className="space-y-4">
        <h1 className="text-white font-semibold font-serif tracking-tight text-6xl sm:text-8xl lg:text-9xl">Desenvolvedor</h1>
        <h1 className="text-white font-semibold font-serif tracking-tight leading-3 text-7xl sm:leading-6 sm:text-8xl lg:leading-10 lg:text-9xl">Software</h1>
        <h1 className="text-white font-semibold font-serif tracking-tight text-7xl sm:text-8xl lg:text-9xl">
          Full Stack
          <span className="text-cyan-500 font-serif ml-1">.</span>
        </h1>
      </div>
      <Button href="https://github.com/JoseHenrique1" className="font-semibold text-lg mt-6 px-16">Projetos Anteriores</Button>
    </section>
  )
}
