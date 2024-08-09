import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function Experiences() {
  const [selectedindex, setselectedindex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Experiences" />

      <div className="flex py-10 gap-10 sm:flex-col sm:items-center">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/4 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
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
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 w-3/4 sm:items-center">
          <h1 className="text-xl text-secondary">
            {experiences[selectedindex].title}
          </h1>
          <h1 className="text-xl text-tertiary">
            {experiences[selectedindex].company}
          </h1>
          <p className="text-white">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Libero ultrices
            curae pulvinar mattis pulvinar mi sem. Inceptos nostra libero montes
            ultricies id euismod velit tortor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
