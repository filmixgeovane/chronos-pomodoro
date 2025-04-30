import { Container } from "./components/Container";
import { Logo } from "./components/Logo";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>MENU</Container>
      <Container>FORM</Container>
      <Container>FOOTER</Container>
    </>
  );
}
