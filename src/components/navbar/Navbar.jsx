import Sidebar from "./sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Portfólio</motion.span>
                <div className="social">
                    <a href="https://api.whatsapp.com/send/?phone=5581982883978&text&type=phone_number&app_absent=0" target="blank"><img src="/whatsapp.png" alt="" /></a>
                    <a href="https://www.instagram.com/ivann_izidoro/" target="blank"><img src="/instagram.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/ivan-izidoro/" target="blank"><img src="/linkedin.png" alt="" /></a>
                    <a href="https://github.com/ivanizidoro" target="blank"><img src="/github.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar