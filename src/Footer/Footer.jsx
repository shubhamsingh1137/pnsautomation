import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-gray-300 text-white py-10 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-sm text-gray-400">
        {/* Brand Column */}
        <div>
          <div className="text-xl font-bold flex items-center gap-2">
            <span className="text-orange-500 text-2xl -ml-6">🟧</span>
            <span className="text-blue-500">PNS AUTOMATION</span>
          </div>

          <div className="space-y-2 ">
            <p className="font-semibold mt-5 text-xl text-blue-500">Company</p>
            <ul className="space-y-1 text-gray-600 ">
              <li className="hover:text-blue-500">About</li>
              <li className="hover:text-blue-500">Careers</li>
              <li className="hover:text-blue-500">Affiliates</li>
            </ul>
          </div>
          <div className="flex gap-2    mt-4 text-blue-500">
            <IoLogoFacebook />
            <AiFillGoogleCircle />
            <AiFillTwitterCircle />
            <IoLogoYoutube />
          </div>
        </div>

        {/* Resources */}
        <div>
          <h2 className=" font-semibold text-xl mb-3 text-blue-500">
            Resources
          </h2>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-blue-500">Articles</li>
            <li className="hover:text-blue-500">Blog</li>
            <li className="hover:text-blue-500">Chart Sheet</li>
            <li className="hover:text-blue-500">Code challenges</li>
            <li className="hover:text-blue-500">Docs</li>
            <li className="hover:text-blue-500">Projects</li>
            <li className="hover:text-blue-500">Videos</li>
            <li className="hover:text-blue-500">Workspaces</li>
          </ul>
          <h2 className=" font-semibold mt-4 text-xl text-blue-500">Support</h2>
          <p className="hover:text-blue-500 text-gray-600">Help Center</p>
        </div>

        {/* Plans */}
        <div>
          <h2 className=" font-semibold mb-3 text-xl text-blue-500">Plans</h2>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-blue-500">Paid memberships</li>
            <li className="hover:text-blue-500">For students</li>
            <li className="hover:text-blue-500">Business solutions</li>
          </ul>
          <h2 className="text-blue-500 font-semibold mt-4 text-xl">
            Community
          </h2>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-blue-500">Forums</li>
            <li className="hover:text-blue-500">Chapters</li>
            <li className="hover:text-blue-500">Events</li>
          </ul>
        </div>

        {/* Subjects */}
        <div className="border-l border-gray-700 pl-3 ml-2">
          <h2 className="text-blue-500 font-semibold mb-3 text-xl">Subjects</h2>
          <div className="grid grid-cols-1 gap-3 text-gray-600 ">
            {[
              "AI",
              "Cloud Computing",
              "Code Foundations",
              "Computer Science",
              "Cybersecurity",
              "Data Analytics",
              "Data Science",
              "Data Visualization",
              "Developer Tools",
              "DevOps",
              "Game Development",
              "IT",
              "Machine Learning",
              "Math",
              "Mobile Development",
              "Web Design",
              "Web Development",
            ].map((subject, idx) => (
              <p className="hover:text-blue-500 " key={idx}>
                {subject}
              </p>
            ))}
          </div>
        </div>

        {/* Languages + Career */}
        <div>
          <h2 className="text-blue-500 font-semibold mb-3 text-xl">
            Languages
          </h2>
          <div className="grid grid-cols-1 gap-2 text-gray-600">
            {[
              "Bash",
              "C++",
              "C#",
              "Go",
              "HTML & CSS",
              "Java",
              "JavaScript",
              "Kotlin",
              "PHP",
              "Python",
              "R",
              "Ruby",
              "SQL",
              "Swift",
            ].map((lang, idx) => (
              <p className="hover:text-blue-500 " key={idx}>
                {lang}
              </p>
            ))}
          </div>
          <div className="">
            {" "}
            <h2 className="text-blue-500 font-semibold mt-4 text-xl">
              Career building
            </h2>
            <ul className="space-y-1 text-gray-600">
              <li className="hover:text-white ">Career paths</li>
              <li className="hover:text-white ">Career services</li>
              <li className="hover:text-white ">Interview prep</li>
              <li className="hover:text-white ">Professional certification</li>
              <li>-</li>
              <li className="hover:text-white ">Full Catalog</li>
              <li className="hover:text-white ">Beta Content</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex gap-6">
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Terms</p>
        </div>
        <div className="flex items-center gap-2">
          <p>Made with</p>
          <span className="text-red-500">❤</span>
          <p>shubham © 2025 pnsautomation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
