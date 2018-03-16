'use strict';

// Using Material Icons as inline SVG - https://material.io/icons/

const leaflet = require('leaflet');
const fs = require('fs');

/**
 * Given SVG content generate a data URL. If you're not familiar with
 * Data URLs, see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
 */
const generateSvgUrl = svg => {
  let base64 = btoa(svg);
  return `data:image/svg+xml;base64,${base64}`;
};

// Read contents of SVG files from bundle
const locationDaySvg = fs.readFileSync(
  __dirname + '/../icons/material-icons/location_day.svg'
);
const locationNightSvg = fs.readFileSync(
  __dirname + '/../icons/material-icons/location_night.svg'
);
const lockedDaySvg = fs.readFileSync(
  __dirname + '/../icons/material-icons/locked_day.svg'
);
const lockedNightSvg = fs.readFileSync(
  __dirname + '/../icons/material-icons/locked_night.svg'
);
const unlockedDaySvg = fs.readFileSync(
  __dirname + '/../icons/material-icons/unlocked_day.svg'
);
const unlockedNightSvg = fs.readFileSync(
  __dirname + '/../icons/material-icons/unlocked_night.svg'
);

// Generate Data URLs for each, so we can pass them to Leaflet below
const locationDayUrl = generateSvgUrl(locationDaySvg);
const locationNightUrl = generateSvgUrl(locationNightSvg);
const lockedDayUrl = generateSvgUrl(lockedDaySvg);
const lockedNightUrl = generateSvgUrl(lockedNightSvg);
const unlockedDayUrl = generateSvgUrl(unlockedDaySvg);
const unlockedNightUrl = generateSvgUrl(unlockedNightSvg);

// All icons share the same size, define it once
const iconSize = [25, 25];
//note i'm going to have to make two different sets of this
// Expose custom Leaflet Icons to be used in our markers
module.exports.locationDay = leaflet.icon({
  iconUrl: locationDayUrl,
  iconSize
});

module.exports.locationNight = leaflet.icon({
  iconUrl: locationNightUrl,
  iconSize
});

module.exports.lockedDay = leaflet.icon({
  iconUrl: lockedDayUrl,
  iconSize
});

module.exports.lockedNight = leaflet.icon({
  iconUrl: lockedNightUrl,
  iconSize
});

module.exports.unlockedDay = leaflet.icon({
  iconUrl: unlockedDayUrl,
  iconSize
});

module.exports.unlockedNight = leaflet.icon({
  iconUrl: unlockedNightUrl,
  iconSize
});