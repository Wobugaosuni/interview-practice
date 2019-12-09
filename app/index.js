import React from 'react';
import { render } from 'react-dom';

import 'normalize.css';
import './common/stylus/index.styl'; // 引入公共样式

// import Todo from './containers/Todo';
import Routes from './router/router';

import { getData, postData } from './fetch/data';

// fetch请求
// getData();
// postData();

render (
  <Routes />,
  document.getElementById('root')
);
