import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y:0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 *(index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current, 
            { opacity: 0}, 
            { opacity: 1, duration: 1.5 }
        )
    }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/*LEFT*/}
                <div className="first-project-wrapper" ref={project2Ref}>
                    <div className="image-wrapper ">
                        <img src="/images/project1.png" alt="Clone YT" />
                    </div>
                    <div className="text-content">
                        <h2> Responsive YouTube clone </h2>
                        <p className="text-white-50 md:text-xl">
                            A responsive YouTube clone created using HTML and CSS that replicates 
                            the main user interface of YouTube's homepage.
                        </p>
                    </div>
                </div>

                {/*RIGHT*/}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#ffeebe]">
                            <img src="/images/project2.jpg" alt="Expense Tracker" />
                        </div>
                        <h2>Expense Tracker</h2>
                        <p className="text-white-50 md:text-xl">
                            A desktop application built with Python and Tkinter that helps users track
                            and manage their daily expenses. 
                        </p>
                    </div>
                    <div className="project" ref={project1Ref}>
                        <div className="image-wrapper bg-[#296ba5]">
                            <img src="/images/project3.png" alt="TOH" />
                        </div>
                        <h2>Tower of Hanoi</h2>
                        <p className="text-white-50 md:text-xl">
                            A classic recursive puzzle where the goal is to move all disks from a source to a target peg, following 
                            strict size and move constraints to solve it optimally. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection