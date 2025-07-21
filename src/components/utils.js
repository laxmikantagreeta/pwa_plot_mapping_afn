export const calculateSquareSize = (boundary) => {
  const TEN_METERS_IN_DEGREES = 5 / 111320;
  return TEN_METERS_IN_DEGREES;
};


export const filterInsidePlots = (plots, boundary) => {
  const polygon = new window.google.maps.Polygon({ paths: boundary });
  return plots.filter((plot) => {
    const point = new window.google.maps.LatLng(plot.lat, plot.lng);
    // const point = new window.google.maps.LatLng(plot.lng, plot.lat);
    return window.google.maps.geometry.poly.containsLocation(point, polygon);
  });
};

export const generateFullGrid = (boundary, squareSize) => {
  const lats = boundary.map(p => p.lat);
  const lngs = boundary.map(p => p.lng);

  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);

  const polygon = new window.google.maps.Polygon({ paths: boundary });

  const grid = [];

  for (let lat = minLat; lat <= maxLat; lat += squareSize) {
    for (let lng = minLng; lng <= maxLng; lng += squareSize) {
      const point = new window.google.maps.LatLng(lat, lng);
      if (window.google.maps.geometry.poly.containsLocation(point, polygon)) {
        grid.push({ lat, lng });
      }
    }
  }

  return grid;
};
