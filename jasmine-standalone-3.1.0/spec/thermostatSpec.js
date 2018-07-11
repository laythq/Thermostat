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
