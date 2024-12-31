'use client'

import { useEffect, useRef } from 'react'

export default function EnhancedFireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return // Safeguard for TypeScript null check

    const ctx = canvas.getContext('2d')
    if (!ctx) return // Safeguard for null 2D context

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
      x: number
      y: number
      color: string
      velocity: { x: number; y: number }
      alpha: number
      lifetime: number

      constructor(x: number, y: number, color: string) {
        this.x = x
        this.y = y
        this.color = color
        this.velocity = {
          x: (Math.random() - 0.5) * 8,
          y: (Math.random() - 0.5) * 8,
        }
        this.alpha = 1
        this.lifetime = Math.random() * 50 + 50
      }

      draw() {
        if (!ctx) return // Safeguard to ensure ctx is valid
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
      }

      update() {
        this.x += this.velocity.x
        this.y += this.velocity.y
        this.alpha -= 0.01
        this.lifetime--
      }
    }

    const particles: Particle[] = []
    const colors = ['#ff0', '#f0f', '#0ff', '#ff4', '#4ff']

    function createFirework(x: number, y: number) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle(x, y, color))
      }
    }

    function animate() {
      if (!canvas || !ctx) return // Safeguard to ensure canvas and ctx are valid
      requestAnimationFrame(animate)

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]
        particle.draw()
        particle.update()

        if (particle.alpha <= 0 || particle.lifetime <= 0) {
          particles.splice(i, 1)
        }
      }

      if (Math.random() < 0.05) {
        createFirework(Math.random() * canvas.width, Math.random() * canvas.height * 0.5)
      }
    }

    animate()

    const handleResize = () => {
      if (!canvas) return // Safeguard to ensure canvas is not null on resize
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}
