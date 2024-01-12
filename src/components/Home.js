// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward, faVolumeUp, faVolumeDown, faHeart, faRandom, faRedo, faSync as faSyncSolid } from '@fortawesome/free-solid-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';


import './Home.css';

const lyricsArray = [
 "It's you, it's always you",
 "If I'm ever gonna fall in love, I know it's gon' be you",
 "It's you, it's always you ",
 "Met a lot of people, but nobody feels like you ",
 "So please don't break my heart, don't tear me apart ",
 "I know how it starts, trust me, I've been broken before ",
 "Don't break me again, I am delicate ",
 "Please don't break my heart, trust me, I've been broken before ",
 "I've been broken, yeah, I know how it feels ",
 "To be open and then find out your love isn't real ",
 "I'm still hurting, yeah, I'm hurting inside ",
 "I'm so scared to fall in love, but if it's you, then I'll try ",
 "It's you, it's always you ",
 "If I'm ever gonna fall in love, I know it's gon' be you ",
 "It's you, it's always you ",
 "Met a lot of people, but nobody feels like you ",
 "So please don't break my heart, don't tear me apart ",
 "I know how it starts, trust me, I've been broken before ",
 "Please don't break my heart, trust me, I've been broken before ",
 "I know I'm not the best at choosing lovers (oh) ",
 "We both know my past speaks for itself (for itself) ",
 "If you don't think that we're right for each other (baby, no) ",
 "Then please don't let history repeat itself ",
 "'Cause I want you, yeah, I want you, yeah ",
 "There's nothing else I want ",
 "'Cause I want you, yeah, I want you, yeah ",
"And you're the only thing I want ",
"It's you, it's always you ",
"If I'm ever gonna fall in love, I know it's gon' be you ",
"It's you, it's always you ",
"Met a lot of people, but nobody feels like you ",
"So please don't break my heart, don't tear me apart ",
"I know how it starts, trust me, I've been broken before ",
"Don't break me again, I am delicate ",
"Please don't break my heart, trust me, I've been broken before ",
"Baby, I want you, baby, I want you ",
"Baby, I want you, baby, I want you ",
"Baby, I want you, baby, I want you ",
"You, you, 'cause I want you ",
"Baby, I want you, baby, I want you ",
"Baby, I want you, baby, I want you ",
"Baby, I want you, baby, I want you ",
"You, you ",
];
const Home = () => {
  const [showLyrics, setShowLyrics] = useState(false);
  const [visibleLines, setVisibleLines] = useState([lyricsArray[0], lyricsArray[1]]);
  const [audio] = useState(new Audio('/images/ali.mp3'));
  let lyricsTimer;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLyrics(true);
      startLyricsTimer();
      audio.muted = true;
      audio.play().catch((error) => console.error('Audio play error:', error));
    }, 3000);

    return () => {
      clearTimeout(timeout);
      if (lyricsTimer) clearInterval(lyricsTimer);
      audio.pause();
      audio.muted = false;
    };
  }, [audio]);

  const startLyricsTimer = () => {
    lyricsTimer = setInterval(() => {
      updateVisibleLines();
    }, 5000);
  };

  const updateVisibleLines = () => {
    const audioProgress = audio.currentTime;
    const lineIndex = Math.floor(audioProgress / 10);

    if (lineIndex < lyricsArray.length - 1) {
      setVisibleLines([lyricsArray[lineIndex], lyricsArray[lineIndex + 1]]);
    } else {
      setVisibleLines([lyricsArray[0], lyricsArray[1]]);
      audio.currentTime = 0;
    }
  };

  return (
    <div className="home-page" style={{ backgroundImage: "url('/images/dol.jpg')" }}>
      <section className="content-section">
        {/* Content section */}
      </section>

      <section className="lyrics-section">
        {showLyrics && (
          <div className="lyrics">
            <h3>It's You </h3>
            {visibleLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            <div className="music-player">
              <div className="playlist-image">
                <img src="/images/50/YAD_5703.jpg" alt="Playlist" />
              </div>
              <div className="controls">
                <FontAwesomeIcon icon={faRandom} className="icon" />
                <FontAwesomeIcon icon={faStepBackward} className="icon" />
                <FontAwesomeIcon icon={faPlay} className="icon play" />
                <FontAwesomeIcon icon={faPause} className="icon pause" />
                <FontAwesomeIcon icon={faStepForward} className="icon" />
                <FontAwesomeIcon icon={faRedo} className="icon" />
                <FontAwesomeIcon icon={faSync} className="icon" title="Repeat" />
                
                <FontAwesomeIcon icon={faSyncSolid} className="icon" title="Repeat" />
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar"></div>
              </div>
              <div className="time-display">
                <span className="current-time">02:30-</span>
                <span className="total-time">-04:40</span>
              </div>
              <div className="volume-controls">
                <FontAwesomeIcon icon={faVolumeDown} className="icon" />
                <div className="volume-slider"></div>
                <FontAwesomeIcon icon={faVolumeUp} className="icon" />
              </div>
              <div className="extra-features">
                <FontAwesomeIcon icon={faHeart} className="icon heart" />
                {/* Add more features/icons as needed */}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;