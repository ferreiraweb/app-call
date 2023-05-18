import { styled } from "@/styles";


export const Form = styled('form', {

    width: '100%',
    padding: '$3',
    borderRadius: '$md',
    backgroundColor: '$gray-800',
    marginTop: "$5",

    

    display: 'flex',
    flexFlow: 'row nowrap',
    gap: '$2'

});

export const TextInput = styled('input', {
    padding: '$3',
    flex: 2,
    backgroundColor: "$gray-900",
    borderRadius: "$md",
    border: 0,
    outline: "$gray-700",
    color: "$white",

   
})

export const Button = styled('button', {
    flex: 1,
    borderRadius: "$sm",
    color: 'White',
    fontWeight: "$semibold",
    backgroundColor: "$green-500",
    padding: "$3",
    border: 0,
    cursor: 'pointer',

    display: 'flex',
    justifyContent: 'center',
    gap: "$3",


    '&:hover': {
        backgroundColor: "$green-300"
    }





})