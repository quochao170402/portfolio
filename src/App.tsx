import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Home from './pages/Home';
import ProjectPage from './pages/Project/ProjectPage';
import Skill from './pages/Skill';

function App() {
  return (
    <>
      <div
        className='py-5 px-20 flex flex-col items-center justify-center w-full 
        [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'
      >
        <header className='w-full sticky top-[1.25rem]'>
          <NavBar />
        </header>
        <main className='mt-40 flex flex-col gap-10 m-auto w-[60%]'>
          <div id='home' className=''>
            <Home />
          </div>
          <div id='experience'>
            <Experience />
          </div>
          <div id='project'>
            <ProjectPage />
          </div>
          <div id='skill'>
            <Skill />
          </div>
          <div id='education'>
            <Education />
          </div>
          <div id='contact'>
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
