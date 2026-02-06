'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { contactInfo } from '@/lib/data';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, User } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <Header />
      
      <main>
        <section className="relative h-[400px] bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-400 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-yellow-100">
                Get in touch with us for your spiritual needs and inquiries
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-20 text-orange-50" viewBox="0 0 1440 120" fill="none">
              <path d="M0,120 L1440,120 L1440,0 C1200,40 960,40 720,0 C480,40 240,40 0,0 Z" fill="currentColor"/>
            </svg>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="custom-order">Custom Order</option>
                      <option value="bulk-order">Bulk Order</option>
                      <option value="general">General Question</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                        <p className="text-gray-600">{contactInfo.phone}</p>
                        <p className="text-sm text-gray-500">Call us for immediate assistance</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                        <p className="text-gray-600">{contactInfo.email}</p>
                        <p className="text-sm text-gray-500">Send us your inquiries anytime</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                        <p className="text-gray-600 whitespace-pre-line">{contactInfo.address}</p>
                        <p className="text-sm text-gray-500">Visit our store in Vrindavan</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                        <p className="text-gray-600 whitespace-pre-line">{contactInfo.hours}</p>
                        <p className="text-sm text-gray-500">We're here to serve you</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-600 to-orange-500 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">Quick Response</h3>
                  <p className="text-yellow-100 mb-4">
                    We typically respond to inquiries within 24 hours during business days. 
                    For urgent matters, please call us directly.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center space-x-2">
                      <span className="text-yellow-300">✓</span>
                      <span>Expert product guidance</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="text-yellow-300">✓</span>
                      <span>Custom order assistance</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="text-yellow-300">✓</span>
                      <span>Bulk pricing information</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="text-yellow-300">✓</span>
                      <span>Spiritual consultation</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
