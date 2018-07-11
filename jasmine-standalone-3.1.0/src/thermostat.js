var Thermostat = function() {
  this.temperature = 20
}

Thermostat.prototype.returnTemperature = function() {
  return this.temperature
}

Thermostat.prototype.up = function() {
  this.temperature ++
}
