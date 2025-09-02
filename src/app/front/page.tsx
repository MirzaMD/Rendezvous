"use client";
import { useUser } from "@/Global_Vars/useInfo";
import { easeIn, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Land() {
  const { username, setUsername } = useUser(); // treating as meeting ID
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gradient-to-br from-purple-600 to-blue-500 px-4">
      <h1 className="text-xl sm:text-3xl font-serif text-stone-50 mt-6 ">
        Rendezvous
      </h1>
      <motion.div
        variants={{
          hid: { opacity: 0, x: -80 },
          show: {
            opacity: 1,
            x: 0,
            transition: { ease: easeIn, duration: 0.75, bounce: 8, stiffness: 40 },
          },
        }}
        initial="hid"
        animate="show"
        className="w-[280px] sm:w-[500px] flex flex-col justify-center items-center gap-y-4 absolute 
                   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-blue-800
                   h-[300px] rounded-xl bg-white"
        style={{ boxShadow: `5px 5px 5px black` }}
      >
        <label className="text-lg sm:text-xl font-serif text-blue-500 mt-4">
          Meeting ID:
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="enter the meeting ID"
          className="w-[90%] rounded-lg text-blue-500 font-serif text-lg sm:text-xl border-2 border-blue-500"
        />
        <button
          onClick={() => {
            if (username.trim()) {
              router.push(`/zego/${username}`);
            }
          }}
          className="p-2 sm:text-lg text-md rounded-lg bg-blue-500 text-stone-50 cursor-pointer
                     hover:bg-blue-600 active:bg-blue-700 font-serif"
          style={{ textShadow: `2px 2px 2px black` }}
        >
          Join
        </button>
      </motion.div>
    </div>
  );
}
