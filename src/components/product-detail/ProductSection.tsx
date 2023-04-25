import React from 'react';

import ProductImageGallery from '~/components/product-detail/ProductImageGallery';

import ProductInfo from '~/components/product-detail/ProductInfo/ProductInfo';

interface ProductProp {
  product: Product;
  categories: Category[];
}

const ProductSection = ({ product, categories }: ProductProp) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-12 flex-col md:flex-row my-10">
        <ProductImageGallery product={product} />
        <ProductInfo product={product} categories={categories} />
      </div>
    </div>
  );
};

export default ProductSection;
