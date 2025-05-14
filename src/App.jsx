import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import FeatureCards from "./sections/featurecards"
import Experience from "./sections/Experience"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"
import Achivements from "./sections/Achivements"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Achivements />
      <Contact />
      <Footer />
    </>
  )
}

export default App