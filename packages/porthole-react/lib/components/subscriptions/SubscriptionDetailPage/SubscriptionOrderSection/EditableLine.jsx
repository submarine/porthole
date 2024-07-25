import React from 'react';

import { Image, Money, TableCell, TableRow } from '../../../common';

export const EditableLine = ({ editableLine }) => {
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
        {editableLine.productVariant.title}
      </TableCell>
      <TableCell align="center">
        {editableLine.productVariant.sku}
      </TableCell>
      <TableCell align="center">
        <Money money={editableLine.unitPriceAfterDiscounts} />
      </TableCell>
      <TableCell align="center">
        {editableLine.quantity}
      </TableCell>
      <TableCell align="right">
        <Money money={editableLine.linePriceAfterDiscounts} />
      </TableCell>
    </TableRow>
  )
}
