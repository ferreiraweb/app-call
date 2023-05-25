import { styled } from "@/styles"

export const Container = styled('main', {
    maxWidth: 572,
    margin: '$20 auto $4',
    padding: '0 $4'
})

export const Header = styled('div', {
    padding: '0 $6',
    
    ['> h2']:{
        lineHeight: "$base"
    },

    ['> h3']: {
        color: '$gray200',
        marginBottom: '$6'
    }
})

export const Heading = styled('div', {
    fontWeight: "$medium"
})

export const Text = styled('div', {

})

export const Form = styled('form', {

    marginTop: '$6',
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',

    label: {
        display: 'flex',
        gap: '$2'
    }



})

export const MultiStep = styled('div', {
})