/**
 * Define 'transformStringToArray' function and signature (JSDocs)
 *
 * input:
 *  - value: any
 *  - onError: function
 *  - onSuccess: function
 *
 * If received value is not a string or it is an empty string, then call onError callback
 * Otherwise, call onSuccess function
 *
 * output
 *  - array
 */

/**
 * Returns onError or onSuccess function depending if value is a string and if it's not empty
 * @param {*} value
 * @param {function} onError
 * @param {function} onSuccess
 * @returns {function}
 */
function transformStringToArray(value, onError, onSuccess) {
  if (typeof value !== "string" || value === "") {
    return onError();
  }
  return onSuccess(value);
}

export default transformStringToArray;
