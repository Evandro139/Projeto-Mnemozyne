import { useParams } from "react-router-dom";
import Footer from "../../src/components/footer/Footer";
import Header from "../../src/components/header/Header";

import'../detalhes/detalhes.css'
import { useEffect, useState } from "react";


const Detalhes = () => {

    const { id }= useParams(); // PEGA O ID da URL
    const [memoriaSelecionada, setMemoriaSelecionada] = useState(null);

    useEffect(() =>  {
        const carregarMemoria = async () => {
            const response = await fetch('http://localhost:3000/memorias');
            const dados = await response.json();
            const memoriaEncontrada = dados.find((memoria) => memoria.id.toString() === id);

            setMemoriaSelecionada(memoriaEncontrada);
        }

        carregarMemoria();
    }, [id])

return(
    <>
		<Header />
    <main className="app-main">
        {memoriaSelecionada ? (
            <>
            <h1>{memoriaSelecionada.titulo} </h1>
            <div className="memory-container">
                {memoriaSelecionada.imagens.map((imagem, imgIndex) => (
                    <div className="card-imagem"
                        key={imgIndex}
                        style={{
                            backgroundImage: `url(${imagem})`,
                        }}
                    ></div>

                ))}
            </div>
            <div className="texto">
                <p>{memoriaSelecionada.descricao} </p>
            </div>
                
            </>
        ) : (

        <p>Carregando memória...</p>
        )}
    </main>
    <Footer />
</>
)
}

export default Detalhes;
