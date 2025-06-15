import { RefObject, useEffect, useRef, useState } from "react";

function useClickOutside(ref: RefObject<HTMLElement>, callback: () => void) {
  const firstRenderRef = useRef(true);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      firstRenderRef.current = false;
      setFirstRender(false);
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
  }, [ref, callback, firstRender]);
}

export default useClickOutside;
