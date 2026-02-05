import ProjetoDripStore from '../assets/Images/drip_store.png'
import ProjetoCheckList from '../assets/Images/check_list.png'
import Vazio from '../assets/Images/vazio.png'
import { CardProjetos } from "./Cards";


const Projetos = () => {
    const arrayCards = [
        {
            image: ProjetoDripStore,
            title:"drip_store",
            text: "loja digital, aplicação de conhecimentos do curso full-stack.",
            tecnologias: ["react", "tailwind", "js", "html", "css"],
            link: "https://dripstore-lenizio.vercel.app/"
        },
        {
            image: ProjetoCheckList,
            title:"check_list",
            text: "check_list com timer e organição de tempo.",
            tecnologias: ["Html", "Css", "JavaScript"],
            link: "https://lenizio27.github.io/check_list"
        },
        {
            image: Vazio,
            title:"vazio",
            text: "Área reservada para projetos futuros",
            tecnologias: ["em breve novas tecnologias"],
            link: "/"
        },
        
    ]
    return ( 
        <>
            <section className="w-full text-w1 py-5" id='Projetos'>
                <div className="max-w-[1440px] m-auto p-3">
                    <div className="text-center">
                        <h1 className="text-[30px] font-semibold">PROJETOS</h1>
                        <p>
                            Uma seleção dos meus trabalhos mais recentes e projetos que demonstram minhas habilidades e experiência.
                        </p>
                    </div>
                    <div className='pt-3 flex flex-wrap gap-2 justify-around'>
                        {arrayCards.map(item => (
                            <CardProjetos
                                image={item.image}
                                title={item.title}
                                text={item.text}
                                tecnologias={item.tecnologias}
                                link={item.link}
                                transition={arrayCards.indexOf(item)}
                            />                        
                        ))}
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Projetos; 