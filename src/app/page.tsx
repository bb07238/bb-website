'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { featuredProducts, categories } from '@/lib/data';
import { Star, Heart, ShoppingBag, Sparkles, ArrowRight, CheckCircle, X, MapPin, Store } from 'lucide-react';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const openProductModal = (product: any) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://4kwallpapers.com/images/wallpapers/radha-krishna-3840x2160-14416.png" 
              alt="Radha Krishna Divine - Banke Bihari Creations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
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
              className="max-w-4xl text-white"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
                <span className="text-white text-sm font-medium">🕉️ Divine Spiritual Collection</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Banke Bihari Creations</h1>
              <p className="text-2xl text-white/90 leading-relaxed mb-8">
                Discover authentic divine idols, spiritual essentials, and traditional pooja items from the holy land of Vrindavan
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Collection
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-300">
                  About Us
                </button>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-20 text-white" viewBox="0 0 1440 120" fill="none">
              <path d="M0,120 L1440,120 L1440,0 C1200,40 960,40 720,0 C480,40 240,40 0,0 Z" fill="currentColor"/>
            </svg>
          </div>
        </section>

            <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Products</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Handpicked items from our divine collection</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-amber-50 flex items-center justify-center relative">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Premium</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.9</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <button 
                      onClick={() => openProductModal(product)}
                      className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Physical Store Visit Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-amber-500">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <Store className="w-12 h-12 text-white mr-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Visit Our Physical Store</h2>
                </div>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Experience our divine collection in person. Touch, feel, and choose the perfect spiritual items for your home and temple.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="https://www.google.com/search?q=banke+bihari+creations&oq=bank&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MgYIABBFGDwyCAgBEEUYJxg7MgwIAhBFGDkYsQMYgAQyCAgDEEUYJxg7MgYIBBBFGDwyBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQgxNzUzajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Get Directions on Google Maps
                  </a>
                  <div className="text-white/80 text-sm">
                    <p>📍 Shop No. 238, Phase 7, Sector 61</p>
                    <p>📍 Sahibzada Ajit Singh Nagar, Punjab - 160062</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Shop by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">Category</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore our diverse range of spiritual products</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/products?category=${category.id}`}>
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Sparkles className="w-10 h-10 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.name}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <div className="inline-flex items-center text-blue-600 font-medium">
                        Explore
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-blue-600 to-amber-500 text-white relative overflow-hidden">
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
              <h2 className="text-4xl md:text-5xl font-bold mb-16">Why Choose Us</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Premium Quality</h3>
                  <p className="text-white/90 text-lg leading-relaxed">Handcrafted items with attention to detail and authentic materials</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Made with Devotion</h3>
                  <p className="text-white/90 text-lg leading-relaxed">Each product created with spiritual significance and traditional methods</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Wide Selection</h3>
                  <p className="text-white/90 text-lg leading-relaxed">Comprehensive range of spiritual and pooja essentials under one roof</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-amber-50 p-8 flex items-center justify-center">
                  <img 
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="max-w-full max-h-96 object-contain"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Premium</span>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-amber-500 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">4.9</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{selectedProduct.description}</p>
                  
                  {selectedProduct.features && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Features</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.features.map((feature: string, idx: number) => (
                          <span 
                            key={idx}
                            className="text-sm bg-blue-100 text-blue-800 px-3 py-2 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Details</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Handcrafted with precision and devotion
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Premium quality materials
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Authentic traditional design
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Perfect for home and temple decoration
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      {selectedProduct.price ? (
                        <span className="text-3xl font-bold text-gray-800">{selectedProduct.price}</span>
                      ) : (
                        <span className="text-xl font-semibold text-green-600">Available</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link href="/contact" className="flex-1 bg-gradient-to-r from-blue-600 to-amber-500 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-amber-600 transition-all duration-300 text-center">
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}
