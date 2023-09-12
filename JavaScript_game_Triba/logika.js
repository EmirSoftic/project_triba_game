function drawCircles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (circle of circles) {
          ctx.beginPath();
          ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
          ctx.fillStyle = circle.color;
          ctx.fill();
        }
        for (trougao of trouglovi) {
          ctx.strokeStyle = trougao.color;
          ctx.beginPath();
          ctx.moveTo(trougao.x1, trougao.y1);
          ctx.lineTo(trougao.x2, trougao.y2);
          ctx.lineTo(trougao.x3, trougao.y3);
          ctx.closePath();
          ctx.stroke();
        }
      }
      export {drawCircles};