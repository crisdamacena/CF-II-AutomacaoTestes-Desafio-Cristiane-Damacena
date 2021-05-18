//Teste unitário para calculadora de três notas

const media = require('../src/calculadoramedia');

test('calcula media entre 3 notas', () => {
	const resultado = media.media(2, 2, 2);

	expect(resultado).toEqual(2);
});

test('calcula media entre 3 notas', () => {
	const resultado = media.media(3, 2, 1);

	expect(resultado).toEqual(2);
});