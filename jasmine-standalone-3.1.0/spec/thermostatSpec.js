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
    thermostat.up()
    expect(thermostat.returnTemperature()).toEqual(21)
  })
})

})
