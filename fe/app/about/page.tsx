import { Headers } from "@/components/about/Header";
import { Body1 } from "@/components/about/body1";


const About: React.FC = () => {
    return (
        <div className="absolute">
            <div className="relative">
                <Headers />
            </div>
            <div className="relative">
                <Body1 />
            </div>
        </div>
    )
}

export default About;