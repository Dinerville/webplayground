
setInterval(() => {
  let cx = document.querySelector("canvas").getContext("2d");
  cx.clearRect(0, 0, cx.canvas.width, cx.canvas.height);
  cx.beginPath();
  cx.moveTo(Math.random() * 100, Math.random() * 100);
  cx.lineTo(Math.random() * 100, Math.random() * 100);
  cx.lineTo(Math.random() * 100, Math.random() * 100);
  cx.fill();
}, 1000);