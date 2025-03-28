import { useEffect, useState } from "react"
import Footer from "../../src/components/footer/Footer"
import Header from "../../src/components/header/Header"

import {Link } from "react-router-dom"

import '../home/home.css'

const Home = () => {

    const [memorias, setMemorias] = useState([]);

    useEffect(() => {
        const carregarMemorias = async () => {
            try {
                const response = await fetch("http://localhost:3000/memorias");
                const dados = await response.json();
                console.log("Memórias carregadas: ", dados);
                setMemorias(dados);
            } catch (error) {
                console.error("Erro ao carregar memórias: ", error);
            }
        }
        carregarMemorias(); 
    }, [])

    return(
        <>
    <Header />
    <main class="app-main">
        <h1>Meus momentos</h1>
        <div class="cards-container">
            {memorias.map((memoria) => (
                <Link to={`/detalhes/${memoria.id}`} key={memoria.id} className="card-link" >

                <div class="card">
                    <div class="imagem"
                        style={{
                            backgroundImage: memoria.imagens[0] ? `url(${memoria.imagens[0]})` : "none" ,
                        }}
                    ></div>
                    <h2>{memoria.titulo}</h2>
                    <p>{memoria.decricao}</p>
                </div>
                </Link>

            ))}
            <a href="#" class="card-link">
            </a>
            <div class="card">
                <Link to={`/criar`}>
                    <div class="add"></div>
                    <h2>Adicionar memória</h2>
                    <p>Clique aqui para adicionar mais memórias.</p>
                </Link>
        
            </div>
        </div>
    </main>
    <Footer />
</>

    )
}

export default Home;