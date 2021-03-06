//Libs
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

//Media and CSS
import logo from '../../media/track.png';
import { Button, Container, Image, Input, Title } from "./style";

//Contexts
import UserContext from "../../contexts/UserContext";
import TokenContext from "../../contexts/TokenContext";

//Components and functions
import local from "../LocalStorage";


export default function Login() {
    const URL_API_LOGIN = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
    
    //VARIAVEIS DE CONTEXTO
    const { setUser } = useContext(UserContext);
    const { setToken } = useContext(TokenContext);

    //VARIAVEIS DE ESTADO
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [carregando, setCarregando] = useState(false);
    
    //FUNÇÕES
    const userLocal = local();
    const navigate = useNavigate();

    //CASO EXISTA LOCAL STORAGE ELE CARREGA DIRETO / PERSISTENCIA DO LOGIN
    if(userLocal) {
        if(!carregando) { //ICONE DE CARREGANDO
            setCarregando(true);
        }
        const promise = axios.post(URL_API_LOGIN,userLocal);
        promise.then((resp) => {
            setToken(resp.data.token);
            setUser(resp.data);
            navigate('/hoje');
        })
        //CASO O LOCAL STORAGE NÃO FUNCIONE
        promise.catch((resp) => {
            localStorage.removeItem("user");
            setCarregando(false)
        })
    };

    //FUNCÇÃO QUANDO DER 'SUBMIT' NO FORMULÁRIO
    function logar (e) {
        e.preventDefault();
        const usuario = {
            email,
            password
        };

        const promise = axios.post(URL_API_LOGIN, usuario);
        promise.then((resp) => {
            local(true,usuario);
            setToken(resp.data.token);
            setUser(resp.data);
            navigate('/hoje');
            
        })
        promise.catch((resp) => {
            alert(resp.response.data.message)
            setCarregando(false)
        })
    };
    
    //RENDER
    return (
        <Container>
            <Image src={logo} alt='logo' />
            <Title>TrackIt</Title>
            <form onSubmit={(e) => {
                logar(e);
                setCarregando(true)
                }}>

                {carregando ? //Ternário para Botão
                <>
                    <Input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email" disabled />
                    <Input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder="senha" disabled />
                    <Button disabled type="submit">
                        <ThreeDots color="#FFF" height={80} width={80} />
                    </Button>
                </>
                    
                :
                <>
                    <Input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email" required />
                    <Input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder="senha" required />
                    <Button type="submit">Entrar</Button>
                </>
                    
                }
            </form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    );
}