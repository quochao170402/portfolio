import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Project from './pages/Project';
import Skill from './pages/Skill';

function App() {
  return (
    <>
      <main className='py-5 px-20 flex flex-col items-center justify-center w-full'>
        <header className='w-full sticky top-[1.25rem]'>
          <nav className='flex w-full items-center justify-center gap-20'>
            <a href='#home'>Home</a>
            <a href='#experience'>Experience</a>
            <a href='#project'>Project</a>
            <a href='#skill'>Skill</a>
            <a href='#education'>Education</a>
            <a href='#contact'>Contact</a>
          </nav>
        </header>
        <section className='m-10 flex flex-col gap-10'>
          <div id='home' className=''>
            <Home />
          </div>
          <div id='experience'>
            <Experience />
          </div>
          <div id='project'>
            <Project />
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
        </section>
      </main>
    </>
  );
}

export default App;
