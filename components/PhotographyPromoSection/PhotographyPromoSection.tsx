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
    name: "Clothing",
    href: "/photo/clothing",
    imageSrc: "street-promo.jpg",
  },
  {
    name: "Portraits",
    href: "/photo/portraits",
    imageSrc: "portraits-promo.jpg",
  },
  {
    name: "Nature",
    href: "/photo/nature",
    imageSrc: "nature-promo.jpg",
  },
  {
    name: "Events",
    href: "/photo/events",
    imageSrc: "events-promo.jpg",
  },
];

const PhotographyPromoSection: FC = () => {
  const [randFolders, setRandFolders] = useState<Folder[]>([]);

  useEffect(() => {
    const numArr = getUniqueRandomNumbers(3, folders.length);
    const imageArr = numArr.map((num) => folders[num - 1]);
    setRandFolders(imageArr);
  }, []);

  return (
    <section id="photography-promo-section" className="w-full py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="agency text-5xl font-bold text-stone-900">
          Photography
        </h2>
        <p className="mt-4 text-lg text-stone-600">
          Explore highlights from my photography projects
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

export default PhotographyPromoSection;
