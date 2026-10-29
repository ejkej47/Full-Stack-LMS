"use client";

import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function VideoPlayer({ src, title }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const updateVolume = (value) => {
    const nextVolume = Number(value);
    if (videoRef.current) {
      videoRef.current.volume = nextVolume;
      videoRef.current.muted = nextVolume === 0;
    }
    setVolume(nextVolume);
    setMuted(nextVolume === 0);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    if (!nextMuted && videoRef.current.volume === 0) {
      videoRef.current.volume = 1;
      setVolume(1);
    }
    setMuted(nextMuted);
  };

  return (
    <div className="relative h-full w-full bg-black">
      <video
        ref={videoRef}
        className="h-full w-full"
        src={src}
        controls
        playsInline
        preload="metadata"
        aria-label={title}
        onVolumeChange={(event) => {
          setMuted(event.currentTarget.muted);
          setVolume(event.currentTarget.volume);
        }}
      />
      <div className="absolute right-3 top-3 z-20 flex items-center gap-2 rounded-full bg-black/75 px-3 py-2 text-white shadow-lg">
        <button type="button" onClick={toggleMute} aria-label={muted || volume === 0 ? "Uključi zvuk" : "Isključi zvuk"} title={muted || volume === 0 ? "Uključi zvuk" : "Isključi zvuk"} className="flex h-6 w-6 items-center justify-center">
          {muted || volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <input type="range" min="0" max="1" step="0.05" value={muted ? 0 : volume} onChange={(event) => updateVolume(event.target.value)} aria-label="Jačina zvuka" className="w-20 accent-[var(--primary)]" />
      </div>
    </div>
  );
}
