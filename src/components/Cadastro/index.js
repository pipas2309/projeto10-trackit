//Libs
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

//Media e CSS
import { Button, Container, Image, Input, Title } from "./style";
import logo from '../../media/track.png';
import { useState } from "react";

export default function Cadastro() {
    

    const URL_CADASTRO_API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    const navigate = useNavigate();
    const [carregando, setCarregando] = useState(false);

    function cadastrar(e) {
        const email = e.target[0].value;
        const password = e.target[1].value;
        const name = e.target[2].value;
        const image = e.target[3].value;

        const usuario = {
            email,
            name,
            image,
            password
        };

        const promise = axios.post(URL_CADASTRO_API, usuario);

        promise.then((e) => {
            navigate('/');
        })
        promise.catch((e) => {
            alert(`${e.response.data.message}\n${e.response.data.details}`);
            setCarregando(false)
        })
        

    }

    return (
        <Container>
            <Image src={logo} />
            <Title>TrackIt</Title>
            <form onSubmit={(e) => {
                e.preventDefault(cadastrar(e));
                setCarregando(true)
                }}>
                <Input type='email' placeholder="email" required/>
                <Input type='password' placeholder="senha" required/>
                <Input type='name' placeholder="nome" required/>
                <Input type='url' placeholder="foto" required/>
                {carregando ?
                    <Button disabled type="submit">
                        <ThreeDots color="#FFF" height={80} width={80} />
                    </Button>
                :
                    <Button type="submit">Cadastrar</Button>
                }
                
            </form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
            
        </Container>
    );
}