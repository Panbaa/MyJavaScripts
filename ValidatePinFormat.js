// Here ist a small codesnippet, to validate if a inserted Pin has the correct format. in this Case the format wanted is a pin consisting only of numbers in lengths 4 or 6.

function validatePIN (pin) {
  return /^\d{4}$|^\d{6}$/.test(pin);
}
