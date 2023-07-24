import { useEffect } from 'react';

const Error = () => {
  useEffect(() => {
    const alertAudio = new Audio('/red_alert.wav');

    const playAudio = async () => {
      try {
        await alertAudio.play();
      } catch (err) {
        // Error occurred during audio playback, handle it here if needed
        console.error('Error playing alert audio:', err);
      }
    };

    playAudio();

    return () => {
      // Clean up the audio on unmount
      alertAudio.pause();
      alertAudio.currentTime = 0;
    };
  }, []);

  return (
    <div className="w-full h-screen absolute top-0 left-0 z-50 object-cover">
      <img
        className="w-full h-full"
        src="https://static.vecteezy.com/system/resources/thumbnails/019/591/373/original/the-effect-of-a-film-with-scratches-on-a-black-background-free-video.jpg"
        alt=""
      />
      <audio src="/red_alert.wav"></audio>

      <div className="absolute top-[50%] left-[40%] text-red-500 font-semibold animate-pulse">
        <h2 className='text-2xl md:text-5xl uppercase '>
          Access Denied⚠️
        </h2>
        <p className='mt-5'>The page you looking for is not available</p>
      </div>
    </div>
  );
};

export default Error;
