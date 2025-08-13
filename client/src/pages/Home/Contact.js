import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  const playerRef = React.useRef(null);
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-white">{"{"}</p>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <p key={key}>
                  <span className="text-white">{key} : </span>
                  <span className="text-white">{contact[key]}</span>
                </p>
              )
          )}
          <p className="text-white">{"}"}</p>
        </div>
        <div className="h-[400px]">
          <lottie-player
            ref={playerRef}
            src="https://lottie.host/30f2dc13-9689-4fd9-ac9a-4bd0d3e8101e/L6oeLYesvW.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
