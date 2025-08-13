"use client";

import { ImageProps } from "next/image";
import { FC, useEffect, useState } from "react";
import Image from "next/image";

const CustomImage: FC<ImageProps> = (props) => {
  const [mobile, setMobile] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(false);

  useEffect(() => {
    // Check if the screen width is less than 768px (mobile screen size)
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    // Run on initial load
    handleResize();

    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set firstLoad to true after the initial mount
  useEffect(() => {
    setFirstLoad(true);
  }, []);

  return (
    <>
      {firstLoad ? (
        mobile ? (
          // Mobile Image with lower quality
          <Image quality={50} {...props} />
        ) : (
          // Normal Image
          <Image {...props} />
        )
      ) : (
        // A placeholder or loading state while firstLoad is false
        <div style={{ width: "100%", height: "100%", backgroundColor: "#ccc" }} />
      )}
    </>
  );
};

export default CustomImage;
