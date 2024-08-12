import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Sai Varun Reddy Gangasani",
    email: "sgangasani@ufl.edu",
    mobile: "3528706362",
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-white">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p>
              <span className="text-white">{key} : </span>
              <span className="text-white">{user[key]}</span>
            </p>
          ))}
          <p className="text-white">{"}"}</p>
        </div>
        <div className="h-[400px]">
          <dotlottie-player
            src="https://lottie.host/30f2dc13-9689-4fd9-ac9a-4bd0d3e8101e/L6oeLYesvW.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
