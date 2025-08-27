// stars.js - 鼠标移动彩色星星特效
(function() {
  let stars = [];
  
  // 创建星星元素
  function createStar(x, y) {
    const star = document.createElement('span');
    star.innerHTML = '*';
    star.style.position = 'fixed';
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.color = getRandomColor();
    star.style.fontSize = Math.random() * 20 + 10 + 'px';
    star.style.pointerEvents = 'none';
    star.style.zIndex = '9999';
    star.style.transition = 'opacity 2s ease-out, transform 2s ease-out';
    star.style.userSelect = 'none';
    
    // 添加到页面
    document.body.appendChild(star);
    
    // 动画效果
    setTimeout(() => {
      star.style.opacity = '0';
      star.style.transform = 'translateY(-50px) scale(0.5)';
    }, 50);
    
    // 2秒后移除元素
    setTimeout(() => {
      if (star.parentNode) {
        star.parentNode.removeChild(star);
      }
    }, 2000);
    
    return star;
  }
  
  // 随机颜色
  function getRandomColor() {
    const colors = [
      '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', 
      '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd',
      '#00d2d3', '#ff9f43', '#10ac84', '#ee5a6f'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  // 鼠标移动事件
  function handleMouseMove(e) {
    // 限制星星生成频率
    if (Math.random() > 0.7) {
      createStar(e.clientX, e.clientY);
    }
  }
  
  // 触摸事件（移动端）
  function handleTouchMove(e) {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      if (Math.random() > 0.8) {
        createStar(touch.clientX, touch.clientY);
      }
    }
  }
  
  // 页面加载完成后绑定事件
  document.addEventListener('DOMContentLoaded', function() {
    // PC端鼠标事件
    document.addEventListener('mousemove', handleMouseMove);
    
    // 移动端触摸事件
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
  });
  
  // 如果页面已经加载完成，直接绑定事件
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
  }
})();
