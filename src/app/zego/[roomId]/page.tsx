"use client";
import { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "next/navigation";

export default function Meeting() {
  const meetingRef = useRef<HTMLDivElement>(null);
  const zpRef = useRef<ReturnType<typeof ZegoUIKitPrebuilt.create> | null>(null);
  const params = useParams();
  const roomID = (params?.roomId as string) || "default-room";

  useEffect(() => {
    if (!meetingRef.current || zpRef.current) return;

    const appID = 47912758;
    const serverSecret = "ef321a4752ceaad91e3703eb62b0dfb1";
    const userID = Date.now().toString();
    const userName = "User_" + userID;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      userID,
      userName
    );

    // Store instance in ref so it doesn’t re-init on every render
    zpRef.current = ZegoUIKitPrebuilt.create(kitToken);

    zpRef.current.joinRoom({
      container: meetingRef.current,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `${window.location.origin}/zego/${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });

    // Cleanup on unmount (avoids duplicate joins)
    return () => {
      if (zpRef.current) {
        zpRef.current.destroy();
        zpRef.current = null;
      }
    };
  }, [roomID]);

  return <div ref={meetingRef} className="w-screen h-screen" />;
}
