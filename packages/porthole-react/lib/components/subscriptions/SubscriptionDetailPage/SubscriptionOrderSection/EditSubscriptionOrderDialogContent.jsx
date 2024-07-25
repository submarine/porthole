import React, { useState } from "react";

import { useProductRecommendations } from '../../../../hooks';
import { Banner, Button, Dialog, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../common';
import { EditableLine } from './EditableLine';
import { RecommendedProduct } from './RecommendedProduct';

export const EditSubscriptionOrderDialogContent = ({ subscription, subscriptionOrder }) => {
  const [editableLines, setEditableLines] = useState(subscriptionOrder.lines.map(line => line));

  const {
    productRecommendations,
    productRecommendationsLoading
  } = useProductRecommendations({
    productIds: subscriptionOrder.lines.map(line => line.product.externalId)
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
              />
            );
          })}
        </TableBody>
      </Table>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeader colSpan="6">
              Recommended products
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
              />
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
