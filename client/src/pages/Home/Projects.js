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
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/4 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              className="cursor-pointer"
              onClick={() => {
                setselectedindex(index);
              }}
            >
              <h1
                className={`text-xl px-5 ${
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

        <div className="flex gap-10 items-center w-3/4 sm:flex-col sm:w-full">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="h-60 w-72 rounded"
          />
          <div className="flex flex-col gap-5 w-3/4">
            <h1 className="text-xl text-secondary sm:text-center">
              {projects[selectedindex].title}
            </h1>
            <p className="text-white sm:text-center">
              {projects[selectedindex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
