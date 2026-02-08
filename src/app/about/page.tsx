'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Award, Users, Clock, MapPin, Phone, Mail, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://img.freepik.com/premium-photo/krishna-janmashtami-decoration-bamboo-flute-with-peacock-feather-representing-lord-krishna_1257902-3182.jpg" 
              alt="Lord Krishna with Bamboo Flute and Peacock Feather - Banke Bihari Creations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          {/* Modern geometric patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
                <span className="text-white text-sm font-medium">🕉️ Our Spiritual Journey</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Banke Bihari Creations</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Bringing divine traditions to your home with authentic craftsmanship and devotion
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-20 text-white" viewBox="0 0 1440 120" fill="none">
              <path d="M0,120 L1440,120 L1440,0 C1200,40 960,40 720,0 C480,40 240,40 0,0 Z" fill="currentColor"/>
            </svg>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Banke Bihari Creations is a humble effort dedicated to devotion, faith, and purity in worship. 
                    Rooted in our deep belief in Shri Banke Bihari Ji, Radha Rani, and Sanatan Dharma, 
                    our shop was started with the intention of providing authentic and sacred pooja items to devotees.
                  </p>
                  <p>
                    We offer a wide range of Laddu Gopal and Radha Rani murtis, along with beautiful vastra, poshak, 
                    and jewelry crafted with care and devotion. Alongside this, we provide marble dust murtis of all deities, 
                    premium dhoop and agarbatti, Vastu items, and complete pooja–path samagri required for daily worship and special rituals.
                  </p>
                  <p>
                    Every product at Banke Bihari Creations is chosen with the belief that items used in worship should carry 
                    shuddhta (purity), shraddha (faith), and positivity. We strive to maintain quality, authenticity, 
                    and respect for tradition in everything we offer.
                  </p>
                  <p>
                    Our aim is not just to sell products, but to become a trusted companion in your spiritual journey. 
                    Whether it is daily pooja at home, festival celebrations, or gifting sacred items to loved ones, 
                    we are honored to serve devotees with sincerity and devotion.
                  </p>
                  <p>
                    With the blessings of Shri Banke Bihari Ji, we continue our journey of spreading faith, devotion, 
                    and divine energy through our work.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">5000+</h3>
                    <p className="text-gray-600">Happy Customers</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">20+</h3>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">100+</h3>
                    <p className="text-gray-600">Product Varieties</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">100%</h3>
                    <p className="text-gray-600">Authentic Items</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Devotion & Purity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every product is created and selected with deep spiritual significance and purity of intention
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Authentic Craftsmanship</h3>
                <p className="text-gray-600 leading-relaxed">
                  We partner with skilled artisans who preserve traditional techniques and spiritual authenticity
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Customer Trust</h3>
                <p className="text-gray-600 leading-relaxed">
                  Building lasting relationships through transparency, quality, and exceptional service
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-16">Visit Our Store</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
                    <span className="text-white text-sm font-medium">📍 Mohali Location</span>
                  </div>
                  <p className="text-purple-100 mb-8 text-lg leading-relaxed">
                    Experience our collection firsthand in our modern Mohali showroom. 
                    Our knowledgeable staff will help you find the perfect items for your spiritual needs.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg mb-2">Our Location</p>
                        <p className="text-purple-100">
                          Shop No. 238, Phase 7<br />
                          Sector 61, Sahibzada Ajit Singh Nagar<br />
                          Punjab - 160062
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg mb-2">Store Hours</p>
                        <p className="text-purple-100">
                          Monday - Saturday: 9:00 AM - 8:00 PM<br />
                          Sunday: 10:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg mb-2">Phone</p>
                        <p className="text-purple-100">+91 98765 43210</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg mb-2">Email</p>
                        <p className="text-purple-100">info@bankebiharicreations.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6">Our Promise</h3>
                  <ul className="space-y-4 text-purple-100">
                    <li className="flex items-start space-x-3">
                      <span className="text-purple-300 text-xl">✓</span>
                      <span>100% authentic and genuine products</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-purple-300 text-xl">✓</span>
                      <span>Traditional crafting methods</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-purple-300 text-xl">✓</span>
                      <span>Ethical sourcing practices</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-purple-300 text-xl">✓</span>
                      <span>Expert guidance and support</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-purple-300 text-xl">✓</span>
                      <span>Spiritual significance in every item</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
