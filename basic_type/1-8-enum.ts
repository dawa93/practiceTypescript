{
  // Enum

  // Javascript
  // freeze API 를 사용하여 한번만 정의하고 바꿀수 없게 만든다!
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // Typescript
  enum Days {
    // 선결론! : 타입스크립트에서 이넘은 사용 안하는것이 좋다 ^^
    // 그래서 이넘보다는 타입 유니온 타입을 더 많이 사용한다!!
    // 예) type day = 'Mon' | 'Tue' | 'Wed'

    // ** 주의 사항 : 이넘에서 숫자대신 문자열도 지정 할 수 있다.
    // 그러나 문자열을 지정 할 때는 반드시 모든 이넘에 문자열을 지정해주어야한다.

    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday = 10,
    Sunday,
  }

  console.log(Days.Monday);
  console.log(Days.Friday);
  const day = Days.Saturday;
  console.log(day);
  console.log(Days.Sunday);
}
