//Libs
import { Link } from "react-router-dom";
import { useContext } from "react";

//Media e CSS
import logo from '../../media/track.png'
import { Button, Container, Image, Input, Title } from "./style";

//Contexts
import UserContext from "../../contexts/UserContext";
import TokenContext from "../../contexts/TokenContext";



export default function Login() {

    const { user, setUser } = useContext(UserContext);
    const { setToken } = useContext(TokenContext);
    const userLocal = localStorage.getItem("User");
    console.log(userLocal);
    const dados = {};
    
    if(userLocal) {
        console.log('tem user logal')
    }
    
    return (
        <Container>
            <Image src={logo} />
            <Title>TrackIt</Title>
            <form onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="email"/>
                <Input placeholder="senha"/>
                <Button type="submit">Entrar</Button>
            </form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    );
}