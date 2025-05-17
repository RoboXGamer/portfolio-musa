import { useEffect, useState } from 'react';

export default function SlidingImage() {
  const [showImage, setShowImage] = useState(false);
  const [imageState, setImageState] = useState('hidden');

  // Show/hide based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Only change state if not already clicked
      if (window.scrollY > 200 && imageState !== 'clicked') {
        setShowImage(true);
        setImageState('default');
      } else if (window.scrollY <= 200) {
        setShowImage(false);
        setImageState('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [imageState]);

  // Handle image 3 display and reset
  useEffect(() => {
    let timeout;
    if (imageState === 'clicked') {
      timeout = setTimeout(() => {
        setImageState('hidden');
        setShowImage(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [imageState]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Small delay to ensure scroll completes before showing image 3
    setTimeout(() => {
      setImageState('clicked');
    }, 1500);
  };

  return (
    <div
      className={`fixed w-36 h-50 transition-all duration-700 ease-out z-0 ${
        showImage ? 'right-0 -bottom-1' : '-right-52 bottom-0'
      }`}
    >
      {/* Image 1 — visible by default */}
      <img
        src="/images/1.png"
        alt="Layer 1"
        className={`absolute inset-0 object-cover h-full w-full z-30 transition-opacity duration-300 ${
          imageState === 'default' ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseEnter={() => imageState !== 'clicked' && setImageState('hover')}
        onClick={handleClick}
      />

      {/* Image 2 — visible on hover */}
      <img
        src="/images/2.png"
        alt="Layer 2"
        className={`absolute inset-0 object-cover h-full w-full z-20 transition-opacity duration-200 ${
          imageState === 'hover' ? 'opacity-100' : 'opacity-0'
        }`}
        onMouseLeave={() => imageState !== 'clicked' && setImageState('default')}
        onClick={handleClick}
      />

      {/* Image 3 — visible on click */}
      {/* <img
        src="/images/3.png"
        alt="Layer 3"
        className={`absolute inset-0 object-cover h-full w-full z-10 transition-opacity duration-300 ${
          imageState === 'clicked' ? 'opacity-100' : 'opacity-0'
        }` }
      /> */}
    </div>
  );
}