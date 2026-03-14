import { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  RotateCw,
} from "lucide-react";

export default function PremiumVideoPlayer({ src }) {
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [skipDir, setSkipDir] = useState(null);

  const formatTime = (time) => {
    if (!time) return "00:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  let hideTimer;

  /* PLAY / PAUSE */

  const togglePlay = () => {
    const v = videoRef.current;

    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  /* PROGRESS UPDATE */

  const updateProgress = () => {
    const v = videoRef.current;

    setCurrentTime(v.currentTime);
    setDuration(v.duration);

    const percent = (v.currentTime / v.duration) * 100;
    setProgress(percent);
  };

  /* SEEK */

  const seek = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = percent * videoRef.current.duration;
  };

  /* VOLUME */

  const changeVolume = (e) => {
    const v = parseFloat(e.target.value);
    videoRef.current.volume = v;
    setVolume(v);
    setMuted(v === 0);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    v.muted = !muted;
    setMuted(!muted);
  };

  /* FULLSCREEN */

  const fullscreen = () => {
    videoRef.current.requestFullscreen();
  };

  /* SKIP ANIMATION */

  const showSkip = (dir) => {
    setSkipDir(dir);

    setTimeout(() => {
      setSkipDir(null);
    }, 600);
  };

  /* KEYBOARD SHORTCUTS */

  useEffect(() => {
    const handleKey = (e) => {
      const v = videoRef.current;

      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }

      if (e.code === "ArrowRight") {
        v.currentTime += 5;
        showSkip("right");
      }

      if (e.code === "ArrowLeft") {
        v.currentTime -= 5;
        showSkip("left");
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  /* AUTO HIDE CONTROLS */

  const resetControlsTimer = () => {
    setShowControls(true);

    clearTimeout(hideTimer);

    hideTimer = setTimeout(() => {
      setShowControls(false);
    }, 5000);
  };

  useEffect(() => {
    const v = videoRef.current;
    v.addEventListener("timeupdate", updateProgress);

    return () => v.removeEventListener("timeupdate", updateProgress);
  }, []);

  return (
    <section className="py-16 bg-forest">
      <div className="container-site">
        {/* TITLE */}
        <div className="text-center mb-12">
          <span className="section-label text-brand-300 block mb-3">
            Project Showcase
          </span>

          <h2 className="section-heading text-white">
            Redwood Retreat & Estates
          </h2>

          <p className="text-white/70 mt-3">
            Mega Farmland Project at Kamalapur, Kalaburagi, Karnataka
          </p>
        </div>

        {/* VIDEO FRAME */}

        <div
          className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10"
          onMouseMove={resetControlsTimer}
        >
          <video
            ref={videoRef}
            src={src}
            className="w-full"
            onClick={togglePlay}
          />

          {/* CENTER PLAY BUTTON */}

          {!playing && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/30 rounded-full p-10 shadow-lg opacity-60 hover:opacity-100 hover:scale-110 transition">
  <Play className="text-white w-12 h-12" />
</div>
            </button>
          )}

          {/* SKIP LEFT */}

          {skipDir === "left" && (
            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white animate-ping">
              <RotateCcw size={48} />
            </div>
          )}

          {/* SKIP RIGHT */}

          {skipDir === "right" && (
            <div className="absolute right-10 top-1/2 -translate-y-1/2 text-white animate-ping">
              <RotateCw size={48} />
            </div>
          )}
        </div>

        <div className="mt-1">
          {/* TIMELINE BAR */}
          <div
            ref={progressRef}
            onClick={seek}
            className="relative h-[6px] hover:h-[12px] transition-all duration-300 bg-white/20 rounded-full cursor-pointer"
          >
            {/* PROGRESS */}
            <div
              style={{ width: `${progress}%` }}
              className="h-full rounded-full bg-gradient-to-r from-green-900 via-green-400 to-amber-400 transition-all"
            />

            {/* GOLD COMET TRAIL */}
            <div
              style={{ left: `${progress}%` }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
            >
              {/* MAIN KNOB */}
              <div className="w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_18px_6px_rgba(251,191,36,0.9)] hover:shadow-[0_0_30px_10px_rgba(251,191,36,1)] transition" />

              {/* PARTICLE TRAIL
      <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex gap-[3px]">
        <span className="w-1 h-1 bg-amber-300 rounded-full opacity-70 animate-pulse"/>
        <span className="w-1 h-1 bg-amber-200 rounded-full opacity-50 animate-pulse delay-75"/>
        <span className="w-1 h-1 bg-amber-100 rounded-full opacity-30 animate-pulse delay-150"/>
      </div> */}
            </div>
          </div>

          {/* TIME DISPLAY */}
          <div className="flex justify-between text-xs text-white/70 mt-1">
            <span>{formatTime(currentTime)}</span>

            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* CONTROLS */}

        <div
          className={`flex items-center justify-between mt-4 text-white transition-opacity duration-500 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* PLAY */}

          <button onClick={togglePlay}>
            {playing ? <Pause size={26} /> : <Play size={26} />}
          </button>

          {/* VOLUME */}

          <div className="flex items-center gap-2">
            <button onClick={toggleMute}>
              {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={changeVolume}
              className="w-28 accent-green-500"
            />
          </div>

          {/* FULLSCREEN */}

          <button onClick={fullscreen}>
            <Maximize size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
