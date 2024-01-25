import React from "react";
import "./Project.scss";

const projectArray = [
  {
    id: "1",
    name: "Celo Africa DAO landing page",
    details:
      "Connect with a dynamic community that includes developers, designers, founders, and avid Web3 users pioneering blockchain technology advancements in Africa.",
    image:
      "https://miro.medium.com/v2/resize:fit:1326/1*pSoODqg9-PXWnnEXm--FyA.gif",
    liveLink: "https://celoafricadao.xyz/",
  },
  {
    id: "2",
    name: "Celo Africa DAO landing page",
    details:
      "Connect with a dynamic community that includes developers, designers, founders, and avid Web3 users pioneering blockchain technology advancements in Africa.",
    image:
      "https://miro.medium.com/v2/resize:fit:1326/1*pSoODqg9-PXWnnEXm--FyA.gif",
    liveLink: "https://celoafricadao.xyz/",
  },
  {
    id: "3",
    name: "Celo Africa DAO landing page",
    details:
      "Connect with a dynamic community that includes developers, designers, founders, and avid Web3 users pioneering blockchain technology advancements in Africa.",
    image:
      "https://miro.medium.com/v2/resize:fit:1326/1*pSoODqg9-PXWnnEXm--FyA.gif",
    liveLink: "https://celoafricadao.xyz/",
  },
  {
    id: "4",
    name: "Celo Africa DAO landing page",
    details:
      "Connect with a dynamic community that includes developers, designers, founders, and avid Web3 users pioneering blockchain technology advancements in Africa.",
    image:
      "https://miro.medium.com/v2/resize:fit:1326/1*pSoODqg9-PXWnnEXm--FyA.gif",
    liveLink: "https://celoafricadao.xyz/",
  },
  {
    id: "4",
    name: "Celo Africa DAO landing page",
    details:
      "Connect with a dynamic community that includes developers, designers, founders, and avid Web3 users pioneering blockchain technology advancements in Africa.",
    image:
      "https://miro.medium.com/v2/resize:fit:1326/1*pSoODqg9-PXWnnEXm--FyA.gif",
    liveLink: "https://celoafricadao.xyz/",
  },
  {
    id: "4",
    name: "Celo Africa DAO landing page",
    details:
      "Connect with a dynamic community that includes developers, designers, founders, and avid Web3 users pioneering blockchain technology advancements in Africa.",
    image:
      "https://miro.medium.com/v2/resize:fit:1326/1*pSoODqg9-PXWnnEXm--FyA.gif",
    liveLink: "https://celoafricadao.xyz/",
  },
];

const Project = () => {
  return (
    <section className="project" id="projects">
      <header>
        <h1>Project</h1>
        <p>This section contains the projects i've worked on.</p>
      </header>

      <div>
        <p>Recent Projects</p>

        <p>
          <a href="https://github.com/Mentor-Ntech" target="_blank">
            View Archive &rarr;
          </a>
        </p>
      </div>

      <main>
        {projectArray &&
          projectArray.map(({ id, name, details, image, liveLink }) => (
            <div key={id} className="mapping">
              <img src={image} alt="project hd" /> <br />
              <h1>{name}</h1>
              <a href={liveLink} target="_blank" title="link embedded">
                {details}
              </a>
            </div>
          ))}
      </main>
    </section>
  );
};

export default Project;
