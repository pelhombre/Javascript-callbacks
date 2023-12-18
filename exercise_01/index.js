//test with value as number and log result

//test with value as array and log result

//test with value as boolean and log result

//test with value as empty string and log result

//test with value as string and log result

// transformStringToArray.test.js

const { transformStringToArray, onError, onSuccess } = require('./transformStringToArray');

// Pruebas adicionales
describe('Additional tests for transformStringToArray function', () => {
  // Prueba con valor como número
  test('should handle a number value with onError', () => {
    const numberValue = 42;
    const result = transformStringToArray(numberValue, onError, onSuccess);
    console.log(result); // Muestra el resultado en la consola
    expect(result).toEqual([]);
  });

  // Prueba con valor como array
  test('should handle an array value with onSuccess', () => {
    const arrayValue = ['Hello', 'World'];
    const result = transformStringToArray(arrayValue, onError, onSuccess);
    console.log(result); // Muestra el resultado en la consola
    expect(result).toEqual(arrayValue);
  });

  // Prueba con valor como booleano
  test('should handle a boolean value with onError', () => {
    const booleanValue = true;
    const result = transformStringToArray(booleanValue, onError, onSuccess);
    console.log(result); // Muestra el resultado en la consola
    expect(result).toEqual([]);
  });

  // Prueba con valor como cadena vacía
  test('should handle an empty string value with onError', () => {
    const emptyStringValue = '';
    const result = transformStringToArray(emptyStringValue, onError, onSuccess);
    console.log(result); // Muestra el resultado en la consola
    expect(result).toEqual([]);
  });

  // Prueba con valor como cadena
  test('should transform a string to an array with onSuccess', () => {
    const stringValue = 'Hello World';
    const result = transformStringToArray(stringValue, onError, onSuccess);
    console.log(result); // Muestra el resultado en la consola
    expect(result).toEqual(['Hello', 'World']);
  });
});
