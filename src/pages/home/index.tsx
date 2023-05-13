import { Hero, Preview, Container } from "./styles";

import  appPreview  from '../../assets/app-preview.png'
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Hero>
        <h1>Agendamento descomplicado</h1>
        <p>Conect seu caledário e permita que as pessoas marquem agendamentos no seu tempo livre</p>
      </Hero>

      <Preview>
        <Image 
          src={appPreview} 
          height={400} 
          quality={100}
          priority
          alt="Calendário simbolizando aplicação em funcionamento" />
      </Preview>
    </Container>
  )
}
