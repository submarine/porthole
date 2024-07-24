// parse a JSON configuration object from the DOM
export const parseJsonScript = (document, id) => {
  const script = document.getElementById(id);
  try {
    return JSON.parse(script.innerHTML);
  } catch { return {}; }
};
