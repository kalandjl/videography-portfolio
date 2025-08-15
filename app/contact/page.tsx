import Image from "next/image"
import ExampleHeroImg from "@/public/layout/example_contact_hero_img.jpg"
import HeroImageSection from "@/components/HeroImageSection"

const Home = () => {

    return (
        <>
            <HeroImageSection src={ExampleHeroImg} width={1440} height={1800} title="Contact" />
        </>
    )
}

export default Home