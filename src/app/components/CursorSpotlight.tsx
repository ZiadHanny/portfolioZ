"use client";

import React, { useRef } from "react";

interface CursorSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

/** Wraps content in a container with a radial glow that follows the mouse. */
const CursorSpotlight = ({ children, className, ...rest }: CursorSpotlightProps) => {
    const glowRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 100;
        const my = ((e.clientY - rect.top) / rect.height) * 100;
        glowRef.current?.style.setProperty("--mx", `${mx}%`);
        glowRef.current?.style.setProperty("--my", `${my}%`);
    };

    return (
        <div className={className} onMouseMove={handleMouseMove} {...rest}>
            <div ref={glowRef} className="cursor-spotlight" />
            {children}
        </div>
    );
};

export default CursorSpotlight;
