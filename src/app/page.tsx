"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/starter");
    }, 1500); // redirect after 2 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-blue-500 px-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest text-center"
      >
        Made By Mirza
      </motion.h1>
    </div>
  );
}
