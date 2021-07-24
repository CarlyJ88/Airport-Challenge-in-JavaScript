class Airport {
  constructor (capacity, weather) {
    this.airport = [];
    this.capacity = capacity;
    this.weather = weather;
  }

  land(plane) {
    if (this.airport.length >= this.capacity) {
      throw new Error('Cannot land plane: Airport is full');
    }
    if (this.weather.isStormy()) {
      throw new Error('Plane cannot land: weather is stormy')
    }
    this.airport.push(plane);
    return true;
  }

  takeOff(plane) {
    if (this.weather.isStormy()) {
      throw new Error('Plane cannot takeoff: weather is stormy')
    }
    this.airport.splice(this.airport.indexOf(plane.id), 1);
    return true;
  }
}

export default Airport