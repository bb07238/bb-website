'use client';

import { useState, useMemo, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { categories, Product } from '@/lib/data';
import { Search, Filter, Sparkles, Heart, Star } from 'lucide-react';

// Component that uses searchParams - wrapped in Suspense
function ProductsContent() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    let allProducts: Product[] = [];
    
    categories.forEach(category => {
      if (!selectedCategory || category.id === selectedCategory) {
        allProducts = [...allProducts, ...category.products];
      }
    });

    if (searchTerm) {
      allProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return allProducts;
  }, [selectedCategory, searchTerm]);

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {currentCategory ? currentCategory.name : 'All Products'}
          </h1>
          {currentCategory && (
            <p className="text-xl text-gray-600 mb-6">{currentCategory.description}</p>
          )}

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => window.location.href = '/products'}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  !selectedCategory 
                    ? 'bg-yellow-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                All Categories
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => window.location.href = `/products?category=${category.id}`}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id 
                      ? 'bg-yellow-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {filteredProducts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center overflow-hidden">
                  <Sparkles className="w-20 h-20 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 right-4">
                    <Heart className="w-6 h-6 text-white bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-red-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-yellow-600 uppercase tracking-wide">
                      {categories.find(cat => cat.id === product.category)?.name}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">4.8</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  
                  {product.features && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature: string, idx: number) => (
                          <span 
                            key={idx}
                            className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                        {product.features.length > 2 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            +{product.features.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div>
                      {product.price ? (
                        <span className="text-2xl font-bold text-gray-800">{product.price}</span>
                      ) : (
                        <span className="text-lg font-semibold text-green-600">Available</span>
                      )}
                    </div>
                    <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filteredProducts.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </motion.div>
        )}
      </main>
    </>
  );
}

// Main page component with Suspense boundary
export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <Header />
      
      <Suspense fallback={
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading products...</p>
            </div>
          </div>
        </div>
      }>
        <ProductsContent />
      </Suspense>

      <Footer />
    </div>
  );
}
