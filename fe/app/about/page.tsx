'use client';

import { Footers } from "@/components/about/Footer";
import { Headers } from "@/components/about/Header";
import { Body1 } from "@/components/about/body1";
import { Body2 } from "@/components/about/body2";
import { Body3 } from "@/components/about/body3";
import { Body4 } from "@/components/about/body4";
import { Body5 } from "@/components/about/body5";
import { Body6 } from "@/components/about/body6";
import { Body7 } from "@/components/about/body7";

const About: React.FC = () => (
    <div className="">
        <section>
            <div className="">
                <Headers />
            </div>
        </section>
        <section>
            <div className="px-[3px] grid gap-y-10">
                <div className=" h-[100vh]">
                    <Body1 />
                </div>
                <div className="">
                    <Body2 />
                </div>
                <div>
                    <Body3 />
                </div>
                <div>
                    <Body4 />
                </div>
                {/* <div>
                    <Body5 />
                </div> */}
                <div>
                    <Body6 />
                </div>
                <div>
                    <Body7 />
                </div>
            </div>
        </section>
        <section>
            <div className="px-[30px]">
                <Footers />
            </div>
        </section>
    </div>
)

export default About;