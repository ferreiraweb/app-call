import { ArrowArcRight, ArrowLineRight } from "phosphor-react";
import { Button, Form, TextInput } from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";


const claimUsernameFormSchema = z.object({
    username: z.string()
})

type claimUserNameFormType = z.infer<typeof claimUsernameFormSchema>




export function ClaimUsernamForm() {


    const {register, handleSubmit} = useForm<claimUserNameFormType>();

    async function handleSubmitForm(data: claimUserNameFormType) {

        console.log(data)

    }



    return (
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <TextInput  {...register("username")} />
            <Button type="submit">
                <span>Reservar</span>   
                <ArrowLineRight />
            </Button>
        </Form>
    )
}