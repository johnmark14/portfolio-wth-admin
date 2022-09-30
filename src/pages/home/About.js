// @ts-nocheck
import SectionTitle from "components/SectionTitle";
import React from "react";
import { useSelector } from 'react-redux'

function About() {
    const {portfolioData : {about}} = useSelector(rootState=> rootState.root)
    return (
        <div>
            <SectionTitle title="About" />
            <div className="flex sm:flex-col">
                <div className="h-[50vh] sm:h-[fit-content] w-1/2 sm:w-full">
                    <lottie-player
                        src={about[0].lottieURL}
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                    ></lottie-player>
                </div>
                <div className="flex flex-col gap-5 w-1/2 sm:w-full">
                    <p className="text-white mt-5">
                        {about[0].description1}
                    </p>
                    <p className="text-white mt-5">
                        {about[0].description2}
                    </p>
                </div>
            </div>
            <div className="py-5">
                <h1 className="text-accent text-2xl">
                    Here are a few technologies I've been working with recently:
                </h1>
                <div className="flex flex-wrap gap-10 mt-5">
                {about[0].skills.map((skill, index)=> (
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
