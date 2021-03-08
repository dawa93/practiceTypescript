{
  let add = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  // 잠깐 주석처리...
  // let fetchNum = (id: string): Promise<number> => {
  //   // .. code
  //   // .. code
  //   // .. code

  //   return new Promise((resolve, reject) => {
  //     return resolve(100);
  //   });
  // };

  // optional parameter
  let printName = (firstName: string, lastName?: string): void => {
    console.log(firstName);
    console.log(lastName);
  };

  printName('Donghwan', 'Lee');
  printName('Kate');

  //Default parameter
  let printMsg = (text: string = 'Hi world') => {
    console.log(text);
  };

  printMsg(`I'm beginner`);
  printMsg();

  // Rest parameter
  let addNumbers = (...numbers: number[]): number => {
    return numbers.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  };

  console.log(addNumbers(1, 2, 3, 4, 5, 6));
}

// 새로운것들 또는 헷갈린것  => Default parameter 와 Rest parameter
