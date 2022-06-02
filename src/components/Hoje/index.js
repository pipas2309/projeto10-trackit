//Libs
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

//Contexts
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";



//Components
import Header from "../Header";
import Footer from "../Footer";

//Media and CSS



export default function Hoje () {
    const { user } = useContext(UserContext);
    const { token } = useContext(TokenContext);
    const navigate = useNavigate()
    return (
        <>
            <Header />
            
            <button onClick={() => {
                localStorage.removeItem("user");
                navigate('/')
                }}> Deslogar
            </button>
            <p>Token</p>
            {token}
            
            <p><br></br>User</p>
            <p>ID: {user.id}</p>
            <img src={user.image}/>
            <p>Nome: {user.name}</p>

            <Footer />
        </>
    );
}

