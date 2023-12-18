/**
 * Define 'onSuccess' function and signature
 * It receives a string and returns an array with all words contained in it
 *
 * input:
 *  - value: string
 *
 * output:
 *  - array
 */

/**
 * Function 'onSuccess' to process a string and return an array with all words contained in it.
 *
 * @param {string} value - The input string.
 * @returns {Array} - An array containing all words in the input string.
 */
 function onSuccess(value) {
    // Utiliza expresiones regulares para dividir la cadena en palabras
    const wordsArray = value.split(/\s+/);
    return wordsArray;
  }
  