import React from "react";

function Sidebar() {
  return (
    <div className="fixed left-10 bottom-0 sm:static">
      <div className="flex flex-col items-center gap-10 ">
        <div className="flex flex-col gap-10 sm:flex-row">
          <a
            href="mailto:sgangasani@ufl.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-mail-line text-gray-400 text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/saivarun013/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-box-fill text-gray-400 text-xl"></i>
          </a>
          <a
            href="https://github.com/saigangasani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-github-fill text-gray-400 text-xl"></i>
          </a>
          <a
            href="https://www.instagram.com/mylifeasvarun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-line text-gray-400 text-xl"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-tertiary sm:hidden"></div>
      </div>
    </div>
  );
}

export default Sidebar;
