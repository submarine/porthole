// index.js
// entry point for Submarine client library

import { client } from "../lib";

const initialise = () => {
  // check we are in a browser context
  if(!window || !document) { return; }

  const submarine = window.submarine || {};
  submarine.client = client;

  // export to window
  window.submarine = submarine;
}

initialise();
