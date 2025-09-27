// Embed the Vega-Lite spec into the #map div
vegaEmbed("#map", "specs/obesity_choropleth.vg.json", {
  actions: { export: true, source: true, compiled: false, editor: true },
}).catch(console.error);
