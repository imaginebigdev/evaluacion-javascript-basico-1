const evaluacion = require('../evaluacion');

describe('Evaluación de JavaScript', () => {
  test('Variables y tipos de datos primitivos', () => {
    expect(evaluacion.num).toBe(5);
    expect(typeof evaluacion.text).toBe('string');
    expect(typeof evaluacion.bool).toBe('boolean');
  });

  test('Trabajando con strings', () => {
    expect(evaluacion.nombreCompleto).toBe('Juan Pérez');
    expect(evaluacion.ultimaLetra).toBe('n');
    expect(evaluacion.anteultimaLetra).toBe('a');
  });

  test('Estructura de datos Array más compleja', () => {
    expect(evaluacion.frutasBuenas).toEqual(["durazno", "pera", "manzana"]);
    expect(evaluacion.frutasMalas).toEqual(["banana", "mandarina"]);
    expect(evaluacion.ultimoElemento).toBe("banana");
    expect(evaluacion.primerElemento).toBe("pomelo");
  });
});
