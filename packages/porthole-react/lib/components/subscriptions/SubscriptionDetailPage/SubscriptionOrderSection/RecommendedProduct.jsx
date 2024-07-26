import React, {useEffect, useState} from 'react';

import { Image, Money, TableCell, TableRow, Select, Button } from '../../../common';
import {EditableSubscriptionLine, SubscriptionLine} from "@submarine/porthole-core";

export const RecommendedProduct = ({ product, editableLines, addEditableLine }) => {
  const [availableVariants, setAvailableVariants] = useState([]);
  const [selectedVariantId, setSelectedVariantId] = useState(availableVariants[0]?.id);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const newAvailableVariants = product.variants.filter(variant => {
      return !editableLines.some(editableLine => {
        return parseInt(editableLine.productVariant.externalId, 10) === variant.id;
      });
    });

    setAvailableVariants(newAvailableVariants);
  }, [product, editableLines]);

  useEffect(() => {
    const selectedVariantIsAvailable = availableVariants.some(availableVariant => availableVariant.id === selectedVariantId);

    if (!selectedVariantIsAvailable) {
      setSelectedVariantId(availableVariants[0]?.id);
    }
  }, [availableVariants]);

  if (!selectedVariantId || !availableVariants.length) {
    return null;
  }

  const selectedVariant = product.variants.find(variant => {
    return variant.id === selectedVariantId;
  });

  const selectedVariantImage = product.images.find(image => {
    return image.variant_ids.includes(selectedVariantId);
  }) || product.image;

  const handleAdd = () => {
    addEditableLine(new EditableSubscriptionLine(new SubscriptionLine({
      __typename: 'SubscriptionLine',
      unitPrice: {
        currency: 'AUD',
        amount: selectedVariant.price
      },
      unitPriceAfterDiscounts: {
        currency: 'AUD',
        amount: selectedVariant.price
      },
      product: {
        externalId: product.id,
        title: product.title
      },
      productVariant: {
        externalId: selectedVariant.id,
        imageUrl: selectedVariantImage?.src,
        sku: selectedVariant.sku,
        title: selectedVariant.title
      },
      quantity
    }), 'ADD'));
  }

  return (
    <TableRow>
      <TableCell align="left">
        <Image
          src={selectedVariantImage?.src}
          alt={`${product.title} - ${selectedVariant.title}`}
          width={64}
        />
      </TableCell>
      <TableCell align="left">
        {product.title}<br />
        <small>{selectedVariant.sku}</small>
      </TableCell>
      <TableCell align="center">
        <Select value={selectedVariantId} onChange={e => setSelectedVariantId(parseInt(e.target.value, 10))}>
          {availableVariants.map(availableVariant => {
            return (
              <option key={availableVariant.id} value={availableVariant.id}>
                {availableVariant.title}
              </option>
            )
          })}
        </Select>
      </TableCell>
      <TableCell align="center">
        <Money money={{
          amount: selectedVariant.price,
          currency: 'AUD'
        }} />
      </TableCell>
      <TableCell align="center">
        <Select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </Select>
      </TableCell>
      <TableCell align="right">
        <Button onClick={handleAdd}>
          Add
        </Button>
      </TableCell>
    </TableRow>
  )
}
