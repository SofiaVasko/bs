"use client";

import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

const MaplibreExample = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const lng = 28.973356210062338;
  const lat = 41.02842706636424;

  useEffect(() => {
    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current,
      style:
        "https://api.maptiler.com/maps/toner-v2/style.json?key=bdYvu1zavBzXHAZm1Jlx",
      center: [lng, lat],
      zoom: 15,
    });

    new maplibregl.Marker().setLngLat([lng, lat]).addTo(mapRef.current);

    mapRef.current.on("error", (e) => {
      if (e?.error?.status === 403 || e?.error?.status === 401) {
        console.log("API limit reached", e);
        mapRef.current.setStyle("https://demotiles.maplibre.org/style.json");
      }
    });
    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <div
      style={{ height: "min(50vh, 700px)", width: "min(90vw, 1300px)" }}
      ref={mapContainerRef}
      className="map-container"
    />
  );
};

export default MaplibreExample;
