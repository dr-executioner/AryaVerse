import React from "react";
import "./ProjectPage.css";
import { HiMiniArrowLongRight } from "react-icons/hi2";

// const ProjectData = [
//   {
//     name: "Secret Santa",
//     desc: "Developed 'Secret Santa,' a Christmas-themed event creator app using RedwoodJS for the frontend, GraphQL for the API, and Supabase with PostgreSQL for the backend. Implemented full CRUD functionality, automated event reminders, and role-based access control to facilitate secure and joyous holiday gift exchanges.",
//     liveLink: "",
//     stack: ["RedwoodJS", "GraphQL", "Supabase"],
//     github: "https://github.com/Not-yourCoder/secretSanta.git",
//   },
//   {
//     name: "All Start Stats",
//     desc: "Currently developing a comprehensive web application to provide the latest football news, live scores, and detailed team and player statistics. Integrating real-time data fetching via Rapid API and creating interactive data visualizations with Chart.js. Gradually incorporating machine learning models to predict match outcomes and player performances.",
//     liveLink: "",
//     stack: ["React", "Tailwind", "Rest Api"],
//     github: "https://github.com/Not-yourCoder/all-star-stats.git",
//   },
//   {
//     name: "News Aggregator",
//     desc: "A simple website news aggregator built using Python and HTML. The aggregator scans any given website URL and displays news articles in an HTML page. It leverages web scraping techniques to extract relevant content and present it in a user-friendly format.",
//     liveLink: "",
//     stack: ["Html", "Css", "Python"],
//     github: "https://github.com/Not-yourCoder/news-aggregator",
//   },
//   {
//     name: "Space Singer",
//     desc: "Developed a working clone of Spotify, showcasing comprehensive frontend design and functionality. Implemented features include user authentication, browsing music library, creating playlists, and playing tracks with seamless audio streaming. Built using React.js, RESTful API integration for music data, and styled with tailwind for responsive design.",
//     liveLink: "",
//     stack: ["React.js", "REST API", "Tailwind Css"],
//     github: "https://github.com/Not-yourCoder/space.singer",
//   },
// ];

const ProjectPage = () => {
  return (
    <div className="project-container">
      <div
        className="project-header"
        style={{ textAlign: "center", marginBottom: "14px" }}
      >
        <span>Pro</span>jects
      </div>
      <div className="project-list">
        <div className="project">
          <div className="project-cards grid-col-span">
            <div className="project-desc">
              <div className="project-desc-header">
                <p>Secret Santa</p>
                <a
                  href="https://github.com/Not-yourCoder/secretSanta.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-effect"
                  style={{ padding: "5px", borderRadius: "20px" }}
                >
                  <HiMiniArrowLongRight />
                </a>
              </div>

              <div className="project-desc-body">
                <p>
                  Developed ”Secret Santa,” a Christmas-themed event creator app
                  using RedwoodJS for frontend, GraphQL for API, and Supabase
                  with PostgreSQL for backend. Implemented full CRUD
                  functionality, automated event reminders, and role-based
                  access control to facilitate secure and joyous holiday gift
                  exchanges.
                </p>
              </div>
              <p>Tech Stack : RedwoodJs, GraphQl, Supabase</p>
            </div>
          </div>
          <div className="project-cards">
            <div className="project-desc">
              <div className="project-desc-header">
                <p>News Aggregator</p>
                <a
                  href="https://github.com/Not-yourCoder/news-aggregator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-effect"
                  style={{ padding: "5px", borderRadius: "20px" }}
                >
                  <HiMiniArrowLongRight />
                </a>
              </div>

              <div className="project-desc-body">
                <p>
                  A simple website news aggregator built using Python and HTML.
                  The aggregator scans any given website URL and displays news
                  ...
                </p>
              </div>
              <p>Tech Stack : Html, Css, Javascript, Python</p>
            </div>
          </div>
          <div className="project-cards">
            <div className="project-desc">
              <div className="project-desc-header">
                <p>Space Singer</p>
                <a
                  href="https://github.com/Not-yourCoder/space.singer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-effect"
                  style={{ padding: "5px", borderRadius: "20px" }}
                >
                  <HiMiniArrowLongRight />
                </a>
              </div>
              <div className="project-desc-body">
                <p>
                  Developed a working clone of Spotify, showcasing comprehensive
                  frontend design and functionality. Implemented features
                  include ...
                </p>
              </div>
              <p>Tech Stack : ReactJs, Tailwind Css, Rest Api</p>
            </div>
          </div>
          <div className="project-cards" style={{ width: "175px" }}>
            <div className="project-desc">
              <div className="project-desc-header">
                <p>coming soon..</p>
                <HiMiniArrowLongRight />
              </div>
              <div className="project-desc-body">
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="project-cards grid-col-span">
            <div className="project-desc">
              <div className="project-desc-header">
                <p>All Start Stats</p>
                <a
                  href="https://github.com/Not-yourCoder/all-star-stats.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-effect"
                  style={{ padding: "5px", borderRadius: "20px" }}
                >
                  <HiMiniArrowLongRight />
                </a>
              </div>
              <div className="project-desc-body">
                <p>
                  Currently developing a comprehensive web application to
                  provide the latest football news, live scores, and detailed
                  team and player statistics. Integrating real-time data
                  fetching via Rapid API and creating interactive data
                  visualizations with Chart.js. Gradually incorporating machine
                  learning models to predict match outcomes and player
                  performances.
                </p>
              </div>
              <p>Tech Stack : ReactJs, Tailwind Css, Rest Api</p>
            </div>
          </div>
          <div className="project-cards" style={{ width: "175px" }}>
            <div className="project-desc">
              <div className="project-desc-header">
                <p>Electronator</p>
                <a
                  href="https://github.com/Not-yourCoder/ElectroNator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-effect"
                  style={{ padding: "5px", borderRadius: "20px" }}
                >
                  <HiMiniArrowLongRight />
                </a>
              </div>
              <div className="project-desc-body">
                <p>
                  Created a straightforward calculator application using
                  Electron, combining JavaScript, HTML, and CSS to deliver a
                  responsive and intuitive user interface. The application
                  supports basic arithmetic operations and showcases the
                  versatility of Electron for building cross-platform desktop
                  applications.
                </p>
                <p>Html, Css, Jsvascript, Electron</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
