import { useEffect, useState } from 'react';

const BarImageAchivements = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 430);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageSrc = isMobile
        ? 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1762406145585_mental-health-1.png'
        : 'https://uploads.justech-ai.in/vopa-website/websiteHomepage/1762406145577_education-vopa-makes-quality-learning-accessible-to-every-child-anywhere-5.png';

    return (
        <section
            // className="mt-5"
            style={{
                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5), 0px -5px 15px rgba(0, 0, 0, 0.5)',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
            }}>
            <img
                style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'contain',
                }}
                src={imageSrc}
                alt="VOPA achievements bar illustration"
            />
        </section>
    );
};

export default BarImageAchivements;
