'use client'

import { useEffect, useRef } from 'react'

export function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
      alpha: number

      constructor(x: number, y: number, color: string) {
        this.x = x
        this.y = y
        this.radius = Math.random() * 2 + 1
        this.color = color
        this.velocity = {
          x: Math.random() * 3 - 1.5,
          y: Math.random() * 3 - 1.5,
        }
        this.alpha = 1
      }

      draw() {
        if (!ctx) return // Safeguard for TypeScript null check
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
      }

      update() {
        this.x += this.velocity.x
        this.y += this.velocity.y
        this.alpha -= 0.01
        this.draw()
      }
    }

    let particles: Particle[] = []

    function createFirework(x: number, y: number) {
      const color = `hsl(${Math.random() * 360}, 50%, 50%)`
      for (let i = 0; i < 30; i++) {
        particles.push(new Particle(x, y, color))
      }
    }

    function animate() {
      if (!canvas || !ctx) return // Safeguard against null values
      requestAnimationFrame(animate)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles = particles.filter((particle) => particle.alpha > 0)
      particles.forEach((particle) => particle.update())

      if (Math.random() < 0.02) {
        createFirework(Math.random() * canvas.width, Math.random() * canvas.height)
      }
    }

    animate()

    const handleResize = () => {
      if (!canvas) return // Safeguard to ensure canvas is not null
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}
