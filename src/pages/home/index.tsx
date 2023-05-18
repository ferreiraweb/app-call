import { Hero, Preview, Container } from "./styles";

import  appPreview  from '../../assets/app-preview.png'
import Image from "next/image";
import { ClaimUsernamForm } from "./components/ClaimUsernameForm";


export default function Home() {
  return (
    <Container>
      <Hero>
        <h1>Agendamento descomplicado</h1>
        <p>Conect seu caledário e permita que as pessoas marquem agendamentos no seu tempo livre</p>
        <ClaimUsernamForm />
      </Hero>

      <Preview>
        <Image 
          src={appPreview} 
          height={300} 
          quality={100}
          priority
          alt="Calendário simbolizando aplicação em funcionamento" />
      </Preview>
    </Container>
  )
}
