import SelectorGroup from '../../Selector/SelectorGroup'
import { FaLocationDot } from 'react-icons/fa6'
import SelectorOption from '../../Selector/SelectorOptions'

 const cidades = [
    { id: 1, nome: "São Paulo" },
    { id: 2, nome: "Rio de Janeiro" },
    { id: 3, nome: "Belo Horizonte" },
    { id: 4, nome: "Curitiba" },
    { id: 5, nome: "Porto Alegre" },
];

const HeaderFormFilter = () => {
   
  return (
    <form>
        <SelectorGroup id='cidade' icon={<FaLocationDot/>}>
            <SelectorOption value='' label='Escolha sua cidade...'></SelectorOption>
            {cidades.map((cidade) => {
                return (
                    <SelectorOption 
                        value={cidade.nome} 
                        key={cidade.id}
                        label={cidade.nome}
                    />
                )
            })}
        </SelectorGroup>
    </form>
  )
}

export default HeaderFormFilter
