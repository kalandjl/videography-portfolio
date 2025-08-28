import Nav from "@/components/Nav";
import { libertinus } from "../fonts";
import Image from "next/image";
import ActionArrow from "@/components/ActionArrow";
import BarrierImageSection from "@/components/BarrierImageSection";
import BarrierImage from "@/public/layout/barrier_image.jpg";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* Nav on top */}
      <div id="nav-wrap" className="absolute top-0 left-0 right-0 z-50">
        <Nav theme="light" text="dark" />
      </div>

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        {/* Image canvas */}
        <div id="image-canvas" className="absolute inset-0 -z-10">
          {/* First image */}
          <div className="absolute top-24 left-20 w-72 h-72 shadow-lg overflow-hidden">
            <Image
                src="https://instagram.fyvr3-1.fna.fbcdn.net/v/t51.29350-15/454263865_1739424403533610_6933904512544243168_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTQ0MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fyvr3-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QGLs9RriXQCl2dBajOd3k1mrjZvYMBP75keXobPg6WyGBdAy7oSdmURw4AOMB4aH4p74JQMuV5siBJ-64xm28CD&_nc_ohc=zlQA9-MgqXwQ7kNvwEaYFMb&_nc_gid=8l5g_O6WimUA4WzHBDP1qg&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQyODkzNjIyMDg0MjUzODg2NQ%3D%3D.3-ccb7-5&oh=00_AfU8GIJtK7PHbRqVb3Lv4yVDrOC1LwNQEGDbZo9_UAsMkA&oe=68A82587&_nc_sid=22de04"
              alt="decorative image 1"
              fill
              className="object-cover"
            />
          </div>
          {/* Second image */}
          <div className="absolute bottom-20 right-28 w-80 h-80 shadow-lg overflow-hidden">
            <Image
              src="/layout/canvas image 2.jpg"
              alt="decorative image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Foreground text */}
        <div className="relative z-20 text-center">
          <h1 className={`text-6xl md:text-7xl font-bold ${libertinus.className}`}>
            About Me
          </h1>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <ActionArrow navAdjust={false} theme="dark" />
        </div>
      </section>

      {/* WAVE DIVIDER */}
      <div className="relative w-full overflow-hidden leading-none">
        <svg
          className="block w-full h-32 text-stone-900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,181.3C840,192,960,160,1080,133.3C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      {/* BLACK SECTION */}
      <section id="wave-section" className="bg-stone-900 text-white pt-30 pb-64 flex justify-center">
        <div id="text-wrap" className="px-10 grid place-items-center text-center h-min gap-10">
          <h2 className={`text-4xl font-bold text-white ${libertinus.className}`}>My Art</h2>
          <p className={`text-xl text-white ${libertinus.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className={`text-xl text-white ${libertinus.className}`}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
      </section>

      {/* BARRIER IMAGE SECTION */}
      <BarrierImageSection src={BarrierImage} barrierHeight={300} />


      {/* PHOTO/VIDEO SECTION */}
      <section className="bg-white text-stone-900 py-24 px-10">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className={`text-4xl font-bold mb-6 ${libertinus.className}`}>
            Videography & Photography
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-stone-600">
            Two forms of storytelling, one vision — explore the moving images of videography
            or the still moments of photography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* VIDEOS CARD */}
          <Link
            href="/video"
            className="group relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-72 w-full">
              <Image
                src="/layout/videography-img.jpg" // replace with your own preview
                alt="Videos"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                  Videos
                </h3>
              </div>
            </div>
          </Link>

          {/* PHOTOS CARD */}
          <Link
            href="/photo"
            className="group relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-72 w-full">
              <Image
                src="/layout/photography-img.jpg" // replace with your own preview
                alt="Photos"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                  Photos
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </section>

    </>
  );
};

export default Home;
