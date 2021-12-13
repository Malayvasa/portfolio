import KernelNFT from "./pages/KernelNFT";
import Modfy from "./pages/Modfy";
import TwoTired from "./pages/TwoTired";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Route, Routes, Link } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <div className="z-50 flex space-x-8 saturate-150 items-stretch justify-center px-8 flex-row fixed top-0 h-16 filter border-b-[1px] backdrop-blur-lg w-screen bg-opacity-60 bg-white">
        {" "}
        <div className="text-sm md:text-2xl my-auto font-serif text-slate-900 hover:text-cyan-400  transition-colors">
          <Link to="/">Malay Vasa </Link>
        </div>{" "}
        <div className="text-sm mdtext-2xl my-auto font-serif text-slate-900 hover:text-teal-400  transition-colors">
          <Link to="/projects">Projects </Link>
        </div>{" "}
        <div className="text-sm mdtext-2xl my-auto font-serif text-slate-900 hover:text-violet-400  transition-colors">
          <Link to="/about">About</Link>{" "}
        </div>{" "}
      </div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/kernelnft" element={<KernelNFT />} />
        <Route exact path="/modfy" element={<Modfy />} />
        <Route exact path="/twotired" element={<TwoTired />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
