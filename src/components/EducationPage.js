import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./EducationPage.css";
const educationData = [
  {
    org: "Confluex Marketing Pvt. Ltd.",
    position: "Frontend Developer",
    date: "Jan 2024 - Present",
    desc: [
      "Developed and integrated a logging module, ensuring real-time monitoring and persistent log storage, enhancing operational efficiency.",
      "Implemented Jest test cases for frontend components, improving codebase quality and maintainability by achieving a 30% increase in test coverage and a 25% reduction in post-release bugs.",
      "Integrated a Rubix microservice, enabling seamless cryptocurrency transactions, resulting in a 20% improvement in transaction processing speed and user interaction efficiency.",
    ],
    location: "Bhubaneshwar, IN",
  },
  {
    org: "HappyMonk AI Labs",
    position: "Frontend Developer Intern",
    date: "Oct 2023 – Dec 2023",
    desc: [
      "Overhauled company website UI/UX, incorporating Material-UI components, boosting user engagement metrics by 50% and reducing bounce rates by 15%.",
      "Implemented URQL for GraphQL data fetching, enhancing blog section performance by reducing load times and increasing user interaction efficiency.",
      "Boosted application performance by 20% through SSR and optimized data-fetching techniques, resulting in improved page load speeds and user retention.",
    ],
    location: "Bangalore, IN",
  },
  {
    org: "Codebitel",
    position: "Freelancer",
    date: "June 2023 – Nov 2023",
    desc: [
      "Designed and developed SEO friendly responsive, user-friendly websites with interactive UI components with various UI libraries for consistent, polished designs.",
      "Enhanced website performance and speed, contributing to better SEO results. Utilized semantic HTML and structured data to improve site indexing and search visibility.",
      "Transformed client requirements into functional, visually appealing web interfaces.",
    ],
    location: "Haridwar, IN",
  },
  {
    org: "S2T - Unlocking Cyberspace",
    position: "Associate Software Engineer",
    date: "Jan 22 - Sep 22",
    desc: [
      "Conducted various types of testing, including Agile Testing, Unit Testing, Manual Testing, and User Acceptance Testing (UAT), to ensure the delivery of high-quality software products.",
      "Leveraged AI-powered tools and methodologies for WEBINT, OSINT, and FUSION investigations, contributing to the development of advanced software solutions.",
      "Integrated testing processes with software development, resulting in a 15% increase in testing efficiency and a 25% reduction in critical bugs post-release.",
    ],
    location: "Singapore",
  },
];
const EducationPage = () => {
  return (
    <div className="education-container">
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        <div className="education-header" style={{ textAlign: "center" }}>
          <p>experience</p>
          <p>
            <span>&</span>education
          </p>
        </div>
        <div className="education-list">
          <div className="education">
            {educationData.map((data) => (
              <>
                <p>{data.position}</p>
                <p className="education-org">{data.org}</p>
                <p>
                  <span>
                    {data.date}
                    <ul>
                      {data.desc.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </span>
                  <a href="/">
                    <LocationOnIcon />
                    {data.location}
                  </a>
                </p>
              </>
            ))}
          </div>

          <div className="education">
            <p>Btech , Computer Science</p>
            <p>Gandhi Institute For Technology</p>
            <p>
              <span>july 18 - june 22</span>
              <a href="/">
                <LocationOnIcon />
                Bhubaneshwar, Odisha
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
