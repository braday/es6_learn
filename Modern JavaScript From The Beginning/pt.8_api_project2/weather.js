class Weather {
  constructor(city, state) {
    this.apiKey = '9cdd180a0abdbe39';
    this.city = city;
    this.state = state;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    /* give some time to fetch data */
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/geolookup/conditions/q/${this.state}/${this.country}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state, country) {
    this.city = city;
    this.state = state;
    this.country = country;
  }
}