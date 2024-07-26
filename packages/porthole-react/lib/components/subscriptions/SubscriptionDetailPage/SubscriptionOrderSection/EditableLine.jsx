import React from 'react';

import { Button, Image, Money, Select, TableCell, TableRow } from '../../../common';

export const EditableLine = ({ editableLine, removeEditableLine }) => {

  const handleRemove = () => {
    removeEditableLine(editableLine);
  }

  return (
    <TableRow>
      <TableCell align="left">
        <Image
          src={editableLine.imageUrl}
          alt={editableLine.productVariant.title}
          width={64}
        />
      </TableCell>
      <TableCell align="left">
        {editableLine.product.title}<br />
        <small>{editableLine.productVariant.sku}</small>
      </TableCell>
      <TableCell align="left">
        {editableLine.productVariant.optionsTitle}
      </TableCell>
      <TableCell align="center">
        <Money money={editableLine.unitPrice} />
      </TableCell>
      <TableCell align="center">
        <Select value={editableLine.quantity} onChange={e => editableLine.setQuantity(e.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Select>
      </TableCell>
      <TableCell align="right">
        <Button onClick={handleRemove}>
          Remove
        </Button>
      </TableCell>
    </TableRow>
  )
}
