
const { transformStringToArray, onError, onSuccess } = require('./transformStringToArray');

// Pruebas para transformStringToArray
describe('transformStringToArray function', () => {
  // Caso de prueba 1: Valor válido
  test('should transform a string to an array', () => {
    const inputString = 'Hello World';
    const result = transformStringToArray(inputString, onError, onSuccess);
    expect(result).toEqual(['Hello', 'World']);
  });

  // Caso de prueba 2: Valor no válido (error)
  test('should handle an invalid value with onError', () => {
    const invalidValue = 42; 
    const result = transformStringToArray(invalidValue, onError, onSuccess);
    expect(result).toEqual([]);
  });

  // Caso de prueba 3: Cadena vacía (error)
  test('should handle an empty string with onError', () => {
    const emptyString = '';
    const result = transformStringToArray(emptyString, onError, onSuccess);
    expect(result).toEqual([]);
  });
});

// Pruebas para onSuccess
describe('onSuccess function', () => {
  // Caso de prueba 1: Valor válido
  test('should return the input array', () => {
    const inputArray = ['Hello', 'World'];
    const result = onSuccess(inputArray);
    expect(result).toEqual(['Hello', 'World']);
  });
});

// Pruebas para onError
describe('onError function', () => {
  // Caso de prueba 1: Valor no válido
  test('should return an empty array for an invalid value', () => {
    const result = onError();
    expect(result).toEqual([]);
  });
});
