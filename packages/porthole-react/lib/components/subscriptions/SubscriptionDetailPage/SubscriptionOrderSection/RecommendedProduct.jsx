import React, { useState } from 'react';

import { Image, Money, TableCell, TableRow, Select, Button } from '../../../common';

export const RecommendedProduct = ({ product, editableLines }) => {
  const availableVariants = product.variants.filter(variant => {
    return !editableLines.some(editableLine => {
      console.log('comparing', editableLine.productVariant.externalId, variant.id);
      return parseInt(editableLine.productVariant.externalId, 10) === variant.id;
    });
  });

  if (!availableVariants.length) {
    return null;
  }

  const [selectedVariantId, setSelectedVariantId] = useState(availableVariants[0].id);

  const selectedVariant = product.variants.find(variant => {
    return variant.id === selectedVariantId;
  });

  const selectedVariantImage = product.images.find(image => {
    return image.variant_ids.includes(selectedVariant.id);
  }) || product.image;

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
        {product.title}
      </TableCell>
      <TableCell align="center">
        <Select value={selectedVariantId} onChange={e => setSelectedVariantId(parseInt(e.target.value, 10))}>
          {availableVariants.map(availableVariant => {
            return (
              <option value={availableVariant.id}>
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
        <Select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Select>
      </TableCell>
      <TableCell align="right">
        <Button>Add</Button>
      </TableCell>
    </TableRow>
  )
}
