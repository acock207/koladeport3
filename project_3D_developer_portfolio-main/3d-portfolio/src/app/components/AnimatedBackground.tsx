'use client';

import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Responsive canvas sizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Particle class
    class Particle {
      x: number;
      y: number;
      dirX: number;
      dirY: number;
      size: number;
      color: string;
      speed: number;

      constructor() {
        const width = canvas ? canvas.width : window.innerWidth;
        const height = canvas ? canvas.height : window.innerHeight;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.dirX = (Math.random() - 0.5) * 2;
        this.dirY = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 2 + 0.5;
        this.color = `rgba(${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 255)}, 0.7)`;
        this.speed = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.dirX * this.speed;
        this.y += this.dirY * this.speed;

        // Bounce off edges
        if (canvas && (this.x < 0 || this.x > canvas.width)) this.dirX *= -1;
        if (canvas && (this.y < 0 || this.y > canvas.height)) this.dirY *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize particles based on screen size
    const initParticles = () => {
      // Reduce particle count on mobile for better performance
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 
        Math.min(Math.floor((canvas?.width || 0) * (canvas?.height || 0) / 50000), 25) : 
        Math.min(Math.floor((canvas?.width || 0) * (canvas?.height || 0) / 15000), 80);
      
      particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Connect particles with lines if they're close enough
    const connectParticles = () => {
      const maxDistance = (canvas?.width || 0) > 768 ? 100 : 60;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.8 - distance / maxDistance})`;
            ctx.lineWidth = 0.3;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`}
      style={{ 
        background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
        pointerEvents: 'none' // This ensures the canvas doesn't capture touch events
      }}
    />
  );
};

export default AnimatedBackground;