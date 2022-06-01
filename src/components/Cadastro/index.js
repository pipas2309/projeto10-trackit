import { Link } from "react-router-dom";
import { Button, Container, Image, Input, Title } from "./style";
import logo from '../../media/track.png'

export default function Cadastro() {


    return (
        <Container>
            <Image src={logo} />
            <Title>TrackIt</Title>
            <form onSubmit={(e) => e.preventDefault(console.log('oi'))}>
                <Input placeholder="email"/>
                <Input placeholder="senha"/>
                <Input placeholder="nome"/>
                <Input placeholder="foto"/>
                <Button type="submit">Cadastrar</Button>
            </form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Container>
    );
}