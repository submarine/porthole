import React, {useState} from 'react';

import { Button, Image, Money, Select, TableCell, TableRow } from '../../../common';

export const EditableLine = ({ editableLine, removeEditableLine }) => {
  const [quantity, setQuantity] = useState(editableLine.quantity);

  const handleChangeQuantity = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    editableLine.setQuantity(newQuantity);
  };

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
        {editableLine.productVariant.optionsTitle !== 'Default Title' ? editableLine.productVariant.optionsTitle : null}
      </TableCell>
      <TableCell align="center">
        <Money money={editableLine.unitPrice} />
      </TableCell>
      <TableCell align="center">
        <Select value={quantity} onChange={handleChangeQuantity}>
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
        <Button onClick={handleRemove}>
          Remove
        </Button>
      </TableCell>
    </TableRow>
  )
}
