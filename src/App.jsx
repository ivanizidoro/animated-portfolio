import Test from "./Test.jsx";
import "./app.scss";
import Hero from "./components/navbar/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";


const App = () => {
  return <div>
    <section id="HomePage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  {/*<Test />
  <Test />*/}
  </div>;
};

export default App;
