import Nav from "@/components/Nav"
import { libertinus } from "../fonts"
import Image from "next/image"

const Home = () => {
  return (
    <>
      {/* Nav on top */}
      <div id="nav-wrap" className="absolute top-0 left-0 right-0 z-50">
        <Nav theme="light" text="dark" />
      </div>

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
                src={"/layout/canvas image 2.jpg"}
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
      </section>
    </>
  )
}

export default Home