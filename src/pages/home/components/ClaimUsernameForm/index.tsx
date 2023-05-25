import { ArrowArcRight, ArrowLineRight } from "phosphor-react";
import { Button, Form, FormAnnotation, TextInput } from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'


// criar regras de validação para  formulário
const claimUsernameFormSchema = z.object({
    username: z.string()
                .min(3, {message: 'Usuario deve ter no mínimo 3 caracteres'})
                .regex(/^([a-z\\-]+)$/i, {message: 'usuario só pode ter letras e hifens'})
                .transform(username => username.toLowerCase())
})

type claimUserNameFormType = z.infer<typeof claimUsernameFormSchema>




export function ClaimUsernamForm() {


    const {register, handleSubmit, formState: { errors }} = useForm<claimUserNameFormType>({
        resolver: zodResolver(claimUsernameFormSchema)
    });

    async function handleSubmitForm(data: claimUserNameFormType) {

        console.log(data)

    }



    return (
        <>
            <Form onSubmit={handleSubmit(handleSubmitForm)}>
                <TextInput  {...register("username")} />
                <Button type="submit">
                    <span>Reservar</span>   
                    <ArrowLineRight />
                </Button>
            </Form>
            <FormAnnotation>
                {errors.username ? errors.username.message : 'digite o nome do usuário'}
            </FormAnnotation>
        </>
    )
}