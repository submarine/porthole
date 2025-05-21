import React, { useState } from "react";

import { useCollectionProducts } from '../../../../hooks';
import { Banner, Button, Dialog, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../common';
import { EditableLine } from './EditableLine';
import { RecommendedProduct } from './RecommendedProduct';

export const EditSubscriptionOrderDialogContent = ({ subscriptionOrder, editableLines, addEditableLine, removeEditableLine }) => {
  const {
    collectionProducts,
    collectionProductsLoading
  } = useCollectionProducts({
    collection: 'subscription'
  });

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader colSpan="6">
              Current products
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {editableLines.map(editableLine => {
            return (
              <EditableLine
                key={editableLine.id}
                editableLine={editableLine}
                removeEditableLine={removeEditableLine}
              />
            );
          })}
        </TableBody>
        <TableHead>
          <TableRow>
            <TableHeader colSpan="6">
              Available products
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {collectionProducts.map(product => {
            return (
              <RecommendedProduct
                key={product.id}
                product={product}
                editableLines={editableLines}
                addEditableLine={addEditableLine}
              />
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
