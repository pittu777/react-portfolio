import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Sketch = ({ text }) => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let vehicles = [];
      let font;

      p.preload = () => {
        font = p.loadFont('/fonts/AvenirNextLTPro-Demi.otf')
      };

      p.setup = () => {
        p.createCanvas(600, 150).parent(sketchRef.current);

        // Generate text points
        let points = font.textToPoints(text, 50, 100, 80, { sampleFactor: 0.2 });

        // Create vehicles for each point
        vehicles = points.map((pt) => new Vehicle(p, pt.x, pt.y));
      };

      p.draw = () => {
        p.background(51);
        vehicles.forEach((vehicle) => {
          vehicle.behaviors();
          vehicle.update();
          vehicle.show();
        });
      };

      // Vehicle Class
      class Vehicle {
        constructor(p, x, y) {
          this.p = p;
          this.pos = p.createVector(p.random(p.width), p.random(p.height));
          this.target = p.createVector(x, y);
          this.vel = p5.Vector.random2D();
          this.acc = p.createVector();
          this.r = 8;
          this.maxspeed = 10;
          this.maxforce = 1;
        }

        behaviors() {
          let arrive = this.arrive(this.target);
          let mouse = this.p.createVector(this.p.mouseX, this.p.mouseY);
          let flee = this.flee(mouse);

          arrive.mult(1);
          flee.mult(5);

          this.applyForce(arrive);
          this.applyForce(flee);
        }

        applyForce(f) {
          this.acc.add(f);
        }

        update() {
          this.pos.add(this.vel);
          this.vel.add(this.acc);
          this.acc.mult(0);
        }

        show() {
          this.p.stroke(255);
          this.p.strokeWeight(this.r);
          this.p.point(this.pos.x, this.pos.y);
        }

        arrive(target) {
          let desired = p5.Vector.sub(target, this.pos);
          let d = desired.mag();
          let speed = this.maxspeed;
          if (d < 100) {
            speed = p.map(d, 0, 100, 0, this.maxspeed);
          }
          desired.setMag(speed);
          let steer = p5.Vector.sub(desired, this.vel);
          steer.limit(this.maxforce);
          return steer;
        }

        flee(target) {
          let desired = p5.Vector.sub(target, this.pos);
          let d = desired.mag();
          if (d < 50) {
            desired.setMag(this.maxspeed);
            desired.mult(-1);
            let steer = p5.Vector.sub(desired, this.vel);
            steer.limit(this.maxforce);
            return steer;
          } else {
            return this.p.createVector(0, 0);
          }
        }
      }
    };

    const canvas = new p5(sketch);

    // Cleanup on unmount
    return () => {
      canvas.remove();
    };
  }, [text]);

  return <div ref={sketchRef}></div>;
};

export default P5Sketch;
