import React from "react";
import "./SkillPage.css";

const SkillPage = () => {
  return (
    <div className="skill-container">
      <div className="skill-left">
        <div className="skill-header">
          <span>ski</span>lls
        </div>
        <p>
          You can't build amazing apps without code, but you definitely need
          knowledge and skill to make them soar.
        </p>
      </div>
      <div className="skill-right">
        <div id="myCanvasContainer">
          <canvas width="600" height="600" id="myCanvas"></canvas>
        </div>
        <div id="tags">
          <ul>
            <li>
              <a href="/skills">javascript</a>
            </li>
            <li>
              <a href="/skills">react</a>
            </li>
            <li>
              <a href="/skills">html</a>
            </li>
            <li>
              <a href="/skills">css</a>
            </li>
            <li>
              <a href="/skills">redux</a>
            </li>
            <li>
              <a href="/skills">git</a>
            </li>
            <li>
              <a href="/skills">Rest APi</a>
            </li>
            <li>
              <a href="/skills">typescript</a>
            </li>
            <li>
              <a href="/skills">postman</a>
            </li>
            <li>
              <a href="/skills">TailwinD</a>
            </li>
            <li>
              <a href="/skills">docker</a>
            </li>
            <li>
              <a href="/skills">next Js</a>
            </li>
            <li>
              <a href="/skills">tRPC</a>
            </li>
            <li>
              <a href="/skills">GraphQl</a>
            </li>
            <li>
              <a href="/skills">Jwt & OAuth</a>
            </li>
            <li>
              <a href="/skills">firebase</a>
            </li>
            <li>
              <a href="/skills">html</a>
            </li>
            <li>
              <a href="/skills">PostgreSQL</a>
            </li>
            <li>
              <a href="/skills">redux</a>
            </li>
            <li>
              <a href="/skills">github</a>
            </li>
            <li>
              <a href="/skills">bootstrap</a>
            </li>
            <li>
              <a href="/skills">Scss</a>
            </li>
            <li>
              <a href="/skills">Styled Components</a>
            </li>
            <li>
              <a href="/skills">Python</a>
            </li>
            <li>
              <a href="/skills">Typescript</a>
            </li>
            <li>
              <a href="/skills">Jquery</a>
            </li>
            <li>
              <a href="/skills">server side Rendering</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
