import { Headers } from "@/components/about/Header";
import { Body1 } from "@/components/about/body1";


const About: React.FC = () => {
    return (
        <div className="">
            <div className="">
                <Headers />
            </div>
            <div className="px-[60px]">
                <Body1 />
            </div>
        </div>
    )
}

export default About;