import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = ["React", "Angular", "JavaScript", "REST API"];
  return (
    <div className="bg-primary py-10">
      <SectionTitle title="About" />

      <div className="flex items-center sm:flex-col">
        <div className="h-[50vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/1d47d974-55af-4cc3-9b18-72578ac1f71c/LiLo9riBba.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Libero ultrices
            curae pulvinar mattis pulvinar mi sem. Inceptos nostra libero montes
            ultricies id euismod velit tortor. Tempus dictumst nibh dui id sed
            lectus interdum tempor. Et placerat ipsum consectetur scelerisque
            egestas. Elementum nulla per quis nullam dui cubilia. Finibus vitae
            vulputate mollis nam, mollis natoque sagittis. Dignissim scelerisque
            consequat; dignissim dolor ex tristique. Felis maecenas mattis non
            hendrerit ipsum etiam et nulla.
          </p>
          <p className="text-white">
            Et placerat ipsum consectetur scelerisque egestas. Elementum nulla
            per quis nullam dui cubilia. Dignissim scelerisque consequat;
            dignissim dolor ex tristique. Felis maecenas mattis non hendrerit
            ipsum etiam et nulla.
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
