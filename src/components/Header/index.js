//Libs
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//Contexts
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";
import { Container, Title, User } from "./style";

//Components

//Media and CSS


export default function Header () {
    const { user } = useContext(UserContext);
    const { token } = useContext(TokenContext);
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    
    return (
        <Container>
            <Title>TrackIt</Title>
            <User onClick={() => setShow(!show)} visible={show}>
                <img src={user.image} alt='Foto do Usuário' />
                <button onClick={() => {
                    localStorage.removeItem("user");
                    navigate('/');
                }}>
                    Deslogar
                </button>
            </User>
        </Container>
    );
}