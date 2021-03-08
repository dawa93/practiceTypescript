{
  // Type assertion 💩
  // 사용하지 않는것이 좋다. 그러나 사용해야 할 때도 있다. 그때는 내가 100퍼센트 장담할때이다!!!

  let func = (): any => {
    return 'hello';
  };
  const result = func();
  // result의 리턴값 타입은 any이지만, 내가 문자열을 리턴하는 함수가 있다는걸 알고 있어서
  // func.length를 사용하고 싶지만 사용할 수 없다. 그 이유는 타입이 any 이기 때문이다.
  // 이 경우 내가 100프로 문자열만 리턴한다는것을 확신한다면 type assertion 을 사용 할 수 있다.

  // 세가지 방법이 있다. 아래의 예제를 보자.

  // 1) 첫번째 방법 (as)
  // result가 문자열인것을 알고, 문자열에 가능한 모든 APIS를 사용 할 수 있다.
  let length1 = (result as string).length; // 💩

  // 2) 두번째 방법  (<>)
  let length2 = (<string>result).length; // 💩

  // 3) 세번째 방법  (!)
  let wrong: any = 5;
  console.log((wrong as number[]).push(1)); // 💩

  let findNumbers = (): number[] | undefined => {
    return undefined;
  };
  let numbers1 = findNumbers();
  numbers1!.push(1); // 💩

  let numbers2 = findNumbers()!; // 💩
  numbers2.push(1);
  let button = document.querySelector('class')!; // 💩
}
