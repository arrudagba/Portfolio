"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "../context/LoadingContext";
import { useEffect, useState } from "react";

export default function Preloader() {
    const { isLoading } = useLoading();
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (!isLoading) {
            // Delay removing the component to allow exit animation
            const timer = setTimeout(() => setShow(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    return (
        <AnimatePresence mode="wait">
            {(isLoading || show) && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isLoading ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                >
                    <div className="flex flex-col items-center gap-4">
                        {/* Elegant Spinner */}
                        <div className="relative w-16 h-16">
                            <motion.div
                                className="absolute inset-0 border-4 border-t-transparent border-white rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute inset-2 border-4 border-b-transparent border-blue-400 rounded-full"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-white font-light tracking-widest text-sm"
                        >
                            LOADING EFFECT
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
