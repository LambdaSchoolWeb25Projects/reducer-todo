// styled components
import styled from 'styled-components';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const Container = styled.div `
    width: 90%;
    display: flex;
    flex-wrap: wrap:
    justify-content: space-evently
    align-itmes: center;
    margin: 0 auto;
    `

export const List = styled.div `
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 5px darkgray;
`
const Button = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});

export default function StyledComponents() {
    return <Button>Material UI</Button>;
} 