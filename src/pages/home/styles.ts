
import { styled } from "@/styles";

export const Container = styled('div', {

    width: '100%',
    maxWidth: '1120px',
    height: '100vh',
    margin: '$2 auto',
    backgroundColor: '$gray-900',
    

    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    gap: '$2'

});

export const Hero = styled('div', {
    flex: 1,
    padding: '$3',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$2xl',
    lineHeight: "$tall",


    'h1' : {
        fontSize: '$4xl',
        color: "$gray-500",

        '@media(max-width: 600px)' : {
            fontSize: '$w2xl',
            color: 'red'          
        }
    },

    'p': {
        fontSize: '$2xl'
    }
  
});

export const Preview = styled('div', {
    flex: 1,
    paddingRight: "$8",
    display: "flex",
    alignItems: "center",
    
    '@media(max-width: 600px)' : {
        display: 'none'
    }
    
})

