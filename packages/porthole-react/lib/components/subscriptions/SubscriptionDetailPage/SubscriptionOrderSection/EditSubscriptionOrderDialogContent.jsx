import React, { useState } from "react";

import { useProductRecommendations } from '../../../../hooks';
import { Banner, Button, Dialog, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../common';
import { EditableLine } from './EditableLine';
import { RecommendedProduct } from './RecommendedProduct';

export const EditSubscriptionOrderDialogContent = ({ subscription, subscriptionOrder }) => {
  const [editableLines, setEditableLines] = useState(subscriptionOrder.lines.map(line => line.toEditableSubscriptionLine()));

  const {
    productRecommendations,
    productRecommendationsLoading
  } = useProductRecommendations({
    productIds: subscriptionOrder.lines.map(line => line.product.externalId)
  });

  const addEditableLine = (editableLineToAdd) => {
    setEditableLines([
      ...editableLines,
      editableLineToAdd
    ]);
  }

  const removeEditableLine = (editableLineToRemove) => {
    const index = editableLines.findIndex((editableLine) => editableLine.id === editableLineToRemove.id);

    setEditableLines([
      ...editableLines.slice(0, index),
      ...editableLines.slice(index + 1)
    ]);
  }

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
          {productRecommendations.map(product => {
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
