"use client"
import Script from "next/script";
import { FC, useEffect } from "react";

interface Props {
    src: string
}



const InstaVidPromoSection: FC<Props> = (props) => {


    return (
        <>
            <section id="vid-promo-section">
                <div id="section-inner" className="h-[30vh] bg-stone-900 grid grid-cols-5 text-white">
                    <div id="vid-display" className="col-span-2">
                        {/* Insta Link */}
                        <blockquote
                            className="instagram-media"
                            data-instgrm-permalink={props.src}
                            data-instgrm-version="12"
                            style={{
                            background: "#FFF",
                            border: 0,
                            borderRadius: "3px",
                            boxShadow:
                                "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                            margin: "1px",
                            maxWidth: "540px",
                            minWidth: "326px",
                            padding: 0,
                            width: "99.375%",
                            }}
                        />
                        <Script
                            src="https://www.instagram.com/embed.js"
                            strategy="lazyOnload"
                        />
                    </div>
                    <div id="vid-description" className="col-span-3 px-5 py-5">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InstaVidPromoSection