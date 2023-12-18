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
 * Function 'transformStringToArray' to process a value and return an array based on conditions.
 *
 * @param {any} value - The input value to be processed.
 * @param {function} onError - Callback function to handle error cases.
 * @param {function} onSuccess - Callback function to handle success cases.
 * @returns {Array} - An array based on the input value or error handling.
 */
 function transformStringToArray(value, onError, onSuccess) {
    if (typeof value !== 'string' || value.trim() === '') {
      return onError();
    } else {
      const wordsArray = value.split(/\s+/);
      return onSuccess(wordsArray);
    }
  }
  /**
   *
   * @returns {Array} - An empty array representing an error.
   */
  function onError() {
    return [];
  }
  /**
   * Callback function 'onSuccess' to handle cases when the input value is a non-empty string.
   *
   * @param {Array} wordsArray - An array containing words from the input string.
   * @returns {Array} - The processed array.
   */
  function onSuccess(wordsArray) {
    return wordsArray;
  }
  
