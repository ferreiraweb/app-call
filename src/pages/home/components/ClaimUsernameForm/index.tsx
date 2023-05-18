import { ArrowArcRight, ArrowLineRight } from "phosphor-react";
import { Button, Form, TextInput } from "./styles";


export function ClaimUsernamForm() {
    return (
        <Form>
            <TextInput />
            <Button>
                <span>Reservar</span>   
                <ArrowLineRight />
            </Button>
        </Form>
    )
}