import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    const headlines = [
        "OpenAI unveils new AI model that promises faster and more efficient language processing.",
        "Global leaders gather in Geneva to discuss renewable energy strategies.",
        "Stock markets rise amid optimism over tech earnings.",
        "Bangladesh clinches dramatic win in final over thriller.",
        "‘Galactic Dawn’ smashes box office records worldwide."
    ];

    const [randomHeadline, setRandomHeadline] = useState('')

    useEffect(() => {
        const random = headlines[Math.floor(Math.random() * headlines.length)]
        setRandomHeadline(random)
    }, [])

    return (
        <div className='flex items-center gap-5 bg-base-200'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee pauseOnHover={true} speed={60} className='flex gap-4'>
                {/* <p className='font-semibold'>OpenAI unveils new AI model that promises faster and more efficient language processing for developers worldwide.</p>

                <p className='font-semibold'>Global leaders gather in Geneva to discuss new strategies for combating climate change and promoting renewable energy.</p>

                <p className='font-semibold'>Bangladesh secures a thrilling win against Sri Lanka in the final over, marking a historic series victory.</p>

                <p className='font-semibold'>Bangladesh secures a thrilling win against Sri Lanka in the final over, marking a historic series victory.</p> */}

                {/* Dynamically */}

                <p className='mr-3'>{randomHeadline}</p>
                <p className='mr-3'>{randomHeadline}</p>
                <p className='mr-3'>{randomHeadline}</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;