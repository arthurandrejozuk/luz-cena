import Inscrever from "../components/Inscrever";
import SectionMain from "../section/SectionMain";
import Layout from "./Layout";
import BannerMain from "../assets/banners/Banner.png"

export default function Main() {
    return(
        <Layout img={BannerMain} alt="Imagem do Banner com descrição 'Onde a realidade encontra a fantasia!'">
            <SectionMain/>
            <Inscrever/>
        </Layout>
    )
}