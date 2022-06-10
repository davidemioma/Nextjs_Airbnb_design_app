import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import * as geolib from "geolib";

const MyMap = ({ searchResults }) => {
  const coordinates = searchResults?.map((item) => ({
    latitude: item.lat,
    longitude: item.long,
  }));

  const center = geolib.getCenter(coordinates);

  return (
    <Map
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle={"mapbox://styles/davidemioma/cl4735p1v001p14pk249txty5"}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
    >
      {searchResults?.map((result) => (
        <div key={result.long}>
          <Marker
            anchor="top-left"
            latitude={result.lat}
            longitude={result.long}
          >
            <div className="cursor-pointer text-xl animate-bounce z-50">📌</div>
          </Marker>

          <Popup longitude={result.long} latitude={result.lat} anchor="bottom">
            {result.title}
          </Popup>
        </div>
      ))}
    </Map>
  );
};

export default MyMap;
