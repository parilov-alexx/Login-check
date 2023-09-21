import Validator from '../check';

test('Логин включает в себя только латинские буквы и цифры', () => {
  const name = 'name888tдue';
  const result = false;
  const check = new Validator();
  expect(check.validateUsername(name)).toEqual(result);
});

test('Логин может содержать тире и(ли) нижнее подчеркивание', () => {
  const name = 'nam-888t_ue';
  const result = true;
  const check = new Validator();
  expect(check.validateUsername(name)).toEqual(result);
});

test('Логин начинается с буквы', () => {
  const name = '_me888tue';
  const result = false;
  const check = new Validator();
  expect(check.validateUsername(name)).toEqual(result);
});

test('Логин заканчивается на букву', () => {
  const name = 'name888tue';
  const result = true;
  const check = new Validator();
  expect(check.validateUsername(name)).toEqual(result);
});

test('Логин содержит не более 3 цифр подряд', () => {
  const name = 'name8888ue';
  const result = false;
  const check = new Validator();
  expect(check.validateUsername(name)).toEqual(result);
});
