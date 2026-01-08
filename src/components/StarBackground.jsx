import { useEffect, useState } from "react";

// id, size, x, y, opacity , animation (gonna be included for the star)
// id, size, x, y, delay , duration (gonna be included for the meteor)

export const StarBackground = () => {
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([]);
    
    useEffect(() => {
        // eslint-disable-next-line react-hooks/immutability
        generateStars();
        // eslint-disable-next-line react-hooks/immutability
        generateMeteors();

        const handleRezize = () => {
            generateStars();
            generateMeteors();
        };

        window.addEventListener("resize", handleRezize);

        return () => window.removeEventListener("resize", handleRezize);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        
        const newStars = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // size between 1 and 3
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5, // opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2 // duration between 4s and 6s
            });
        }

        setStars(newStars);
    }

    const generateMeteors = () => {
        const numberOfMeteors = 20;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            const left = Math.random() * 90 + 9; // $v: 9% -> 99%
            const top = Math.random() * 250 + 50; // $h: 50px -> 300px
            const duration = Math.random() * 7 + 3; // $d: 3s -> 10s
            newMeteors.push({
                id: i,
                left,
                top,
                width: 500, // same as SCSS
                height: 1,
                duration,
                delay: Math.random() * 5, // $delay: 0s -> 5s
            });
        }

        setMeteors(newMeteors);
    }
        return (
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {stars.map(star => (
                    <div
                        key={star.id}
                        className="star animate-pulse-subtle"
                        style={{
                            width: star.size + 'px',
                            height: star.size + 'px',
                            left: star.x + '%',
                            top: star.y + '%',
                            opacity: star.opacity,
                            animationDuration: star.animationDuration + 's',
                        }}
                    />
                ))}

                {meteors.map(meteor => (
                    <div
                        key={meteor.id}
                        className="meteor animate-meteor"
                        style={{
                        position: "absolute",
                        left: meteor.left + "%",
                        top: '-200px',
                        width: meteor.width + "px",
                        height: meteor.height + "px",
                        transform: "rotate(-45deg)",
                        backgroundImage: "linear-gradient(to right, #fff, rgba(255,255,255,0))",
                        animationFillMode: "forwards", /* keeps the element at the end position */
                        animation: `meteor ${meteor.duration}s linear infinite`,
                        animationDelay: meteor.delay + "s",
                        }}
                    >
                        <div
                        style={{
                            content: '""',
                            position: "absolute",
                            width: "4px",
                            height: "5px",
                            borderRadius: "50%",
                            marginTop: "-2px",
                            background: "rgba(255,255,255,0.7)",
                            boxShadow: "0 0 15px 3px #fff",
                        }}
                    />
                </div>
                ))}
            </div>
        );
};