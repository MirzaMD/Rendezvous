"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function MeetingActions() {
  const route = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 
    bg-gradient-to-br from-purple-600 to-blue-500 px-4">
      {/* New Meeting Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 cursor-pointer"
        onClick={() => {
          const newRoomID = Date.now().toString(); // or use uuid if you want
          route.push(`/zego/${newRoomID}`);
        }}
      >
        New Meeting
      </motion.button>

      {/* Join Meeting Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="px-6 py-3 rounded-2xl bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 cursor-pointer"
        onClick={() => {
          route.push("/front");
        }}
      >
        Join Meeting
      </motion.button>
    </div>
  );
}
