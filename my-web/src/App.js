import Nav from './components/Nav/nav';
import Home from './components/Home/home';
import CustomeCursor from './components/customeCursor/customCursor';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';


function App() {
  return (
    <>
      <CustomeCursor/>
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </>
  );
}

export default App;

