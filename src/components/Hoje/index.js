//Libs
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'dayjs/locale/pt-br';
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

//Contexts
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";



//Components
import Header from "../Header";
import Footer from "../Footer";

import Habito from "../Habito";

//Media and CSS

import dayjs from "dayjs";
import { Container, NavTitle } from "./style";



export default function Hoje () {
    
    const URL_API_LISTA_HABITOS_HOJE = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
    const { percentage, setPercentage } = useContext(UserContext);
    const { token } = useContext(TokenContext);
        const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const navigate = useNavigate()
    const [meusHabitos, setMeusHabitos] = useState();

    useEffect(() => {
        const promise = axios.get(URL_API_LISTA_HABITOS_HOJE, config);
        promise.then(({data}) => {
            setMeusHabitos(data);
        });
        promise.catch((resp) => {
            navigate('/');
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    
    //Logica check
    function clica(index) {

        const atualizando = [...meusHabitos];
        const habitosAtualizados = atualizando[index];

        if (habitosAtualizados.done) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitosAtualizados.id}/uncheck`;
            axios.post(URL, {}, config)
            habitosAtualizados.currentSequence -= 1;
        } else {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitosAtualizados.id}/check`;
            axios.post(URL, {}, config)
            habitosAtualizados.currentSequence += 1;
        }

        habitosAtualizados.done = !habitosAtualizados.done;

        contaProgresso(atualizando)
        setMeusHabitos(atualizando)
        console.log(atualizando)
    }


    function contaProgresso(habitos) {
        const habitosConcluidos = habitos.filter((value) => value.done === true).length;
        const progresso = Math.ceil((habitosConcluidos / habitos.length) * 100);
        setPercentage(progresso);
    }   

    function tenhoHabitos() {
        if(meusHabitos) {
            return (
                meusHabitos.map((value, index) => <Habito 
                key={value.id}
                habito={value}
                index={index}
                clica={clica}
                />)
            )
            ;
        } else {
            return <ThreeDots color="#126BA5" height={80} width={80} />
        }
    }
    
    function porcentagem() {
        if(percentage === 0) {
            return (<p>Nenhum hábito concluído ainda</p>)
        } else {
            return (<p>{percentage}% dos hábitos concluídos</p>)
        }
    }

    let aux = dayjs().locale('pt-br').format('dddd, DD/MM');
    const day = aux.charAt(0).toUpperCase() + aux.slice(1);
    const listaHabitos = tenhoHabitos();
    const minhaPorcentagem = porcentagem();

    return (
        <>
            
            <Container>
            <Header />
                <NavTitle percentage={percentage}>
                    <h3>{day}</h3>
                    {minhaPorcentagem}
                </NavTitle>
                {listaHabitos}
                <Footer />
            </Container>
            
        </>
    );
}

