import { useRef, useEffect } from "react";

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            { threshold: 0.1 }
        );

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((project, index) => {
            if (project) {
                project.style.opacity = '0';
                project.style.transform = 'translateY(50px)';
                project.style.transition = `opacity 1s ease ${0.3 * (index + 1)}s, transform 1s ease ${0.3 * (index + 1)}s`;
                observer.observe(project);
            }
        });

        if (sectionRef.current) {
            sectionRef.current.style.opacity = '0';
            sectionRef.current.style.transition = 'opacity 1.5s ease';
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section 
            id="work" 
            ref={sectionRef} 
            className="w-full mt-20 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center text-white min-h-screen"
        >
            <div className="w-full max-w-7xl">
                <div className="flex xl:flex-row flex-col gap-10 justify-between">
                    {/* LEFT - Main Project */}
                    <div className="h-full flex flex-col justify-between xl:w-3/5" ref={project2Ref}>
                        <div className="xl:h-96 md:h-80 h-64 relative">
                            <img src="/images/project1.png" alt="ShopVerse" className="w-full h-full object-cover rounded-xl absolute inset-0" />
                        </div>
                        <div className="space-y-5 mt-5">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                                ShopVerse - An Ecommerce Website
                            </h2>
                            <p className="text-gray-300 md:text-xl">
                                ShopVerse is a fashion hub for girls to explore trendy outfits, combos, and jewelry. 
                                Built with HTML, CSS, and JavaScript, it's where style meets simplicity.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">HTML</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">CSS</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">JavaScript</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - Project List */}
                    <div className="flex md:flex-row flex-col xl:flex-col gap-10 xl:w-2/5">
                        <div className="project" ref={project3Ref}>
                            <div className="xl:h-64 md:h-56 h-52 relative rounded-xl px-5 xl:px-8 py-0 w-full max-w-[500px] mx-auto" style={{ backgroundColor: '#f2f2f2' }}>
                                <img src="/images/project2.png" alt="Clone YT" className="w-full h-full object-contain rounded-xl" />
                            </div>
                            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">YouTube Clone</h2>
                            <p className="text-gray-300 md:text-lg">
                                A responsive YouTube clone created using HTML and CSS that replicates 
                                the main user interface of YouTube's homepage.
                            </p>
                            <div className="flex gap-2 flex-wrap mt-3">
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">HTML</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">CSS</span>
                            </div>
                        </div>

                        <div className="project" ref={project1Ref}>
                            <div className="xl:h-64 md:h-56 h-52 relative rounded-xl bg-yellow-100 px-5 xl:px-8 py-0 w-full max-w-[500px] mx-auto">
                                <img src="/images/project3.jpg" alt="Expense Tracker" className="w-full h-full object-contain rounded-xl" />
                            </div>
                            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">Expense Tracker</h2>
                            <p className="text-gray-300 md:text-lg">
                                A desktop application built with Python and Tkinter 
                                that helps users track and manage their daily expenses.
                            </p>
                            <div className="flex gap-2 flex-wrap mt-3">
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Python</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Tkinter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;