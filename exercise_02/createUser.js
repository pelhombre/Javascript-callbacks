import validateString from "../helpers/validateString.js";
/**
 * Define 'createUser' function and signature (JSDocs)
 *
 * input:
 *  - email: string
 *  - onError: function
 *  - onSuccess: function
 *
 * It will generate a random number in between 0 and 1
 * If random number is less than 0.5 or email is empty, then call onError callback
 * Otherwise, call onSuccess function
 *
 * output
 *  - string
 */

/**
 * A function that depending on the random number value calls whether onError or onSuccess function
 *
 * @param {string} email
 * @param {function} onError
 * @param {function} onSuccess
 * @returns {string}
 */
function createUser(email, onError, onSuccess) {
  const number = Math.random();

  if (number < 0.5 || !validateString(email)) {
    return onError();
  }
  return onSuccess(email);
}
export default createUser;
