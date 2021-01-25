import { analytics } from '@/main';
let mapId = null;

export const setMapId = (_mapId) => {
	mapId = _mapId;
};

export const logEvent = (eventName, properties) => {
	properties = {
		map_id: mapId,
		...properties,
	};
	console.log(eventName, properties);
	analytics.logEvent(eventName, properties);
};
