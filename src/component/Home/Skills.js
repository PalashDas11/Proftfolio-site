import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="md:pl-20 md:mt-28 ">
      <h2 className="text-2xl font-semibold py-10"> My Skills.</h2>
      
        <div>
          <div className="grid md:grid-cols-2 ">
            <div className="skill-section">
            <h1 className="font-semibold">HTML & CSS</h1>
            <progress className="progress w-96 " value="90" max="100"></progress><br />
            <h1 className="font-semibold">Photoshop</h1>
            <progress className="progress w-96" value="80" max="100"></progress><br />
            <h1 className="font-semibold">JavaScript</h1>
            <progress className="progress w-96" value="85" max="100"></progress><br />
            <h1 className="font-semibold">React Js</h1>
            <progress
              className="progress w-96"
              value="90"
              max="100"
            ></progress>
            </div>
            <div>
            <h1 className="font-semibold">Node JS</h1>
            <progress className="progress w-96" value="80" max="100"></progress><br />
            <h1 className="font-semibold">Express Js</h1>
            <progress className="progress w-96" value="85" max="100"></progress><br />
            <h1 className="font-semibold">Firebase</h1>
            <progress className="progress w-96" value="90" max="100"></progress><br />
            <h1 className="font-semibold">MongoDb</h1>
            <progress
              className="progress w-96"
              value="85"
              max="100"
            ></progress>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Skills;
