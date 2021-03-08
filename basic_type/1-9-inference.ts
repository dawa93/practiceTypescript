{
  // Type Inference

  let greeting = 'hi';
  greeting = 'hello';
  // greeting = 123    // 이것은 불가능하다. 이미 문자열인걸로 추론을 했는데 숫자타입이 들어 갈 수 없다.

  let prtin = (msg /*= 'hello' */) => {
    // msg 아래 초록색 닷닷닷에 호버를 하면 알 수 있듯이 타입을 지정하지 않으면
    // any script와 다를것이 없다. 그렇기 때문에 타입을 지정하거나 디폴트 파라미터를 사용해야한다.
    console.log(msg);
  };
}
