import { useEffect } from "react";

const ZoomEffect = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".zoom-out");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.2 });

        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return null;
};

export default ZoomEffect;
