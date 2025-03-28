import { useState } from "react"
import Footer from "../../src/components/footer/Footer"
import Header from "../../src/components/header/Header"

import '../criar-memoria/criar-memoria.css'
import { createMemoria } from "../../services/services"

const CriarMemoria = () => {

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagens, setImagens] = useState([]);
    const [alertaVisivel, setAlertaVisivel] = useState(false);

    const converterParaBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const adicionarImagem = async (event) => {
        const arquivos = Array.from(event.target.files);
        if (arquivos.length > 0) {
            const novasImagens = await Promise.all(arquivos.map(converterParaBase64));
            setImagens((prevImagens) => [...prevImagens, ...novasImagens]);
        }
    };



    const Submit = async (event) => {
        event.preventDefault();

        if (imagens.length === 0) {
            setAlertaVisivel(true);

            setTimeout(() => {
                setAlertaVisivel(false);
            }, 3000);
            return;
        }

        setAlertaVisivel(false);

        const novaMemoria = {
            titulo,
            descricao,
            imagens
        }

        const memoriaCriada = await createMemoria(novaMemoria);

        if (memoriaCriada) {
            alert("Memória criada com sucesso.");
            setTitulo('');
            setDescricao('');
            setImagens([]);
        }
    }

    return (
        <>
        <Header />
        <main className="app-main">
            <h1>Crie uma memória</h1>

            <form className="formulario" onSubmit={Submit}>
                <label className="lbl-txt" htmlFor="titulo">Título</label>
                <input type="text" id="titulo" placeholder="Insira o título aqui"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                />

                <label className="lbl-txt" htmlFor="descricao">Descrição</label>
                <textarea id="descricao" placeholder="Insira a descrição aqui"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                ></textarea>

                <label className="lbl-txt" htmlFor="add-imagens">Imagens</label>
                <input type="file" id="add-imagens" multiple accept="image/*"
                onChange={adicionarImagem}
                />
                <label htmlFor="add-imagens" className="add-images">+ Adicionar imagens</label>

                {imagens.length === 0 ? (
                    <p className="nenhum">Nenhuma imagem adicionada no momento.</p>
                    
                ) : (
                    <div className="img-container">
                        {imagens.map((imagem) => (
                            <img src={imagem} />
                        ))}
                    </div>
                )
            }


                <button type="submit" className="btn-criar">Criar memória!</button>
            </form>

            {
                alertaVisivel && (

                <div className="cx-alerta visible">
                    <p><strong>Aviso!</strong></p>
                    <p>É necessário adicionar ao menos uma imagem para criar uma memória.</p>
                </div>
                )
            }
        </main>

        <Footer />
        </>
    )
}

export default CriarMemoria;