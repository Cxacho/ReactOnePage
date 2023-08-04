import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import Services from "./components/Services.tsx";
// import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";


function App() {
/*  const [count, setCount] = useState(0)*/

  return (
<>
    <Navbar />
    <Home />
    <Services />
    {/*<About />*/}
    <Contact />
</>
  )
}

export default App
