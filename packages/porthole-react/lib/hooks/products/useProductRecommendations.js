import { useEffect, useState, useMemo } from 'react';

export const useProductRecommendations = ({ productIds }) => {
  const [productRecommendations, setProductRecommendations] = useState([]);
  const [productRecommendationsLoading, setProductRecommendationsLoading] = useState(false);

  useEffect( () => {
    const fetchRecommendations = async () => {
      setProductRecommendationsLoading(true);
      //const response = await fetch(`/recommendations/products.json?product_id=${productId}&intent=complementary`);
      //const recommendations = await response.json();

      const response = await fetch(`/products/nutritional-protein-drink.json`);
      const recommendationData = await response.json();
      const product = recommendationData.product;

      setProductRecommendations([product]);
      setProductRecommendationsLoading(false);
    };

    let fetchingRecommendations = true;
    fetchRecommendations();
    return () => { fetchingRecommendations = false };
  }, []);

  return {
    productRecommendations,
    productRecommendationsLoading
  };
};
