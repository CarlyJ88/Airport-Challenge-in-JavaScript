import Airport from './Airport'
import Plane from './Plane'
import Weather from './Weather'

describe('Airport', function () {
  var id = 1;

  it('Air traffic controller can instruct a plane to land at an Airport', function () {
    var plane = new Plane(id);
    var weather = new Weather();
    var spy = jest.spyOn(weather, 'isStormy');
    spy.mockReturnValue(false);
    var airport = new Airport(20, weather);
    
    expect(airport.land(plane)).toBe(true)
  })

  it('Find plane in Airport once it lands', function () {
    var plane = new Plane(id);
    var weather = new Weather();
    var spy = jest.spyOn(weather, 'isStormy');
    spy.mockReturnValue(false);
    var airport = new Airport(20, weather);
    
    expect(airport.land(plane)).toBe(true)
  })

  it('Air traffic controller can instruct a plane to takeoff at an Airport', function () {
    var plane = new Plane(id);
    var weather = new Weather();
    var spy = jest.spyOn(weather, 'isStormy');
    spy.mockReturnValue(false);
    var airport = new Airport(20, weather);
    
    expect(airport.takeOff(plane)).toBe(true)
  })

  it('Cannot land plane when Airport is at full capacity', function () {
    var plane = new Plane(id);
    var weather = new Weather();
    var spy = jest.spyOn(weather, 'isStormy');
    spy.mockReturnValue(false);
    var airport = new Airport(20, weather);
    var capacity = 20;

    for (let i = 0; i < capacity; i++){
      airport.land(plane)
    }

    expect(() => airport.land(plane)).toThrow('Cannot land plane: Airport is full')
  })

  it('Can land plane when Airport is at full capacity but another plane takes off', function () {
    var weather = new Weather();
    var spy = jest.spyOn(weather, 'isStormy');
    spy.mockReturnValue(false);
    var airport = new Airport(20, weather);
    var plane = new Plane(id);
    var capacity = 20;

    for (let i = 0; i < capacity; i++){
      plane = new Plane(id+i)
      airport.land(plane)
    }

    airport.takeOff(plane);
    expect(airport.land(plane)).toBe(true)
  })

  it('Capacity can change', function () {
    var plane = new Plane(id);
    var weather = new Weather();
    var spy = jest.spyOn(weather, 'isStormy');
    spy.mockReturnValue(false);
    var airport = new Airport(40, weather);
    var capacity = 40;

    for (let i = 0; i < capacity; i++){
      airport.land(plane)
    }

    expect(() => airport.land(plane)).toThrow('Cannot land plane: Airport is full')
  })

  it('Plane cannot take off if the weather is stormy', function () {
    var plane = new Plane(id);
    var weather = new Weather();
    var spy = jest.spyOn(weather, 'isStormy');
    spy.mockReturnValue(true);
    var airport = new Airport(40, weather);

    expect(() => airport.takeOff(plane)).toThrow('Plane cannot takeoff: weather is stormy')
  })

  it('Plane cannot land if the weather is stormy', function () {
    var plane = new Plane(id);
    var weather = new Weather();
    var spy = jest.spyOn(weather, 'isStormy');
    spy.mockReturnValue(true);
    var airport = new Airport(40, weather);

    expect(() => airport.land(plane)).toThrow('Plane cannot land: weather is stormy')
  })
})
