import React from 'react';
import useMediaQuery from '../hooks/useMedieQuery';
import {motion} from "framer-motion";
import AnchorLink from 'react-anchor-link-smooth-scroll'; 

export default function Landing({setSelectedPage}) {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            
        </section>
    )
}
