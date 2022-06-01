import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";

export default function Hoje () {
    const { user } = useContext(UserContext);
    const { token } = useContext(TokenContext);

    return (
        <>
            <p>Token</p>
            {token}
            
            <p><br></br>User</p>
            <p>ID: {user.id}</p>
            <p>Nome: {user.name}</p>
            <img src={user.image}/>
            <p>email: {user.email}</p>
            <p>senha: {user.password}</p>
        </>
    );
}