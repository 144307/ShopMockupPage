import { RefObject, useEffect, useRef } from "react";

function useClickOutside(ref: RefObject<HTMLElement>, callback: () => void) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef) {
      firstRenderRef.current = false;
      return;
    }

    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        callback();
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback]);
}

export default useClickOutside;
