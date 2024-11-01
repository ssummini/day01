import React from 'react';
import Dog from './components/Dog';
import Test01 from './components/Test01';
import Test02 from './components/Test02';
import Test03 from './components/Test03';
import Test04 from './components/Test04';
import Test05 from './components/Test05';

const App = () => {
  return (
    <> {/* 최상단에는 반드시 <div></div>로 감싸야한다.*/}
      <h3>Hello React!!</h3>
      <hr />
      <Dog />
      <hr />
      <Dog />
      <hr/>
      <Test01/>
      <hr/>
      <Test02/>
      <hr/>
      <Test03/>
      <hr/>
      <Test04/>
      <hr/>
      <Test05/>
    </>
  );
};

export default App;
