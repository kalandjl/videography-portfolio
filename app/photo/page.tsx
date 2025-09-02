"use client";

import Nav from "@/components/Nav";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Folder {
  href: string;
  title: string;
}

const Home = () => {
  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/portfolio");
        const data = await res.json();

        const photoFolders = [
          ...new Set(data.photos.map((p: any) => p.folder)),
        ].map((f: any) => ({
          href: `/photo/${f.toLowerCase().replace(" ", "_")}`,
          title: f.charAt(0).toUpperCase() + f.slice(1).replace(/-/g, " "),
        }));

        setFolders(photoFolders);
      } catch (err) {
        console.error("Failed to load portfolio data", err);
      }
    }

    loadData();
  }, []);

  return (
    <>
      <Nav theme="dark" />

      <h1 className="text-center text-5xl font-bold agency py-10">
        PHOTOGRAPHY
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 md:px-20 py-10">
        {folders.map((folder, i) => (
          <Link
            key={i}
            href={folder.href}
            className="group block rounded-2xl bg-gray-50 p-6 shadow hover:shadow-lg transition"
          >
            <p className="text-lg font-semibold text-center group-hover:text-black/70">
              {folder.title}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
