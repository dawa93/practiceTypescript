{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  let printLoginState = (state: ResourceLoadState) => {
    if (state.state === 'loading') return console.log('👀 loading...');
    else if (state.state === 'success') return console.log('😃 loaded');
    else if (state.state === 'fail' && state.reason === 'no network')
      return console.log('😱 no network');
  };

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
