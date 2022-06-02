import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";

export default function Hoje () {
    const { user } = useContext(UserContext);
    const { token } = useContext(TokenContext);
    const navigate = useNavigate()
    return (
        <>
            <button onClick={() => {
                localStorage.removeItem("user");
                navigate('/')
                }}> Deslogar
            </button>
            <p>Token</p>
            {token}
            
            <p><br></br>User</p>
            <p>ID: {user.id}</p>
            <p>Nome: {user.name}</p>
            <img src={user.image} alt='img' />
            <p>email: {user.email}</p>
            <p>senha: {user.password}</p>
        </>
    );
}