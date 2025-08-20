import { FC } from "react";
import Link from "next/link";

interface Props {
  name?: string;
  tagline?: string;
  description?: string;
}

const AboutMeSection: FC<Props> = (props) => {
  const {
    name = "Kyzec",
    tagline = "Profesional Videographer",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  } = props;

  return (
    <>
      <section id="about-me-section">
        <div id="section-inner" className="h-[50vh] bg-stone-100 grid grid-cols-5 text-stone-900">
            <div id="about-description" className="grid place-items-center col-span-3">
            <div id="about-description-wrapper" className="pl-18  py-8 grid place-items-center w-full">
              <h1 id="about-title" className="orpheus text-3xl mb-2">{name}</h1>
              <h2 className="text-lg text-stone-600 mb-5">{tagline}</h2>
              <p className="mb-6 leading-relaxed">
                {description}
              </p>
              <Link 
                href="/about" 
                className="bg-stone-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-700 transition-colors duration-200 shadow-md"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
          <div id="profile-display" className="col-span-2 grid place-items-center">
            {/* Profile Image/Avatar */}
            <div className="w-48 h-48 bg-stone-300 rounded-full grid place-items-center border-4 border-stone-400 shadow-lg">
              <svg 
                className="w-20 h-20 text-stone-600" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
 
        </div>
      </section>
    </>
  );
};

export default AboutMeSection;