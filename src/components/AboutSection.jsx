import { Briefcase, User, Code } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate web developer crafting digital experiences.
                        </h3>
                        
                        <p className="text-muted-foreground text-justify">
                            My journey in web development began with a curiosity for how websites work, which quickly evolved into a full-fledged passion. I thrive on solving complex problems and turning ideas into reality through code. Whether it's crafting intuitive user interfaces or optimizing server-side performance, I approach each project with dedication and a keen eye for detail.
                        </p>
                        <p className="text-muted-foreground text-justify">
                            Beyond coding, I enjoy collaborating with like-minded individuals and staying updated with the latest industry trends. When I'm not immersed in code, you can find me exploring new technologies, contributing to open-source projects.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a href=""
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground text-justify">
                                        Building responsive and dynamic websites using modern technologies like React, Node.js, and more.
                                    </p>
                                </div>
                                </div>
                            </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                        <p className="text-muted-foreground text-justify">
                                        Creating intuitive and visually appealing user interfaces with a focus on user experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Project Management</h4>
                                        <p className="text-muted-foreground text-justify">
                                        Leading projects from conception to completion with agile methodologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};