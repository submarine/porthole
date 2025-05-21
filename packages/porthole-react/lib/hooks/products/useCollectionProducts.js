import { useEffect, useState } from 'react';

export const useCollectionProducts = ({ collection }) => {
  const [collectionProducts, setCollectionProducts] = useState([]);
  const [collectionProductsLoading, setCollectionProductsLoading] = useState(false);

  useEffect( () => {
    const fetchProducts = async () => {
      setCollectionProductsLoading(true);

      const response = await fetch(`/collections/${collection}/products.json?limit=250`);
      const collectionData = await response.json();
      const products = collectionData.products;

      // do some filtering here?

      setCollectionProducts(products);
      setCollectionProductsLoading(false);
    };

    let fetchingProducts = true;
    fetchProducts();
    return () => { fetchingProducts = false };
  }, []);

  return {
    collectionProducts,
    collectionProductsLoading
  };
};
