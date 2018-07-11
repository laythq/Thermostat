var Thermostat = function() {
  this.temperature = 20
}

Thermostat.prototype.returnTemperature = function() {
  return this.temperature
}

Thermostat.prototype.up = function(value) {
  this.temperature = this.temperature + value
}

Thermostat.prototype.down = function(value) {
  this.temperature = this.temperature - value
}
