"use client"
import { lato } from "@/app/fonts";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import InstaLogo from "@/public/icons/insta-logo.png"
import InstaPhoto1 from "@/public/pictures/insta/insta-photo-1.jpg" 
import InstaPhoto2 from "@/public/pictures/insta/insta-photo-2.jpg"
import InstaPhoto3 from "@/public/pictures/insta/insta-photo-3.jpg"
import InstaPhoto4 from "@/public/pictures/insta/insta-photo-4.jpg"
import InstaPhoto5 from "@/public/pictures/insta/insta-photo-5.jpg"
import InstaPhoto6 from "@/public/pictures/insta/insta-photo-6.jpg"
import InstaPhoto7 from "@/public/pictures/insta/insta-photo-7.jpg"
import { getUniqueRandomNumbers } from "@/lib/num";
import CustomImage from "../CustomImage";

let preRandImages = [
    {src: InstaPhoto1, width: 2160, height: 2160, link: "https://www.instagram.com/p/DGxGFDtxXv4/?img_index=1"},
    {src: InstaPhoto2, width: 2160, height: 2160, link: "https://www.instagram.com/p/DGWmsanR5V-/?img_index=1"},
    {src: InstaPhoto3, width: 2160, height: 2160, link: "https://www.instagram.com/p/C2B4l4hO06v/?img_index=1"},
    {src: InstaPhoto4, width: 2160, height: 2160, link: "https://www.instagram.com/p/DG1sKEYxsAv/?img_index=3"},
    {src: InstaPhoto5, width: 2160, height: 2160, link: "https://www.instagram.com/p/DGWmsanR5V-/?img_index=4"},
    {src: InstaPhoto6, width: 2160, height: 2160, link: "https://www.instagram.com/p/DDsR5wry_xS/?img_index=1"},
    {src: InstaPhoto7, width: 2160, height: 2160, link: "https://www.instagram.com/p/DAkVHGuJ-DR/?img_index=1"},
]

interface Props {}

const InstaSection: FC<Props> = () => {
    let [images, setImages] = useState<{ src: StaticImageData, height: number, width: number, link: string }[]>([])

    useEffect(() => {
        const numArr = getUniqueRandomNumbers(4, 7);
        const imageArr = numArr.map(num => preRandImages[num - 1]);
        setImages(imageArr);
    }, []);

    return (
        <>
            <section id="insta-section" className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 h-48 sm:h-64 sm:mt-20 grid-rows-1">
                {/* Instagram CTA */}
                <div id="action-section" className="bg-gray-100 grid place-items-center">
                    <Link href="https://www.instagram.com/jmai.photos/">
                        <div id="text-wrap" className="grid gap-3 hover:scale-105 transition ease-in-out">
                            <div id="image-wrap" className="grid place-items-center">
                                <div id="image-cover" className="w-7 h-7 relative overflow-hidden">
                                    <Image src={InstaLogo} layout="fill" objectFit="cover" alt="instagram-logo" />
                                </div>
                            </div>
                            <p className={`${lato.className} text-center md:text-lg`}>
                                Follow me on Instagram
                            </p>
                            <div id="underline-text-wrap" className="grid place-items-center w-full">
                                <p className={`${lato.className} text-center hover:text-gray-800 transition duration-300 relative group w-min text-sm md:text-md`}>
                                    @jmai.photos
                                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Instagram Images */}
                {images.map((image, i) => (
                    <Link href={image.link} key={i}>
                        <div className="relative w-full h-full overflow-hidden">
                            <CustomImage src={image.src} layout="fill" objectFit="cover" alt={`insta image ${i + 1}`}
                            className="hover:scale-105 hover:cursor-pointer transition ease-in-out " />
                        </div>
                    </Link>
                ))}
            </section>
        </>
    )
}

export default InstaSection;
