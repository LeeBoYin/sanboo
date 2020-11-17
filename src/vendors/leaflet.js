import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';

// import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.min.css'
// import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.min';
//
// import * as L from "leaflet";
// import { GestureHandling } from "leaflet-gesture-handling";
//
// import "leaflet/dist/leaflet.css";
// import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
// L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);

// Marker Icons are missing
// https://vue2-leaflet.netlify.app/quickstart/#marker-icons-are-missing
import { Icon } from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
	iconRetinaUrl,
	iconUrl,
	shadowUrl,
});
