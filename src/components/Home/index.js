import { useEffect } from 'react';
import './index.scss';

const Home = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const a = 0.00001;
            const b = 0.0003;
            const c = 0;
            const blurVal = Math.max(0, a * Math.pow(scrollY, 2) + b * scrollY + c);
            document.querySelector('.text-zone').style.filter = `blur(${blurVal}px)`;
            console.log(scrollY)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="home-container">
            <div className="text-zone">
                <h1>
                    Hi, <br /> I'm Scott Li
                </h1>
                <h2>
                    Co-Founder of{' '}
                    <a
                        href="https://aivocado.online"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        AIvocado Inc
                    </a>
                </h2>
                <h2>Product Manager & Full-Stack Developer</h2>
            </div>
            <div className="section1right">
                <h1>WELCOME <br></br> to <br></br>MY HOME</h1>
            </div>
        </div>
    );
};

export default Home;
