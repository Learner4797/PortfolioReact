import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="back">
      <div className="hero flex items-center justify-between" id="home">
                    <div className="left flex-1 flex justify-center">
                        <img src="./images/man.png" alt="man"/>
                    </div>
                    <div className="right flex-1">
                        <h6>Ashish Singh</h6>
                        <h1>I'm an Engineering <span>Student</span></h1>
                        <p>My three major interests and passions are web development , programming and Music, and I
                            believe
                            that there is a creative fusion between all these disciplines. I engage wholeheartedly in
                            these
                            areas both in my school courses and out of school, and hope that I will be able to continue
                            doing so on my chosen course and in the extra-curricular opportunities at university..</p>
                        <div>
                            <a href="./images/Resume/AshishSingh_192023_CSE.docx" download><button
                                    className="btn btn-secondary">
                                    RESUME</button></a>
                        </div>
                    </div>
                </div>
    </div>
  );
}

export default Hero;
