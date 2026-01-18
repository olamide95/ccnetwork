"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import Navbar from "@/components/navbar"
import HeroCarousel from "@/components/hero-carousel"
import ValuesSection from "@/components/values-section"
import ContactForm from "@/components/contact-form"
import { Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-white">
        <section id="hero" className="pt-20">
          <HeroCarousel />
        </section>

        <section id="about" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Our Mission</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-8"></div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  We are an institution with the core values of{" "}
                  <span className="font-semibold text-teal-700">Compassion, Trust, Empathy, Rapport Building,</span> and{" "}
                  <span className="font-semibold text-teal-700">Quality Service Delivery</span> in the Mental Health
                  Industry.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Our target clients are{" "}
                  <span className="font-semibold text-teal-700">Christians of various denominations</span> suffering from
                  mental health challenges. We understand the unique intersection of faith and mental wellness.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Our mission is to bring about a{" "}
                  <span className="font-semibold text-teal-700">
                    positive change in attitudes toward mental health among Christians
                  </span>
                  , reminding everyone that no one is immune and seeking help is an{" "}
                  <span className="font-semibold text-teal-700">act of faith—not weakness</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ValuesSection />

        <section
          id="welcome"
          className="py-20 md:py-32 bg-gradient-to-b from-teal-600 to-teal-700 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="w-16 h-16 mx-auto mb-8 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Come As You Are</h2>
              <div className="space-y-6 text-lg md:text-xl">
                <p className="leading-relaxed">
                  At Christ Compassion Network Int'l, we embrace you with open arms, exactly as you are.
                </p>
                <p className="leading-relaxed font-semibold text-teal-100">No judgment. No discrimination.</p>
                <div className="grid md:grid-cols-2 gap-6 my-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                    <p className="text-xl font-semibold">All Denominations Welcome</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                    <p className="text-xl font-semibold">Every Race & Ethnicity</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                    <p className="text-xl font-semibold">All Gender Identities</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                    <p className="text-xl font-semibold">Every Sexual Orientation</p>
                  </div>
                </div>
                <p className="leading-relaxed text-2xl font-semibold text-white mt-8">
                  We walk with you toward wellness and good health.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="therapist" className="py-20 md:py-32 bg-gradient-to-b from-white to-teal-50">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Meet Your Therapist</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-2 bg-gradient-to-br from-teal-500 to-teal-600 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-56 h-56 rounded-full mb-6 mx-auto border-4 border-white shadow-2xl overflow-hidden bg-gray-100">
                        <img 
                          src="/picture.jpg" 
                          alt="Chukuma Emefiele - Professional Counsellor"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">Chukuma Emefiele</h3>
                      <p className="text-teal-100 text-lg font-medium">Professional Counsellor</p>
                      <div className="mt-4 pt-4 border-t border-white/30">
                        <p className="text-teal-50 text-sm">Faith-Based Mental Health Specialist</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3 p-8 md:p-12">
                    <div className="space-y-6 text-gray-700">
                      <p className="text-lg leading-relaxed">
                        A{" "}
                        <span className="font-semibold text-teal-700">
                          compassionate, caring, empathetic, and non-judgmental
                        </span>{" "}
                        qualified Counsellor whose passion is helping Christian brothers and sisters understand their
                        emotions as <span className="font-semibold text-teal-700">humans first—and believers second</span>
                        .
                      </p>
                      <p className="text-lg leading-relaxed">
                        Through a unique blend of{" "}
                        <span className="font-semibold text-teal-700">professional counselling training</span> combined
                        with{" "}
                        <span className="font-semibold text-teal-700">
                          faith in God and the teachings of Jesus Christ
                        </span>
                        , I guide clients toward:
                      </p>
                      <ul className="space-y-3 ml-6">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-lg">Healing from emotional wounds</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-lg">Building resilience in difficult times</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-lg">Achieving emotional wellness and peace</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Let's Start Your Journey</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Take that bold step of faith today. I am here to help you as a Christian brother or sister.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mt-6"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 md:p-12 text-white h-full">
                    <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
                    <p className="text-lg text-teal-50 mb-8 leading-relaxed">
                      Reach out for a free, no-obligation conversation. Your journey to wellness and peace begins with a
                      simple message.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Email</p>
                          <p className="text-teal-100">info@christcompassion.org</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Phone</p>
                          <p className="text-teal-100">Available upon request</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Location</p>
                          <p className="text-teal-100">Serving Christians worldwide</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20">
                      <p className="text-lg font-semibold mb-2">Confidentiality Guaranteed</p>
                      <p className="text-teal-50">
                        Your privacy is sacred to us. All conversations are completely confidential.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-teal-400">Christ Compassion Network Int'l</h3>
                  <p className="text-gray-400 leading-relaxed">
                    A safe, faith-based space for mental health healing and wellness.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#values" className="text-gray-400 hover:text-teal-400 transition-colors">
                        Our Values
                      </a>
                    </li>
                    <li>
                      <a href="#therapist" className="text-gray-400 hover:text-teal-400 transition-colors">
                        Meet the Therapist
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Our Mission</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Bringing positive change to mental health attitudes in the Christian community through compassion and
                    professional care.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-8 text-center">
                <p className="text-gray-400">
                  &copy; {new Date().getFullYear()} Christ Compassion Network Int'l. All rights reserved.
                </p>
                <p className="text-gray-500 mt-2 italic">
                  &quot;For I know the plans I have for you,&quot; declares the Lord, &quot;plans to prosper you and not
                  to harm you, plans to give you hope and a future.&quot; - Jeremiah 29:11
                </p>
              </div>
            </div>
          </div>
        </footer>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full shadow-2xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 hover:scale-110 z-50 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>
        )}
      </div>
    </>
  )
}