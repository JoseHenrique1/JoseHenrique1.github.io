import { Button } from "../components/Button";
import { Card } from "../components/Card";

export function About() {
    const title = "ABOUT ME";
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus laborum odio atque minus. Libero, aliquid veritatis quasi cumque illum atque! Delectus recusandae quia architecto, eius sint neque ad. Laboriosam.";
    
    return ( 
        <section id="about" className="min-h-screen flex items-center">
            <Card.Root>
                <Card.Image layout="vertical" src="/foto-pessoal.jpeg" />
                <Card.Content title={title} description={description} >
                    <Button className="text-lg px-12">HIRE ME</Button>
                    <Button 
                    className="bg-gradient-to-r from-transparent to-transparent 
                               border border-blue-800 text-lg px-12"
                    >RESUME</Button>
                </Card.Content>
            </Card.Root>
        </section>
       
     );
}
