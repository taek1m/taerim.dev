import React, { useRef, useState, useEffect } from "react";

function MusicPlayer({ isPlaying, setIsPlaying }) {
  const audioRef1 = useRef(new Audio("/debussy.mp3"));
  const audioRef2 = useRef(new Audio("/sakamoto.mp3"));
  const [currentTrack, setCurrentTrack] = useState(1);

  useEffect(() => {
    const audio1 = audioRef1.current;
    const audio2 = audioRef2.current;

    const handleAudio1Ended = () => {
      setCurrentTrack(2);
      audio2.play();
    };

    const handleAudio2Ended = () => {
      setCurrentTrack(1);
      audio1.play();
    };

    audio1.onended = handleAudio1Ended;
    audio2.onended = handleAudio2Ended;

    if (isPlaying) {
      currentTrack === 1 ? audio1.play() : audio2.play();
    } else {
      audio1.pause();
      audio2.pause();
    }

    return () => {
      audio1.onended = null;
      audio2.onended = null;
    };
  }, [isPlaying, currentTrack]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef1.current.pause();
      audioRef2.current.pause();
    } else {
      currentTrack === 1 ? audioRef1.current.play() : audioRef2.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button onClick={togglePlay} style={{ display: "none" }}></button>
  );
}

export default MusicPlayer;