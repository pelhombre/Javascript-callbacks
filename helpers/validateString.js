/**
 * Validates if the given value is a string
 * @param {string} value
 * @returns {boolean}
 */
function validateString(value) {
  if (typeof value !== "string" || value === "" || value === undefined) {
    return false;
  }
  return true;
}
export default validateString;
