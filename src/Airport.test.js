import Airport from './Airport'
import Plane from './Plane'

describe('Airport', function () {
  it('Air traffic controller can instruct a plane to land at an Airport', function () {
    var aiport = new Airport();
    var plane = new Plane();
    
    expect(aiport.land(plane)).toBe(true)
  })

  it('Find plane in Airport once it lands', function () {
    var aiport = new Airport();
    var plane = new Plane();
    
    expect(aiport.land(plane)).toBe(true)
  })

  it('Air traffic controller can instruct a plane to land at an Airport', function () {
    var aiport = new Airport();
    var plane = new Plane();
    
    expect(aiport.takeOff(plane)).toBe(true)
  })

  it('Cannot land plane when Airport is at full capacity', function () {
    var aiport = new Airport(20);
    var plane = new Plane();
    var capacity = 20;

    for (let i = 0; i < capacity; i++){
      aiport.land(plane)
    }

    expect(() => aiport.land(plane)).toThrow('Cannot land plane: Airport is full')
  })
})
