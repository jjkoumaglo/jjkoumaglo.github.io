
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
    constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;

    // Create a div element for the ball
    this.element = document.createElement('div');
    this.element.className = 'ball';
    this.element.textContent = random(0, 9); // Assign a random number to the ball
    this.element.style.position = 'absolute';
    this.element.style.width = `${size}px`;
    this.element.style.height = `${size}px`;
    this.element.style.backgroundColor = color;
    this.element.style.borderRadius = '50%';
    document.body.appendChild(this.element);
}

      update() {
        if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
          this.velX = -(this.velX);
        }

        if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
          this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;

        // Update the position of the ball element
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
      }

      collisionDetect() {
        for (const ball of balls) {
          if (this !== ball) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + ball.size) {
              ball.color = this.color = randomRGB();
            }
          }
        }
      }
    }

    const balls = [];
    while (balls.length < 25) {
      const size = random(40, 60);
      const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-2, 4),
        random(2, 4),
        randomRGB(),
        size,
      );
      balls.push(ball);
    }

    function loop() {
      ctx.fillStyle = "rgba(0,0,0,0.25)";
      ctx.fillRect(0, 0, width, height);

      for (const ball of balls) {
        ball.update();
        ball.collisionDetect();
      }

      requestAnimationFrame(loop);
    }
    loop();

    document.addEventListener("DOMContentLoaded", function () {
        const display = document.getElementById("display");
      
        balls.forEach(ball => {
          ball.element.addEventListener("click", function () {
            const number = this.textContent; // Access the text content of the ball's element
            display.value += number;
          });
        });
      });
      

    // Add an event listener to the delete button
    document.getElementById("deleteButton").addEventListener("click", function () {
      display.value = ""; // Clear the input field
    });

    // Add a submit button
  document.getElementById('submitButton').addEventListener('click', function() {
  alert('Sick you did it! ' + document.getElementById('display').value);
});


