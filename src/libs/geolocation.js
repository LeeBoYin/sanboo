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
