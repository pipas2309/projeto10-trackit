//Libs
import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Contexts
import TokenContext from './contexts/TokenContext';
import UserContext from './contexts/UserContext';
import HabitsContext from './contexts/HabitsContext';

//Components
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Hoje from './components/Hoje';
import Habitos from './components/Habitos';
import Historico from './components/Historico';

function App() {

    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const [habits, setHabits] = useState([]);

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <UserContext.Provider value={{ user, setUser }}>
                <HabitsContext.Provider value={{ habits, setHabits }}>
                    <GlobalStyle />
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Login />}/>
                            <Route path='/cadastro' element={<Cadastro />}/>
                            <Route path='/hoje' element={<Hoje />}/>
                            <Route path='/habitos' element={<Habitos />}/>
                            <Route path='/historico' element={<Historico />}/>
                        </Routes>
                    </BrowserRouter>
                </HabitsContext.Provider>
            </UserContext.Provider>
        </TokenContext.Provider>
    );
}

export default App;