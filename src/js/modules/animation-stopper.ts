/* 
  Prevents animation janks on window resize
*/

export default function (): void {
  const animationStopperClass = 'resize-animation-stopper';
  const delay = 400; // in ms

  let resizeTimer: number;

  window.addEventListener('resize', () => {
    document.body.classList.add(animationStopperClass);

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove(animationStopperClass);
    }, delay);
  });
}
