var Thermostat = function() {
  this.temperature = 20
  this.minimumTemperature = 10
}

Thermostat.prototype.returnTemperature = function() {
  return this.temperature
}

Thermostat.prototype.up = function(value) {
  this.temperature = this.temperature + value
}

Thermostat.prototype.down = function(value) {
  if ((this.temperature - value) < this.minimumTemperature) {
    throw "Minimum temperature is 10 degrees"
  }
  this.temperature = this.temperature - value
}
