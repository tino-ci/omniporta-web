
import { useCallback } from "react";

export const useSmoothScroll = () => {
  const scrollToId = useCallback((id: string, offset = 0) => {
      const el = document.getElementById(id);
      const navHeight = 72;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return scrollToId;
}
