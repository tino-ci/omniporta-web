import { useEffect } from 'react';

export default function useWow(options = {}) {
  useEffect(() => {
    import('wowjs').then(({ WOW }) => {
      new WOW({
        boxClass: 'wow', // 需要执行动画的元素的 class
        animateClass: 'animated', // animate.css 动画的 class
        offset: 100, // 距离可视区域多少开始执行动画
        mobile: true, // 是否在移动设备上执行动画
        live: true, // 异步加载的内容是否有效
        ...options, // 支持自定义参数
      }).init();
    });
  }, []);
}
