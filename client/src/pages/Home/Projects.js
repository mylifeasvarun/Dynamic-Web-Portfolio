import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects() {
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  const [selectedindex, setselectedindex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-10 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              className="cursor-pointer"
              onClick={() => {
                setselectedindex(index);
              }}
            >
              <h1
                className={`text-xl px-5 text-center ${
                  selectedindex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>


        <div className="flex flex-col gap-5 w-3/4 sm:items-center">
          <h1 className="text-2xl font-bold text-secondary">
            {projects[selectedindex].title}
          </h1>
          <p className="text-white text-justify">
            {projects[selectedindex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
