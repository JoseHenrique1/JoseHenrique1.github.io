import { Button } from "../components/Button";

export function Home() {
  //<main className="flex-grow flex flex-col max-w-screen-xl mx-auto my-0 bg-red-600">
  return (
    <section className="flex flex-col items-start py-6 home">
      <h1 className="text-gray-300 font-semibold text-3xl">Eu sou um</h1>
      <div className="space-y-4">
        <h1 className="text-white text-9xl font-semibold font-serif tracking-tight ">Desenvolvedor</h1>
        <h1 className="text-white text-9xl font-semibold font-serif tracking-tight leading-10">Software</h1>
        <h1 className="text-white text-9xl font-semibold font-serif tracking-tight ">
          Full Stack
          <span className="text-cyan-500 font-serif ml-1">.</span>
        </h1>
      </div>
      <Button href="https://github.com/JoseHenrique1" className="font-semibold text-lg mt-6 px-16">Projetos Anteriores</Button>
    </section>
  )
}
