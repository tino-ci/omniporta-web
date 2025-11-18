import { useEffect, useState } from "react";

export const useHeaderColorBasedOnSections = (targetIds: string[]) => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const elements = targetIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some(entry => entry.isIntersecting);
        setIsLight(anyVisible);
      },
      {
          threshold: 0.3, // 控制可视比例
             rootMargin: "-64px 0px 0px 0px" // 避免被 sticky header 遮住
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [targetIds]);

  return isLight;
};
