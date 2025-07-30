import { ProductCard } from '@/products'
import { products } from '@/products/data/products'
import React from 'react'

export default function ProductsPage() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
        {
            products.map(products => (
                <ProductCard key={products.id} {...products} />
            ))
        }
    </div>
  )
}
