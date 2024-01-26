import Test from "./Test.jsx";
import "./app.scss";
import Hero from "./components/navbar/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Parallax from "./components/navbar/parallax/Parallax.jsx";
import Services from "./components/navbar/services/Services.jsx";


const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  {/*<Test />
  <Test />*/}
  </div>;
};

export default App;
