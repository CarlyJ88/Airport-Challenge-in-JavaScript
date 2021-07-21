import Airport from './Airport'
import Plane from './Plane'

describe('Airport', function () {
  it('Air traffic controller can instruct a plane to land at an Airport', function () {
    var aiport = new Airport();
    var plane = new Plane();
    
    expect(aiport.land(plane)).toBe(true)
  })
})