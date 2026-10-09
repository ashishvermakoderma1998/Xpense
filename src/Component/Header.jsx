import React from "react";
import { Features } from "tailwindcss";

const Header = () => {
  return (
    <>
      <div className="flex justify-between px-25 py-15 text-2xl font-sans">
        <div>
          <p>
            <span className="bg-orange-600 rounded-full mx-3 text-white">X</span>pense
          </p>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Feedback</a>
            </li>
          </ul>
        </div>
        <div>
            <p className="border-2 border-amber-500 rounded-2xl px-2 py-1">Request Demo</p>
        </div>
      </div>
    </>
  );
};

export default Header;
