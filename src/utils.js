export const getImageUrl = (path) => {
    const base = import.meta.env.MODE === "production" ? "/labdhi-portfolio" : "";
    return `${base}/assets/${path}`;
  };
  