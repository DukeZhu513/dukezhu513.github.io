// source/js/stars.js
(function () {
  const stars = [];
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // 设置 canvas 样式
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  canvas.style.opacity = '0.7';
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  // 创建星星
  for (let i = 0; i < 80; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.3,
      color: `hsl(${Math.random() * 60 + 200}, 70%, 80%)` // 蓝紫色调
    });
  }

  // 鼠标位置
  let mouseX = canvas.width / 2;
  let mouseY = canvas.height / 2;

  // 鼠标移动事件
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // 在鼠标位置附近添加新的星星
    if (Math.random() < 0.3) {
      stars.push({
        x: mouseX + (Math.random() - 0.5) * 20,
        y: mouseY + (Math.random() - 0.5) * 20,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.8 + 0.2,
        opacity: 0.8,
        color: `hsl(${Math.random() * 60 + 200}, 70%, 80%)`
      });
    }
  });

  // 窗口大小改变时重新设置 canvas
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // 动画循环
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'lighter';

    // 更新星星位置
    for (let i = stars.length - 1; i >= 0; i--) {
      const star = stars[i];
      
      // 星星向鼠标位置移动（轻微吸引效果）
      const dx = mouseX - star.x;
      const dy = mouseY - star.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        star.x += dx * 0.02;
        star.y += dy * 0.02;
      }
      
      // 星星逐渐淡出
      star.opacity -= 0.008;
      
      // 移除完全透明的星星
      if (star.opacity <= 0) {
        stars.splice(i, 1);
        continue;
      }
      
      // 绘制星星
      ctx.save();
      ctx.globalAlpha = star.opacity;
      ctx.fillStyle = star.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = star.color;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(animate);
  }

  // 页面加载完成后开始动画
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animate);
  } else {
    animate();
  }
})();
