"use client"
import ActionSection from "@/components/ActionSection"
import FAQSection from "@/components/FAQSection"
import InstaSection from "@/components/InstaSection"
import Nav from "@/components/Nav"

const Home = () => {

    return (
        <> 
            <main className="relative">
                <div id="nav-wrap" className="absolute top-0 right-0 left-0 z-20">
                    <Nav theme="light"/>
                </div>
                <FAQSection asSection={false} />

            </main>
     
            

            <ActionSection links={[
                {
                title: "My Photos",
                link: "/portfolio",
                }, {
                title: "Contact Me",
                link: "/contact",
                }
            ]} />
        </>
    )
}

export default Home