import { Button } from "../components/Button";
import { Card } from "../components/Card";

export function About() {
    const title = "ABOUT ME";
    const description = "I'm a junior developer with a passion for technology, always looking for new challenges, opportunities to learn and grow professionally. I have experience in web and mobile development (using low code tools such as Kodular and App Inventor), with a focus on Node and Next.js. I am proficient in Python, Javascript and have experience in other technologies such as HTML, CSS and SQLite.";
    
    function handleHireMe() {
        window.open("https://www.linkedin.com/in/jos%C3%A9-henrique-araujo-da-silva-43970a274/", "_blank")
    }

    return ( 
        <section id="about" className="min-h-screen flex items-center">
            <Card.Root>
                <Card.Image layout="vertical" src="img/foto-pessoal.jpeg" />
                <Card.Content title={title} description={description} >
                    <Button onClick={handleHireMe} className="text-lg px-12">HIRE ME</Button>
                    <Card.Anchor href="/Currículo.pdf">CV</Card.Anchor>
                </Card.Content>
            </Card.Root>
        </section>
       
     );
}
