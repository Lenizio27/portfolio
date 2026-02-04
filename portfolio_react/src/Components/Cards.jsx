import { motion } from "framer-motion";


//-------- Card Tecnologias Hero --------

export const CardHero = ({text}) => {
    return (
        <>
            <div className="border-b5 border-1 px-1 inline mx-[2px] rounded-md hover:bg-b5 transition">
                {text}
            </div>
        </>
    )
}

//-------- Card Servicos --------

export const CardService = ({icon, title, text, transition}) => {
    return ( 
        <>
            <motion.div 
                initial={{ opacity: 0, x: 15,}} // Começa invisível e 50px abaixo
                whileInView={{ opacity: 1, x: 0 }} // Quando entra na tela, fica visível e sobe
                transition={{ duration: transition/10 }} // Duração da animação
                viewport={{ once: false, amount: 0.3 }} // Anima apenas uma vez ao rolar
                className="bg-b3 h-[100px] flex flex-col items-center justify-center basis-[400px] grow-1 rounded-md border-1 hover:text-b5 hover:bg-w1 transition-[1s] text-center p-3 gap-2 "
            >
                <div className={`${icon}`}></div>
                <h2>
                    {title}
                </h2>
                <p>
                    {text}
                    {transition}
                </p>
            </motion.div>
        </>
     );
}


//-------- Card Meus Projetos --------

export const CardProjetos = ({image, title, text, link, tecnologias, transition}) => {
    return (
        <>
            <motion.div 
                initial={{ opacity: 0, x: -15,}} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: transition/5 }} 
                viewport={{ once: false, amount: 0.3 }} 
                className="flex flex-col relative rounded-[20px] border h-[350px] w-[430px] hover:-translate-y-1 transition-all max-lg:w-full" 
             >
                <div className="flex items-center justify-center flex-6  max-md:flex-6 h-[150px] ">
                    <img src={image} alt="" className=" w h-[100%] shadow-2xl w-[300px]"/>
                </div>
                <div className="p-3 text-[16px] flex-6 bg-b flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-b5">{title}</h3>
                        <p><strong>SOBRE</strong>: {text}</p>
                        
                            {tecnologias.map((item) => (
                                <CardHero text={item}></CardHero>
                            ))} 
                        {}
                    </div>
                    <div className="flex flex-col justify-center h-[100%] items-center ">
                            <a 
                            href={link}
                            target="_blank" 
                            className="w-full"
                            >
                                <button className="w-full h-10 bg-b4 rounded-md hover:bg-b2 transition active:border-1">Verificar</button>
                            </a>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

//-------- Card Contato --------

export const CardContato = ({icon, title, doc, transition}) => {
    return (
        <>
            <motion.div 
            initial={{ opacity: 0, x: 15,}} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: transition/5 }} 
            viewport={{ once: false, amount: 0.3 }} 
            className="xpBox bg-b2 BoxEx w-full p-2 rounded-md border border-b4 flex items-center flex-1">
                <h4 className={`${icon}`}></h4>
                <div className="px-3">
                    <h5 className="text-[17px]">{title}</h5>
                    <p className="text-[12px]">{doc}</p>
                </div>
            </motion.div>
        </>
    )
}

//-------- Card FaleComigo --------

export const CardFaleComigo =({open, arrayCard}) => {
    return(
        <>
            <div
                className={`
                    absolute w-[50px] px-3 py-4 max-md:hidden flex-col transition-all duration-300 origin-top top-15
                    ${open ? "scale-100 opacity-100" : "scale-95 scale-y-0 opacity-0 pointer-events-none"}
                    `}
            >
                    {arrayCard.map(item => (
                        <a href={item.link} target="_blank">
                            <div className={`${item.icon} text-w1 text-[20px] py-[15px] drop-shadow-xs drop-shadow-b1 hover:drop-shadow-b5` }></div>
                        </a>
                    ))}
                
            </div>
        </>
    )
}