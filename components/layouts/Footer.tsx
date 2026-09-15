import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { Section } from "../ui/Section";

export function Foooter() {
    return(
        <footer className="bg-primary">
            <Section>
                <Container>
                    <div>
                    <Logo />
                </div>
                </Container>
            </Section>
        </footer>
    )
}