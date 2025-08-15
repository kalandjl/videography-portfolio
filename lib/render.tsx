"use client";
import { MagnifyingGlassIcon } from "@/app/icons";
import { XCircleIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";
import { motion } from "framer-motion"


export function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {

    // @ts-ignore
    let {big, leftBig, rightBig, firstRightBig, bigLeft, bigWithRowBelow, badImage, quality, blurDataURL } = photo

    let [modal, setModal] = useState(false)


    let bigContainerStyle =  big && !bigLeft ? {
        width: "200%",
        height: "200%",
        top: "0",
        bottom: "0",
        zIndex: "-10",
    } : big && bigLeft && !bigWithRowBelow ? {
        width: "300%",
        height: "300%",
        top: "0",
        zIndex: "-10",
    } : big && bigLeft && bigWithRowBelow ? {
        width: "300%",
        height: "300%",
        top: "0",
        zIndex: "-10",
    } : big && !bigLeft && bigWithRowBelow ? {
        width: "300%",
        height: "300%",
        top: "0",
        zIndex: "-10",
    } : {}

    let leftBigContainerStyle = leftBig ? {
        bottom: -height ,
        left: "-200%",
    } : {}

    let rightBigContainerStyle = rightBig ? {
        bottom: -height ,
        right: "",
    } : {}

    let firstRightBigContainerStyle = firstRightBig ? {
        right: "-100%",
    } : {}

    useEffect(() => {

    }, [modal])

  const img = (
    <motion.div
    initial={{ opacity: 0 }} // Start below the view (50px down) and hidden (opacity 0)
    whileInView={{ opacity: 1}} // Animate to the original position and opacity 1
    viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
    transition={{ duration: 1 }} 
    >
      <div onClick={() => setModal(true)}>
      {badImage ? 
          (<>
          <img 
              src={photo.src}
              alt={alt}
              title={title}
              sizes={sizes}
              id="gallery-photo"
              className={`
              ${big && !bigLeft ? "absolute" : "sm:p-4 p-2"}
              ${big && bigLeft ? "block !top-0" : "sm:p-4 p-2"}
              ${leftBig || rightBig || firstRightBig ? "absolute sm:p-4 p-2 w-1/2 h-1/2" : "sm:p-4 p-2"}
              ${photo.src.includes('hidden') ? "hidden" : ""}
              `}
              loading={`${big ? "lazy" : "eager"}`} // Lazy loading for performance
              />
          </>)
          :
          (<Image
          fill
          src={photo}
          alt={alt}
          title={title}
          sizes={sizes}
          blurDataURL={blurDataURL}
          id="gallery-photo"
          className={`
              ${big && !bigLeft ? "absolute" : "sm:p-4 p-2"}
              ${big && bigLeft ? "block !top-0" : "sm:p-4 p-2"}
              ${leftBig || rightBig || firstRightBig ? "absolute sm:p-4 p-2 w-1/2 h-1/2" : "sm:p-4 p-2"}
              ${photo.src.includes('hidden') ? "hidden" : ""}
          `}
          loading={`lazy`} // Lazy loading for performance
          priority={false} // Do not prioritize all images
          />
          )}
      </div>
    </motion.div>
  )

  return (
    <>
        <div className="block" onClick={() => big ? setModal(true) : "" }>
            <div className="relative">
                <div
                id={`img-${photo.src}`}
                // To detect with modal dectecting loop
                data-modal={`${modal ? true : false}`}
                style={{...{
                width: "100%",
                aspectRatio: `${width} / ${height}`,
                display: "",
                position: "relative",
                }, ...bigContainerStyle, 
                ...leftBigContainerStyle, 
                ...rightBigContainerStyle, 
                ...firstRightBigContainerStyle,}}
            >
            <div id="image-container-wrap" 
                className={`
                ${big && bigLeft ? "absolute bottom-0 top-1/3 left-0 right-1/3" : badImage ? "" : "p-4"}
                `}>
                    {img}
                </div>
                    <div style={{position: "absolute", background: "transparent"}}></div>
                </div>
            </div>
        </div>
        <div id="modal" className={`${modal ? "" : "hidden"} fixed inset-0 z-50 flex items-center justify-center`}>
            {/* Background overlay */}
            <div className="absolute bg-black opacity-80 inset-0" onClick={() => setModal(false)}></div>

            {/* Modal container */}
            <div className="relative max-w-[90vw] max-h-[90vh] bg-white p-4 rounded-lg shadow-lg z-50">
                <img
                src={photo.src}
                width={photo.width}
                height={photo.height}
                alt=""
                className="max-h-[80vh] max-w-full object-contain rounded-md"
                />
                <div className="top-0 right-0 absolute">
                    {/* Close button (Positioned properly) */}
                    <button
                    onClick={() => setModal(false)}
                    className="absolute top-3 right-3 text-white bg-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 transition"
                    >
                    ✕
                    </button>
                </div>
            </div>

        </div>

    </>
  )
}

export function renderNextImageMobile(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {

  // @ts-ignore
  let { big, leftBig, rightBig, firstRightBig, bigLeft, bigWithRowBelow, badImage, quality, loadingImage } = photo


    let bigContainerStyle =  big && !bigLeft ? {
      width: "200%",
      height: "200%",
      top: "0",
      bottom: "0",
      zIndex: "-10",
      left: "-100%",
    } : big && bigLeft && !bigWithRowBelow ? {
      width: "300%",
      height: "300%",
      top: "0",
      zIndex: "-10",
    } : big && bigLeft && bigWithRowBelow ? {
      left: "-100%",
      width: "300%",
      height: "300%",
      top: "0",
      zIndex: "-10",
    } : big && !bigLeft && bigWithRowBelow ? {
      width: "300%",
      height: "300%",
      top: "0",
      zIndex: "-10",
    } : {}
  
    let leftBigContainerStyle = leftBig ? {
      bottom: -height ,
      left: "-200%",
    } : {}
  
    let rightBigContainerStyle = rightBig ? {
      bottom: -height ,
      right: "",
    } : {}
  
    let firstRightBigContainerStyle = firstRightBig ? {
      right: "-100%",
    } : {}

  // Override the logic for mobile, do not apply any large image or layout adjustments for big-related properties
  let containerStyle = {
    width: "100%",
    aspectRatio: `${width} / ${height}`,
    display: "block",
    position: "relative",
  }

  let imageWrapperClass = "sm:p-4 p-2";

  // If none of the 'big' flags apply, we can just use a simpler approach
  if (big || leftBig || rightBig || firstRightBig) {
    containerStyle = {
      ...containerStyle,
      width: "100%", // Reset to default
      // @ts-ignore
      height: "auto", // Ensure no forced height
      zIndex: "auto", // Avoid layer issues on mobile
    }
    imageWrapperClass = "sm:p-4 p-2"; // Default padding for mobile
  }

  let [modal, setModal] = useState(false)

  const img = (
    <motion.div
    initial={{ opacity: 0, y: 150 }} // Start below the view (50px down) and hidden (opacity 0)
    whileInView={{ opacity: 1, y: 0 }} // Animate to the original position and opacity 1
    viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
    transition={{ duration: 1 }}
    >
      <div onClick={() => setModal(true)} className={`${big ? "z-50" : ""}`}>
        {badImage ?
          <>
          <img 
            src={photo.src}
            alt={alt}
            title={title}
            sizes={sizes}
            id="gallery-photo"

            className={`
              ${big && !bigLeft ? "absolute" : "sm:p-4 p-2"}
              ${big && bigLeft ? "block !top-0" : "sm:p-4 p-2"}
              ${leftBig || rightBig || firstRightBig ? "absolute sm:p-4 p-2 w-1/2 h-1/2" : "sm:p-4 p-2"}
              ${photo.src.includes('hiddn') ? "hidden" : ""}
            `}
            loading={`${big ? "lazy" : "eager"}`} // Lazy loading for performance
            />
          </>
          :
          <>
          <Image
            fill
            src={photo}
            alt={alt}
            title={title}
            sizes={sizes}
            id="gallery-photo"
            quality={quality??50}
            blurDataURL={loadingImage}

            className={`
              h-full
              ${big && !bigLeft ? "absolute" : "sm:p-4 p-2"}
              ${big && bigLeft ? "block !top-0" : "sm:p-4 p-2"}
              ${leftBig || rightBig || firstRightBig ? "absolute sm:p-4 p-2 w-1/2 h-1/2" : "sm:p-4 p-2"}
              ${photo.src.includes('hidden') || photo.src.includes("hdden") ? "hidden" : ""}
            `}
            loading={`lazy`} // Lazy loading for performance
            priority={false} // Do not prioritize all images
          />
          </>
        }
        {/* {
          big ?
        <div className="absolute -right-5 top-0 h-10 w-10 bg-white grid place-items-center z-50">
          <MagnifyingGlassIcon stroke="#000000" className="rotate-90 w-2/3" onClick={() => console.log("asdfkl")} />
        </div>
        :
        <></>
        } */}
      </div>
    </motion.div>
    )

  useEffect(() => {
    if (modal) setInterval(() => setModal(false), 1000)
  }, [modal])

  return (
    <>
      <div className="block" onClick={() => big ? setModal(true) : "" }>
        <div className="relative">
          <div
          id={`img-${photo.src}`}
          onClick={() => setModal(true)}
          data-modal={`${modal ? true : false}`}
          style={{...{
            width: "100%",
            aspectRatio: `${width} / ${height}`,
            display: "",
            position: "relative",
          }, ...bigContainerStyle, 
          ...leftBigContainerStyle, 
          ...rightBigContainerStyle, 
          ...firstRightBigContainerStyle,}}
        >
        <div id="image-container-wrap" 
          className={`
          ${big && bigLeft ? "absolute bottom-0 top-1/3 left-0 right-1/3":  badImage ? "" : "p-4"}
          `}
          >
            {img}
          </div>
            <div style={{position: "absolute", background: "transparent"}}></div>
          </div>
        </div>
      </div>
      <div id="modal" className={`${modal ? "" : "hidden"} fixed inset-0 z-50 flex items-center justify-center`}>
            {/* Background overlay */}
            <div className="absolute bg-black opacity-80 inset-0" onClick={() => setModal(false)}></div>

            {/* Modal container */}
            <div className="relative max-w-[90vw] max-h-[90vh] bg-white p-4 rounded-lg shadow-lg z-50">
                <img
                src={photo.src}
                width={photo.width}
                height={photo.height}
                alt=""
                className="max-h-[80vh] max-w-full object-contain rounded-md"
                />
                <div className="top-0 right-0 absolute">
                    {/* Close button (Positioned properly) */}
                    <button
                    onClick={() => setModal(false)}
                    className="absolute top-3 right-3 text-white bg-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 transition"
                    >
                    ✕
                    </button>
                </div>
            </div>

        </div>
    </>
  );
}
