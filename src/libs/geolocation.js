export async function getCurrentCoordinate() {
	if(navigator.geolocation) {
		const position = await new Promise((resolve) => {
			navigator.geolocation.getCurrentPosition(resolve, () => resolve(null));
		});
		if(position) {
			return {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			};
		}
	}
	return null;
}

export async function checkGeolocationPermission() {
	if(!navigator.permissions) {
		return 'unknown';
	}
	const result = await navigator.permissions.query({
		name: 'geolocation',
	});
	return result.state;
}
