import Footer from "../../src/components/footer/Footer";
import Header from "../../src/components/footer/Footer";

import'../detalhes/detalhes.css'


const Detalhes = () => {

return(
    <>
		<Header />
    <main className="app-main">
        <h1></h1>
        <div className="memory-container">
            <div className="card-imagem"></div>
        </div>
        <div className="texto">
            <p></p>
        </div>
        <p>Carregando memória...</p>
    </main>
    <Footer />
</>
)
}

export default Detalhes;
