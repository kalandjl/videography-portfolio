"use client";
import { getUniqueRandomNumbers } from "@/lib/num";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface Folder {
  name: string;
  href: string;
  imageSrc: string;
}

let folders: Folder[] = [
  {
    name: "Football",
    href: "/video/football",
    imageSrc: "football-promo.jpg",
  },
  {
    name: "Cars",
    href: "/video/cars",
    imageSrc: "cars-promo.jpg",
  },
  {
    name: "Basketball",
    href: "/video/basketball",
    imageSrc: "basketball-promo.jpg",
  },
  {
    name: "Cuts",
    href: "/video/cuts",
    imageSrc: "cuts-promo.jpg",
  },
];

const VideographyPromoSection: FC = () => {
  let [randFolders, setRandFolders] = useState<Folder[]>([]);

  useEffect(() => {
    const numArr = getUniqueRandomNumbers(3, folders.length);
    const imageArr = numArr.map((num) => folders[num - 1]);
    setRandFolders(imageArr);
  }, []);

  return (
    <section id="videography-promo-section" className="w-full pt-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="agency text-5xl font-bold text-stone-900">
          Videography
        </h2>
        <p className="mt-4 text-lg text-stone-600">
          Explore highlights from my videography section
        </p>
      </div>

      {/* Promo Grid */}
      <div className="h-128 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {randFolders.map((folder, i) => (
          <div key={i} className="h-full relative group">
            <Image
              src={`/layout/${folder.imageSrc}`}
              alt={`${folder.name} promo`}
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 group-hover:bg-opacity-30 transition duration-300 rounded-xl"></div>
            {/* Title Link */}
            <div className="absolute inset-0 grid place-items-center z-20">
              <Link href={folder.href}>
                <p className="text-white agency text-3xl font-bold hover:underline transition ease-in-out">
                  {folder.name}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideographyPromoSection;
