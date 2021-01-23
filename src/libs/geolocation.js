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

export function watchCurrentCoordinate(success, fail) {
	if(navigator.geolocation) {
		return navigator.geolocation.watchPosition((position) => {
			if(position) {
				success && success({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				});
			}
		}, (err) => {
			fail && fail(err);
		});
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
