import Layout from "./Layout";
import Banner from "../assets/banners/Banner_filme.png"
import DetalhesFilme from "../components/DetalhesFilme";
import Salas from "../components/Salas";


export default function Filme(){
    return(
        <Layout img={Banner} alt="">
            <DetalhesFilme/>
            <Salas/>
        </Layout>
    )
}