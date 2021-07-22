class Airport {
  constructor (capacity) {
    this.airport = [];
    this.capacity = capacity;
  }

  land(plane) {
    if (this.airport.length >= this.capacity) {
      throw new Error('Cannot land plane: Airport is full');
    }
    else {
      this.airport.push(plane);
      return true;
    }
  }

  takeOff(plane) {
    return true;
  }
}

export default Airport