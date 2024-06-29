import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        ab<span>out</span>
      </div>
      <div className="about-info">
        <div className="about-left">
          Hi there! I'm an enthusiastic developer on a mission to conquer the
          world of code, one awesome project at a time. When I'm not busy
          crafting sleek frontends or diving into the depths of backend logic,
          you'll find me eagerly learning the latest and greatest in tech.
        </div>
        <div className="about-right">
          <p>
            Currently, I'm mastering tRPC, typesafety, server actions,
            server-side rendering (SSR), and client-side rendering (CSR). I'm
            passionate about creating seamless user experiences and optimizing
            performance to make every interaction delightful.
          </p>
          <p>
            I specialize in crafting efficient <span>React</span> and{" "}
            <span>Next.js</span> applications with seamless{" "}
            <span>REST and GraphQL</span> and <span>REST API</span>{" "}
            integrations. My expertise extends to using <span>TypeScript</span>{" "}
            for type-safe code, <span>Tailwind CSS</span> and{" "}
            <span>Material-UI</span> for responsive and visually appealing
            designs, and <span>Supabase</span> for powerful backend solutions.
          </p>
          <p>
            I thrive on challenges and love turning complex problems into
            elegant solutions. My journey started in QA, where I honed my
            attention to detail and bug-squashing skills. Since then, I've
            transitioned into frontend development, gaining expertise in
            frameworks like <span>React</span> and <span>Next.js.</span> In my
            spare time, I enjoy exploring new libraries and tools playing{" "}
            <span>Games</span>, always aiming to stay ahead of the curve. I
            believe in continuous learning and am constantly on the lookout for
            ways to improve my craft. Let's build something amazing together and
            make the web a better place, one line of code at a time!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
