import { Button } from "../components/Button";

export function Home() {
  //<main className="flex-grow flex flex-col max-w-screen-xl mx-auto my-0 bg-red-600">
  return (
    <section className="flex flex-col items-start py-6 home">
      <h1 className="text-gray-300 font-semibold text-3xl">I'm a</h1>
      <div className="space-y-4">
        <h1 className="text-white text-9xl font-semibold font-serif tracking-tight ">Full Stack</h1>
        <h1 className="text-white text-9xl font-semibold font-serif tracking-tight leading-10">Web Site</h1>
        <h1 className="text-white text-9xl font-semibold font-serif tracking-tight ">
          Developer
          <span className="text-cyan-500 font-serif">.</span>
        </h1>
      </div>
      <Button className="font-semibold text-lg mt-6 px-16">Previous Projects</Button>
    </section>
  )
}
