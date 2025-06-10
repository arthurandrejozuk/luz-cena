import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Sobre from "../../components/Sobre";

export default function Layout({children, img, alt}:{children: React.ReactNode, img?: string, alt?: string}) {
    return(
        <>
                 <Header/>
                  <Banner image={img} alt={alt}/>
                    {children}
                  <Sobre/>
                  <Footer/>
        </>
    )
}