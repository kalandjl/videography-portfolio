"use client"
import Nav from "@/components/Nav"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Folder {
    href: string
    title: string
}

const Home = () => {

    const [folders, setFolders] = useState<Folder[]>([])

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

        loadData()
    }, [])

    return (
        <>
            <Nav theme="dark" />

            <h1 className="text-center text-5xl font-bold agency py-10">PHOTOGRAPHY</h1>
            <div className="grid grid-cols-2 py-20 px-20 gap-y-2 gap-x-2">
                {folders.map((folder, i) => (
                    <div key={i} className="min-h-6">
                        <Link href={folder.href}>
                            <p className="font-bold text-lg bg-gray-100 text-center">
                                {folder.title}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home