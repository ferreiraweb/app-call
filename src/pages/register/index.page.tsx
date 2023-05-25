import { Button, TextInput } from "../home/components/ClaimUsernameForm/styles";
import { Header, Heading, Container, Text, MultiStep, Form } from "./sytles";

export default function Register() {
    return (
        <Container>
            <Header>
            <Heading>Bem-vindo ao Ignite Call! </Heading>
        <Text>
            Precisamos de algumas informações para criar seu perfil" Ah, você pode editar essasinformações depois
        </Text>
            
            <MultiStep />
            </Header>


<Form>
    <label>
        <Text>Nome de usuário</Text>
        <TextInput placeholder="seu usuário" />
    </label>

    <label>
        <Text>Nome completo</Text>
        <TextInput placeholder="seu nome" />
    </label>

    <Button>
        Próximo passo
    </Button>

</Form>


        </Container>
    )
}