import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/doodlejump.png"
                    title="Doodle Jump game"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    link="https://doodle-jump-game-vrff.vercel.app/"
                />

                <ProjectCard
                    src="/shopee-clone.png"
                    title="Shopee Clone website"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    link="https://shopee-clone-one-psi.vercel.app/"
                />
                <ProjectCard
                    src="/My-portfolio.png"
                    title="My Portfolio Website"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    link="https://my-portfolio-blush-nine-89.vercel.app/"
                />
                <ProjectCard
                    src="/band-clone.png"
                    title="The band Website"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    link="https://band-learn.vercel.app/"
                />
            </div>
        </div>
    );
};

export default Projects;
