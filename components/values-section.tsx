"use client"

import { Heart, Shield, Users, Scale, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We lead with empathy and understanding, meeting you where you are with genuine care and kindness.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Your confidence in us is sacred. We create a safe, confidential space for your healing journey.",
  },
  {
    icon: Users,
    title: "Empathy",
    description: "We truly listen and understand your struggles, walking alongside you with heartfelt support.",
  },
  {
    icon: Scale,
    title: "Non-Judgment",
    description: "No matter where you are or what you're facing, you'll find acceptance and grace here.",
  },
  {
    icon: Star,
    title: "Quality Care",
    description: "Excellence in service delivery combined with Christian values guides everything we do.",
  },
]

export default function ValuesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="values" className="py-20 md:py-32 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Core Values</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide our mission to provide exceptional, faith-based mental health care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
