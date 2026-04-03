"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  opacity: number
  color: string
  speed: number
  angle: number
  radius: number
  twinkleSpeed: number
  twinkleOffset: number
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 600
    let centerX: number
    let centerY: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      centerX = canvas.width / 2
      centerY = canvas.height * 0.6
    }

    const createParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2
        const maxRadius = Math.min(canvas.width, canvas.height) * 1.2
        const radius = Math.pow(Math.random(), 0.5) * maxRadius
        const isRed = Math.random() < 0.06
        const isCore = radius < maxRadius * 0.3
        
        particles.push({
          x: 0,
          y: 0,
          size: isCore ? Math.random() * 1.2 + 0.3 : Math.random() * 0.8 + 0.2,
          opacity: isCore ? 0.4 + Math.random() * 0.5 : 0.1 + Math.random() * 0.3,
          color: isRed 
            ? `rgb(${150 + Math.random() * 50}, ${60 + Math.random() * 40}, ${60 + Math.random() * 40})`
            : `rgb(${200 + Math.random() * 55}, ${200 + Math.random() * 55}, ${210 + Math.random() * 45})`,
          speed: 0.0001 + Math.random() * 0.0003,
          angle: angle,
          radius: radius,
          twinkleSpeed: 0.5 + Math.random() * 2,
          twinkleOffset: Math.random() * Math.PI * 2
        })
      }
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.008

      particles.forEach((particle) => {
        particle.angle += particle.speed
        
        const spiralOffset = particle.radius * 0.003
        const currentAngle = particle.angle + spiralOffset
        
        const x = centerX + Math.cos(currentAngle) * particle.radius
        const y = centerY + Math.sin(currentAngle) * particle.radius * 0.35
        
        const twinkle = 0.5 + 0.5 * Math.sin(time * particle.twinkleSpeed + particle.twinkleOffset)
        const currentOpacity = particle.opacity * (0.6 + twinkle * 0.4)
        
        ctx.beginPath()
        ctx.arc(x, y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace("rgb", "rgba").replace(")", `, ${currentOpacity})`)
        ctx.fill()

        if (particle.size > 0.8 && currentOpacity > 0.4) {
          ctx.beginPath()
          ctx.arc(x, y, particle.size * 2.5, 0, Math.PI * 2)
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, particle.size * 2.5)
          gradient.addColorStop(0, particle.color.replace("rgb", "rgba").replace(")", `, ${currentOpacity * 0.2})`))
          gradient.addColorStop(1, "transparent")
          ctx.fillStyle = gradient
          ctx.fill()
        }
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    resize()
    createParticles()
    
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    draw()

    const handleResize = () => {
      resize()
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
