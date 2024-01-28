import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Jogo Super mario",
        img: "portfolio-1.png",
        desc: ""
    },
    {
        id: 2,
        title: "React Filmes",
        img: "portfolio-2.png",
        desc: ""
    },
    {
        id: 3,
        title: "Landing Page Astronauta",
        img: "portfolio-3.png",
        desc: ""
    },
    {
        id: 4,
        title: "React Instagram",
        img: "portfolio-4.png",
        desc: ""
    },
    {
        id: 5,
        title: "Landing Page DevClub",
        img: "portfolio-5.png",
        desc: ""
    },
    {
        id: 6,
        title: "Portfolio",
        img: "portfolio-16.png",
        desc: ""
    },
    {
        id: 7,
        title: "Tela de Login",
        img: "portfolio-7.png",
        desc: ""
    },
    {
        id: 8,
        title: "Londing Page Halloween",
        img: "portfolio-8.png",
        desc: ""
    },
    {
        id: 9,
        title: "Conversor de Moedas",
        img: "portfolio-9.png",
        desc: ""
    },
    {
        id: 10,
        title: "Estética Devs",
        img: "portfolio-10.png",
        desc: ""
    },
    {
        id: 11,
        title: "Portfolio",
        img: "portfolio-11.png",
        desc: ""
    },
    {
        id: 12,
        title: "Londing Page Super Mario",
        img: "portfolio-12.png",
        desc: ""
    },
    {
        id: 13,
        title: "Dev Burguer",
        img: "portfolio-13.png",
        desc: ""
    },
    {
        id: 14,
        title: "JokenPÔ",
        img: "portfolio-14.png",
        desc: ""
    },
    {
        id: 15,
        title: "Londing Page Wide Coverage Location",
        img: "portfolio-15.png",
        desc: ""
    },
    {
        id: 16,
        title: "DevSorteio",
        img: "portfolio-16.png",
        desc: ""
    },
    {
        id: 17,
        title: "Tela de login instagram",
        img: "portfolio-17.png",
        desc: ""
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
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>Repositório</button>
                    <button>Ver Demonstração</button>
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