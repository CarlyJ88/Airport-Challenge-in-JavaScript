import Weather from './Weather'

describe('Weather', function () {
  it('returns true when weather is stormy', function () {
    var weather = new Weather();
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.6;
    global.Math = mockMath;

    
    expect(weather.isStormy()).toBe(true)
  })

  it('returns false when weather is not stormy', function () {
    var weather = new Weather();
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.4;
    global.Math = mockMath;

    
    expect(weather.isStormy()).toBe(false)
  })
})