import React from 'react';
import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMedieQuery';
import {motion} from 'framer-motion';

export default function MySkills() {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section className="pt-10 pb-24" id="skills">
            {/* HEADER and IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:0.5}} variants={{hidden:{opacity: 0, x: -50}, visible:{opacity: 1, x: 0}}} className="md:w-1/3">
                <p className="font-playfair font-semibold text-4xl mb-5">
                    MY <span className="text-red">SKILLS</span>
                </p>
                <LineGradient width="w-1/3" />
                <p className="mt-10 mb-7">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur saepe explicabo, blanditiis facilis molestiae ex officiis commodi!
                </p>
            </motion.div>
            <div className="mt-16 md:mt-0">
                {isAboveMediumScreens ? (
                    <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.2, duration:0.5}} variants={{hidden:{opacity: 0, x: -50}, visible:{opacity: 1, x: 0}}}>
                    <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
                        <img alt="skills" className="z-10" src={require("../assets/skills-image.png")} />
                    </div>
                    </motion.div>
                ): (
                    <img alt="skills" className="z-10" src={require("../assets/skills-image.png")} />
                )}
            </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* EXPERIENCE */}
                <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.4, duration:0.5}} variants={{hidden:{opacity: 0, y: 50}, visible:{opacity: 1, y: 0}}} className="md:w-1/3 mt-10">
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Experience</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, maxime. Rerum tempore autem, commodi recusandae aut voluptatum magnam odio non.
                    </p>
                </motion.div>

                {/* INNOVATIVE */}
                <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.6, duration:0.5}} variants={{hidden:{opacity: 0, y: 50}, visible:{opacity: 1, y: 0}}} className="md:w-1/3 mt-10">
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Innovative</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Aut aliquam voluptates quia, autem esse animi, id sapiente explicabo, necessitatibus itaque aperiam perspiciatis numquam quasi iste mollitia vero nobis earum rerum.
                    </p>
                </motion.div>

                {/* IMAGINATIVE */}
                <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.8, duration:0.5}} variants={{hidden:{opacity: 0, y: 50}, visible:{opacity: 1, y: 0}}} className="md:w-1/3 mt-10">
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Imaginative</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, maxime. Impedit nemo explicabo est quod voluptatem? Quasi ut excepturi quia?
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
