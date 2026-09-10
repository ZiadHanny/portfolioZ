"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MouseTiltProps {
    children: React.ReactNode;
    className?: string;
    max?: number;
}

/** Wraps children in a card that tilts in 3D toward the cursor on hover. */
const MouseTilt = ({ children, className, max = 10 }: MouseTiltProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(springY, [0, 1], [max, -max]);
    const rotateY = useTransform(springX, [0, 1], [-max, max]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        x.set(0.5);
        y.set(0.5);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformPerspective: 800 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MouseTilt;
