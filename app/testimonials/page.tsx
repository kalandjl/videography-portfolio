import ActionArrow from "@/components/ActionArrow"
import Nav from "@/components/Nav"

const Home = () => {

    return (
        <>
            <Nav theme="dark" /> 

            <div className="grid place-items-center h-screen relative">
                <div className="">
                    <h1 className="text-6xl font-bold agency h-96">TESTIMONIALS</h1>
                    <div className="grid place-items-center">
                        <ActionArrow theme="dark"/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home