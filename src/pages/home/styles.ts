
import { styled } from "@/styles";

export const Container = styled('div', {

    width: '100%',
    maxWidth: '1120px',
    height: '100vh',
    margin: '10px auto',
    backgroundColor: '$gray-800',

    display: 'flex',
    justifyContent: 'space-between'

});

export const Hero = styled('div', {
    flex: 1,
    padding: '10px',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',


    'h1' : {
        fontSize: '2.5rem',
        color: "$gray-500"
    },

    'p': {
        fontSize: '1.5rem'
    }
  
});

export const Preview = styled('div', {
    flex: 1,
    
})

