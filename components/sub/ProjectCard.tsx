import Image from 'next/image';
import React from 'react';

interface Props {
    src: string;
    title: string;
    description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className=" object-cover "
            />

            <div className="relative p-4">
                <h1 className="flex  justify-center items-center text-2xl font-semibold text-white">
                    {title}
                </h1>
                <p className="flex  justify-center items-center   mt-2 text-gray-300">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
