// @ts-nocheck
import SectionTitle from "components/SectionTitle";
import React from "react";

function About() {
    const skills = [
        "JavaScript",
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Firebase"
    ]
    return (
        <div>
            <SectionTitle title="About" />
            <div className="flex sm:flex-col">
                <div className="h-[50vh] sm:h-[fit-content] w-1/2 sm:w-full">
                    <lottie-player
                        src="https://assets7.lottiefiles.com/private_files/lf30_WdTEui.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                    ></lottie-player>
                </div>
                <div className="flex flex-col gap-5 w-1/2 sm:w-full">
                    <p className="text-white mt-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
                        doloremque officia placeat veritatis saepe, amet animi laborum
                        voluptatem accusamus veniam accusantium doloribus aut, minus
                        reiciendis commodi provident ipsum facere dolore!
                    </p>
                    <p className="text-white mt-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
                        doloremque officia placeat veritatis saepe, amet animi laborum
                        voluptatem accusamus veniam accusantium doloribus aut, minus
                        reiciendis commodi provident ipsum facere dolore!
                    </p>
                </div>
            </div>
            <div className="py-5">
                <h1 className="text-accent text-2xl">
                    Here are a few technologies I've been working with recently:
                </h1>
                <div className="flex flex-wrap gap-10 mt-5">
                {skills.map((skill, index)=> (
                    <div className="text-accent border border-accent py-3 px-10">
                        <h1>{skill}</h1>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default About;
