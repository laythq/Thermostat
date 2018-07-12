describe('Thermostat: ', function() {
  var thermostat

beforeEach(function() {
  thermostat = new Thermostat();
});

describe('temperature', function() {
  it('starts at 20 degrees', function() {
    expect(thermostat.returnTemperature()).toEqual(20)
  })
})

describe('up', function() {
  it('increases the temperature by n degrees', function() {
    thermostat.up(1)
    expect(thermostat.returnTemperature()).toEqual(21)
  })

  it('cannot go above maximum temperature', function() {
    thermostat.powerSaver("on")
    expect( function() { thermostat.up(6) }).toThrow('Maximum temperature breached')
  })
})

describe('power saving mode: on', function() {
  it('sets maximum temperature to 25 degrees', function() {
    thermostat.powerSaver("on")
    expect(thermostat.maximumTemperature).toEqual(25)
  })
  it('is on by default', function() {
    expect(thermostat.maximumTemperature).toEqual(25)
  })
})

describe('power saving mode: off', function() {
  it('sets maximum temperature to 32 degrees', function() {
    thermostat.powerSaver("off")
    expect(thermostat.maximumTemperature).toEqual(32)
  })
})

describe('down', function() {
  it('decreases the temperature by n degrees', function() {
    thermostat.down(1)
    expect(thermostat.returnTemperature()).toEqual(19)
  })

  it('cannot drop below 10 degrees', function() {
    expect( function() { thermostat.down(11) }).toThrow('Minimum temperature is 10 degrees')
  })
})


})
