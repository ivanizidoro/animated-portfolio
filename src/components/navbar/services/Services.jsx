import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, { margin:"-100px" });

    return (
        <motion.div className="services"
            variants={variants}
            initial="initial"
            //animate="animate"
            //whileInView="animate"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="textContainer">
                <p>Minhas
                    <br />Habilidades
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Ideias</motion.b> Únicas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Para seu</motion.b> negócio.
                    </h1>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>HTML</h2>
                    <p>
                        HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência/apresentação (CSS) ou a funcionalidade/comportamento (JavaScript) de uma página da web.
                    </p>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>CSS</h2>
                    <p>
                        CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML). O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.
                    </p>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>JavaScript</h2>
                    <p>
                        JavaScript® (às vezes abreviado para JS) é uma linguagem leve,
                        interpretada e baseada em objetos com funções de primeira classe,
                        mais conhecida como a linguagem de script para páginas Web,
                        mas usada também em vários outros ambientes sem browser, tais como node.js,
                        Apache CouchDB e Adobe Acrobat. O JavaScript é uma linguagem baseada em protótipos,
                        multi-paradigma e dinâmica, suportando estilos de orientação a objetos,
                        imperativos e declarativos (como por exemplo a programação funcional).
                        Saiba mais sobre o
                    </p>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>React</h2>
                    <p>
                        React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface).
                        Criado em 2011 pelo time do Facebook, o React surgiu com o objetivo de otimizar a atualização
                        e a sincronização de atividades simultâneas no feed de notícias da rede social,
                        entre eles chat, status, listagem de contatos e outros.
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services;