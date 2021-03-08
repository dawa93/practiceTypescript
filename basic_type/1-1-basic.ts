{
  // string
  let name: string = 'hi';

  // number
  let number: number = 123;

  // boolean
  const boolean: boolean = true;

  // undefine은 값(데이터)이 있는지 없는지 정해지지 않는 상태
  // undefine은 단독으로 쓰지않을걸..? 그러나 아래와 같이 옵셔널(|)과 같이 사용된다.
  let idk: undefined;
  let age: number | undefined;
  age = 123;
  age = undefined;
  let func = (): string | undefined => {
    return 'hi';
    //or  return undefined
  };

  // null은 값(data)이 없는 상태
  // null도 단독으로 쓰지않을걸..? 그러나 아래와 같이 옵셔널(|)과 같이 사용된다.
  let person: string | null;

  //unknown💩  : 모든 타입이 가능.... 고로 쓰지 않는게 좋다!
  let notSure: unknown = 0;
  notSure = 'hi';
  notSure = true;

  //any💩 : 모든 타입이 가능... 애니 스크립트 쓸바에 자바스크립트 쓰자
  let anything: any = 0;
  anything = 'hello';
  anything = true;

  //void : 함수에서 아무것도 리턴하지 않는경우.(void는 생략가능)
  let func2 = (): void => {
    console.log(`i'm void`);
    return;
  };

  //never💩 : never는 아무것도 리턴하지 않는것이다. 그렇기 때문에 아래 적히 throw new Error(msg)나 while(true)만 사용 가능하다.
  let throwError = (msg: string): never => {
    throw new Error(msg);
    while (true) {}
  };

  //object💩 : object 타입도 가능한 사용하지 않는것이 좋다.
  let obj: object = [1, 2, 3, 4, 5];
  function acceptObj(obj: object) {}
  acceptObj({ name: 'dh' });
  acceptObj({ age: 28 });
}
