import { useEffect, useState } from 'react';

export const useProductRecommendations = ({ productIds }) => {
  const [rawRecommendations, setRawRecommendations] = useState([]);
  const [productRecommendations, setProductRecommendations] = useState([]);
  const [productRecommendationsLoading, setProductRecommendationsLoading] = useState(false);

  useEffect( () => {
    setProductRecommendationsLoading(true);
    const productId = productIds[0];

    const loadRawRecommendations = async () => {
      //const response = await fetch(`/recommendations/products.json?product_id=${productId}&intent=complementary`);
      //const recommendations = await response.json();

      const response = await fetch(`/products/nutritional-protein-drink.json`);
      const recommendationData = await response.json();
      const product = recommendationData.product;

      setRawRecommendations([product]);
    };

    loadRawRecommendations();
  }, [productIds]);

  useEffect(() => {
    const filteredRecommendations = rawRecommendations.filter(rawRecommendation => {
      return !productIds.some(productId => productId === rawRecommendation.id);
    });

    setProductRecommendations(filteredRecommendations);

    setProductRecommendationsLoading(false);
  }, [rawRecommendations]);

  return {
    productRecommendations,
    productRecommendationsLoading
  };
};
