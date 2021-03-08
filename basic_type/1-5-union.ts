{
  // Union type(Or)
  // 아래 코드가 1-4 마지막에 배운 string literal types과 Union type(Or)의 응용예제입니다.
  // Union type는 활용도가 높기때문에 잘 알아두자!

  type Direction = 'left' | 'right' | 'up' | 'down';
  let findWay = (directon: Direction) => {
    console.log(directon);
  };

  findWay('down');
  findWay('up');

  type TileSize = 2 | 4 | 8;
  let small: TileSize = 2;

  type Success = {
    response: {
      body: string;
    };
  };
  type Fail = {
    reason: string;
  };
  type LoginState = Success | Fail;
  type Verify = 'yes' | 'no';

  let login = (id: Verify): LoginState => {
    if (id === 'yes') {
      return {
        response: {
          body: 'logged in!',
        },
      };
    } else {
      return {
        reason: 'just no!',
      };
    }
    // 이 아래 주석은 실행은 되나, 빨간줄....
    // else if (id === 'no') {
    //   return {
    //     reason: 'just no!',
    //   };
    // }
  };

  console.log(login('yes'));
  console.log(login('no'));

  let printLoginState = (state: LoginState) => {
    if ('response' in state) {
      console.log(state.response.body);
    } else if ('reason' in state) {
      console.log(state.reason);
    }
  };

  let good: Success = {
    response: {
      body: 'logged in!',
    },
  };
  let no: Fail = {
    reason: 'failed!!!',
  };
  printLoginState(good);
  printLoginState(no);

  // just for practice
  type Suc = {
    msg: 'congrat';
    date: '2021.03.15';
  };

  type Failure = {
    msg: 'sorry';
  };

  type isLogin = Failure | Suc;
  type State = 's' | 'f';

  let successOrFail = (state: State): Promise<isLogin> => {
    if (state === 'f') {
      return new Promise((resolve, reject) => {
        resolve({
          msg: 'sorry',
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        resolve({
          msg: 'congrat',
          date: '2021.03.15',
        });
      });
    }
  };

  successOrFail('f');
  successOrFail('s');
}
