import Navbar from "../components/navbar/Navbar"

import Footer from "../components/footer/Footer"
import HeroImg2 from "../components/heroImg2/HeroImg2"
import AboutContent from "../components/aboutContent/AboutContent"

const About = () => {
  return (
    <div>
<Navbar/>
<HeroImg2 heading="ABOUT." text="Im a
friendly Front-End Developer."/>
<AboutContent/>
<Footer/>
    </div>
  )
}

export default About