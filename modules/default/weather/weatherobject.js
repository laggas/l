/* global Class */

/* Magic Mirror
 * Module: Weather
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * This class is the blueprint for a day which includes weather information.
 */

// Currently this is focused on the information which is necessary for the current weather.
// As soon as we start implementing the forecast, mode properties will be added.

class WeatherObject {
	constructor() {
		this.date = null
		this.windSpeed = null
		this.windDirection = null
		this.sunrise = null
		this.sunset = null
		this.temperature = null
		this.minTemperature = null
		this.maxTemperature = null
		this.weatherType = null
		this.humidity = null
	}

	cardinalWindDirection () {
		if (this.windDirection>11.25 && this.windDirection<=33.75){
			return "NNE";
		} else if (this.windDirection > 33.75 && this.windDirection <= 56.25) {
			return "NE";
		} else if (this.windDirection > 56.25 && this.windDirection <= 78.75) {
			return "ENE";
		} else if (this.windDirection > 78.75 && this.windDirection <= 101.25) {
			return "E";
		} else if (this.windDirection > 101.25 && this.windDirection <= 123.75) {
			return "ESE";
		} else if (this.windDirection > 123.75 && this.windDirection <= 146.25) {
			return "SE";
		} else if (this.windDirection > 146.25 && this.windDirection <= 168.75) {
			return "SSE";
		} else if (this.windDirection > 168.75 && this.windDirection <= 191.25) {
			return "S";
		} else if (this.windDirection > 191.25 && this.windDirection <= 213.75) {
			return "SSW";
		} else if (this.windDirection > 213.75 && this.windDirection <= 236.25) {
			return "SW";
		} else if (this.windDirection > 236.25 && this.windDirection <= 258.75) {
			return "WSW";
		} else if (this.windDirection > 258.75 && this.windDirection <= 281.25) {
			return "W";
		} else if (this.windDirection > 281.25 && this.windDirection <= 303.75) {
			return "WNW";
		} else if (this.windDirection > 303.75 && this.windDirection <= 326.25) {
			return "NW";
		} else if (this.windDirection > 326.25 && this.windDirection <= 348.75) {
			return "NNW";
		} else {
			return "N";
		}
	}

	beaufortWindSpeed () {
		var kmh = this.windSpeed * 60 * 60 / 1000;
		var speeds = [1, 5, 11, 19, 28, 38, 49, 61, 74, 88, 102, 117, 1000];
		for (var beaufort in speeds) {
			var speed = speeds[beaufort];
			if (speed > kmh) {
				return beaufort;
			}
		}
		return 12;
	}

	nextSunAction () {
		var now = new Date();
		return (this.sunrise < now && this.sunset > now) ? "sunset" : "sunrise";
	}
};