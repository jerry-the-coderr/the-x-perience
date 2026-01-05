import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

function App() {
  return (
    <div className="main-container">
      <h1 className="title">
        Not a <label>portfolio</label>
      </h1>
      <div className="intro">
        <h2 className="intro-heading">Some Info</h2>
        <p className="intro-text">
          Hi I am <div className="mention">Rajdeep</div> and i am a{" "}
          <div className="emphasis">programmer</div>,{" "}
          <div className="emphasis">learner</div>,{" "}
          <div className="emphasis">YouTuber </div>(well, not yet still working
          on the video...) and{" "}
          <div className="emphasis">a proud Linux User</div>(
          <i>
            i use <b>Arch</b> btw
          </i>
          ).
          <div className="separator" />
          If u are wondering what this is all about, lemme <b>enlighten</b> you.
          I am a curious person who tries a lot of different things and likes to{" "}
          <em>"make stuff"</em> and this site will serve as a blog,
          documentation, record and a showcase for all the different things that
          i would like to remember or record just to keep count of it.
        </p>
      </div>

      <div className="my-machine">
        <h2 className="my-machine-card1 my-machine-heading ">
          My Machine
        </h2>
        <div className="my-machine-card2 ">
          <div className="emphasis">
            <FontAwesomeIcon icon="fa-brands fa-linux" className="fa-lg" />
            OS: Arch Linux
          </div>
          <br />
          <div className="emphasis">
            <FontAwesomeIcon icon="fa-solid fa-tv" className="fa-lg"/>{" "}
            Display: 1366x768@6Hz
          </div>
          <div className="emphasis">

            <FontAwesomeIcon icon="fa-solid fa-terminal" className="fa-lg"/>{" "}
            Terminal: Kitty
          </div>
         <div className="emphasis">
            
            <FontAwesomeIcon icon="fa-solid fa-code" className="fa-lg"/>{" "}
            Code-editor: VS-Code
          </div>
           <div className="emphasis">
            
            <FontAwesomeIcon icon="fa-brands fa-internet-explorer" className="fa-lg"/>{" "}
            Browser : Zen-Browser
          </div>
           <div className="emphasis">
            
            <FontAwesomeIcon icon="fa-solid fa-file" className="fa-lg"/>{" "}
            Docx : Libre-Office
          </div>
        </div>
        <div className="my-machine-card3 ">CPU and GPU</div>
        <div className="my-machine-card4 ">Memory and storage Specs</div>
        <div className="my-machine-card5 ">

          <div className="archlogo"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
