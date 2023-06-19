import { useEffect } from "react";
import { Button } from "react-bootstrap";
import "./BackToTop.css"


function BackToTop() {
    useEffect(() => {
        const backtotop = document.querySelector('.back-to-top');

        if (backtotop) {
            const toggleBackToTop = () => {
                if (window.scrollY > 100) {
                    backtotop.classList.add('active');
                } else {
                    backtotop.classList.remove('active');
                }
            };

            window.addEventListener('load', toggleBackToTop);
            window.addEventListener('scroll', toggleBackToTop);

            return () => {
                window.removeEventListener('load', toggleBackToTop);
                window.removeEventListener('scroll', toggleBackToTop);
            };
        }
    }, []);

    const backToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Button onClick={backToTop} className="back-to-top d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-delay="80">
                <i className="bi bi-arrow-up-short"></i>
        </Button>
    );
}

export default BackToTop;