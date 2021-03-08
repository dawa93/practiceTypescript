{
  // Type aliases
  type Text = string;
  const name: Text = 'Donghwan';

  type Num = number;
  const age: Num = 28;

  type Name = {
    name: string;
    age: number;
  };

  const Myname: Name = {
    name: 'Donghwan',
    age: 28,
  };

  // String literal types
  type Dh = 'DH';
  let Donghwan: Dh;
  Donghwan = 'DH';

  type JSON = 'json';
  const json: JSON = 'json';
}
