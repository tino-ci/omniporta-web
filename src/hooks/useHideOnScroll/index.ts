"use client";
import { useEffect, useRef, useState } from "react";

interface UseAutoHideHeaderOptions {
    triggerOffset?: number;  // 超过这个高度才触发隐藏
    restoreDelay?: number;   // 滚动停止多少毫秒后恢复显示
    enableOnMobileOnly?: boolean; // 仅在移动设备上启用
  }

  
export const useHideOnScroll = ({
    triggerOffset = 100,
    restoreDelay = 300,
    enableOnMobileOnly = false,
}: UseAutoHideHeaderOptions = {}) => {
  const [visible, setVisible] = useState(true);
  const [faded, setFaded] = useState(false); // 新增
  const lastScrollY = useRef(0);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (enableOnMobileOnly) {
            return; // PC 不啟用
     }
    const handleScroll = () => {
      const currentY = window.scrollY;
      
      if (currentY < triggerOffset) {
          setVisible(true); // 滚动太少，不隐藏
          setFaded(false); // 初始化不淡化
        return;
      }
      if (currentY > lastScrollY.current) {
          setVisible(false); // 向下滚动：隐藏
          setFaded(false); // 滑动中不淡化
      } else {
          setVisible(true); // 向上滚动：立刻显示
          setFaded(false); // 滑动中不淡化
      }

      // 重置计时器，等待用户停止滚动
      if (timeoutId.current) clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
          setVisible(true); // 滚动停止后显示
          setFaded(true); 
      }, restoreDelay);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

    return {
        visible,
        faded
  };
};
