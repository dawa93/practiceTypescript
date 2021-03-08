{
  // discriminated는 공통된 key를 가지고 있으면, 좋다!!
  // 아래의 예에서는 result라는 key를 가지고 있다.
  type Success = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type Fail = {
    result: 'fail';
    reason: string;
  };
  type LoginState = Success | Fail;
  type Verify = 'yes' | 'no';

  let login = (id: Verify): LoginState => {
    if (id === 'yes') {
      return {
        result: 'success',
        response: {
          body: 'logged in!',
        },
      };
    } else {
      return {
        result: 'fail',
        reason: 'just no!',
      };
    }
  };

  console.log(login('yes'));
  console.log(login('no'));

  let printLoginState = (state: LoginState) => {
    if (state.result === 'success') {
      console.log(state.response.body);
    } else if ('reason' in state) {
      console.log(state.reason);
    }
  };

  // let good: Success = {
  //   response: {
  //     body: 'logged in!',
  //   },
  // };
  // let no: Fail = {
  //   reason: 'failed!!!',
  // };
  // printLoginState(good);
  // printLoginState(no);
}
