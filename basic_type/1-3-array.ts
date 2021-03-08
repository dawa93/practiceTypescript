{
  // Array
  const fruits: string[] = ['tomato', 'banana'];
  const pets: Array<string> = ['dogo', 'cats'];
  const numbers: number[] = [1, 2, 3, 4, 5];
  const numbers2: Array<number> = [1, 2, 3, 4, 5];

  // Array<string> 와 string[] 의 차이점 배우기
  // 1. readonly 를 사용하기 위해서는 string[] 만을 사용해야한다.
  // ex)   readonly string[]  (o)
  //       readonly Array<string>  (x)
  // object는 불변성이 중요하기 때문에, readonly를 많이 사용한다.
  // 그렇기때문에 string[] 과 같은 방식을 사용하는것이 나중에 더 좋을거 같다.
  let printArray = (fruits: readonly string[]) => {
    // fruits.push('Mango')  // cant use this. cuz of readonly
  };

  // Tuple : tuple을 통해서 서로 다른 타입의 원소를 갖는 배열을 만들 수 있다.
  // 튜플을 사용하는것을 권장하지 않는다. 그 이유는 인덱스로 값을 불러 올 수 있기때문에 가독성이 떨어진다.
  // 그래서 interface, type alias, class를 대체제로 사용한다.
  let students: [string, number];
  students = ['Donghwan', 28];
  students[0]; // 'Donghwna'
  students[1]; // 28
  // 그러나 아래처럼 구조분해할당을 사용하면, 어느정도 대체도 가능하다.
  const [name, age] = students;
  console.log(name);
  console.log(age);
}
