import express from 'express';

const app = express();

const SUBMARINE_CUSTOMER_ACCESS_TOKEN = import.meta.env.VITE_SUBMARINE_CUSTOMER_ACCESS_TOKEN;

app.get("/apps/platform/tokens", (req, res) => {
  res.send(SUBMARINE_CUSTOMER_ACCESS_TOKEN);
});

export const handler = app;
