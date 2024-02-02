import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Jogo Super mario",
        img: "portfolio-1.png",
        desc: "Venho compartilhar com vocês esse meu projetos, com base no jogo do Mario, tecnologias utilizadas, CSS, HTML5 e Javascript.",
        rep: "https://github.com/ivanizidoro/jogo-mario",
        site: "https://ivanizidoro.github.io/jogo-mario/"

    },
    {
        id: 2,
        title: "React Filmes",
        img: "portfolio-2.png",
        desc: "Nesse projeto foi criando com intuito de replicar o site de Filmes, foram utilizado REACT, e estou trabalhando no Back-end do mesmo, para ficar de forma mais dinâmica. ",
        rep: "https://github.com/ivanizidoro/movie-app",
        site: "https://filmes-ivan.netlify.app/"
    },
    {
        id: 3,
        title: "Landing Page Astronauta",
        img: "portfolio-3.png",
        desc: "",
        rep: "https://github.com/ivanizidoro/Landing-Page-Astronauta",
        site: "https://ivanizidoro.github.io/Landing-Page-Astronauta/"
    },
    {
        id: 4,
        title: "React Instagram",
        img: "portfolio-4.png",
        desc: "Nesse projeto foi criado tudo em React,CSS. Com o intuito de fortalecer minha habilidades.",
        rep: "https://github.com/ivanizidoro/Instagram-React",
        site: "https://testeinstagram.netlify.app/"
    },
    {
        id: 5,
        title: "Landing Page DevClub",
        img: "portfolio-5.png",
        desc: "",
        rep: "https://github.com/ivanizidoro/Clone-DevClub",
        site: "https://ivanizidoro.github.io/Clone-DevClub/"
    },
    {
        id: 6,
        title: "Portfólio",
        img: "portfolio-6.png",
        desc: "",
        rep: "https://github.com/ivanizidoro/PORTFOLIO-1",
        site: "https://ivanizidoro.github.io/PORTFOLIO-1/"
    },
    {
        id: 7,
        title: "Tela de Login",
        img: "portfolio-7.png",
        desc: "Nesse projeto tem o intuito dos clientes realizarem um breve cadastro, e foram utilizado #CSS3 e #HTML5",
        rep: "https://github.com/ivanizidoro/Tela-de-Login",
        site: "https://ivanizidoro.github.io/Tela-de-Login/"
    },
    {
        id: 8,
        title: "Londing Page Halloween",
        img: "portfolio-8.png",
        desc: "Nesse projetos de landing Page, foram utilizados HTML E CSS",
        rep: "https://github.com/ivanizidoro/Landing-Page-Halloween",
        site: "https://ivanizidoro.github.io/Landing-Page-Halloween/"
    },
    {
        id: 9,
        title: "Conversor de Moedas",
        img: "portfolio-9.png",
        desc: "",
        rep: "https://github.com/ivanizidoro/PROJETO-JAVASCRIPT-1",
        site: "https://ivanizidoro.github.io/PROJETO-JAVASCRIPT-1/"
    },
    {
        id: 10,
        title: "Estética Devs",
        img: "portfolio-10.png",
        desc: "O projeto envolvendo nove programadores front-end, embarcamos em uma jornada de aprendizado conjunto. Esta experiência significativa não apenas aprimorou nossas habilidades individuais, mas também fortaleceu nossa capacidade de trabalhar harmoniosamente como equipe. A colaboração intensiva de Hyago Lima Costa, Miguel Tezolin, Thiago Roberto Pires de Lima, Joelson Souza, Giurllan Pimentel",
        rep: "https://github.com/ivanizidoro/Estetica-DEV",
        site: "https://ivanizidoro.github.io/Estetica-DEV/"
    },
    {
        id: 11,
        title: "Portfolio",
        img: "portfolio-11.png",
        desc: "",
        rep: "https://github.com/ivanizidoro/Portfolio",
        site: "https://ivanizidoro.github.io/Portfolio/"
    },
    {
        id: 12,
        title: "Londing Page Super Mario",
        img: "portfolio-12.png",
        desc: "",
        rep: "https://github.com/ivanizidoro/Site-Mario/",
        site: "https://ivanizidoro.github.io/Site-Mario/"
    },
    {
        id: 13,
        title: "Dev Burguer",
        img: "portfolio-13.png",
        desc: "",
        rep: "https://ivanizidoro.github.io/Site-Mario/",
        site: "https://ivanizidoro.github.io/BURGER/"
    },
    {
        id: 14,
        title: "JokenPÔ",
        img: "portfolio-14.png",
        desc: "",
        rep: "https://github.com/ivanizidoro/PROJETO---JOKENPOW",
        site: "https://ivanizidoro.github.io/PROJETO---JOKENPOW/"
    },
    {
        id: 15,
        title: "Londing Page Wide Coverage Location",
        img: "portfolio-15.png",
        desc: "",
        rep: "https://github.com/ivanizidoro/Primeieo-projeto-html-css",
        site: "https://ivanizidoro.github.io/Primeieo-projeto-html-css/"
    },
    {
        id: 16,
        title: "DevSorteio",
        img: "portfolio-16.png",
        desc: "",
        rep: "https://github.com/ivanizidoro/PROJETO-JAVASCRIPT-2",
        site: "https://ivanizidoro.github.io/PROJETO-JAVASCRIPT-2/"
    },
    {
        id: 17,
        title: "Tela de login instagram",
        img: "portfolio-17.png",
        desc: "",
        rep: "https://github.com/ivanizidoro/Projeto-css-1-DevClub",
        site: "https://ivanizidoro.github.io/Projeto-css-1-DevClub/"
    },
];

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{ y }}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href={item.rep} target="{{_blank}}"><button>Repositório</button></a>
                    <a href={item.site}target="{{_blank}}"><button>Ver Demonstração</button></a>
                </motion.div>
            </div>
        </div>
    </section>;
};


const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Meus Projetos</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;