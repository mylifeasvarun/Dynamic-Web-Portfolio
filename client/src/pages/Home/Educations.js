import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const { portfolioData } = useSelector((state) => state.root);
  const { educations } = portfolioData;

  console.log(educations);
  const [selectedindex, setselectedindex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Education" />

      <div className="flex py-10 gap-10 sm:flex-col sm:items-center">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/4 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {educations.map((education, index) => (
            <div
              className="cursor-pointer"
              onClick={() => {
                setselectedindex(index);
              }}
            >
              <h1
                className={`text-xl px-7 ${
                  selectedindex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                    : "text-white"
                }`}
              >
                {education.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 w-3/4 sm:items-center">
          <h1 className="text-2xl font-bold text-secondary">
            {educations[selectedindex].title}
          </h1>
          <h1 className="text-xl text-tertiary">
            {educations[selectedindex].institution}
          </h1>
          <p className="text-white">
            <span className="font-bold">Relavant Course Work: </span>
            {educations[selectedindex].coursework}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
