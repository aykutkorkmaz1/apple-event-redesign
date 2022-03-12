import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Page_accessories from './pages/Page_accessories';
import Page_airpods from './pages/Page_airpods';
import Page_ipad from './pages/Page_ipad';
import Page_iphone from './pages/Page_iphone';
import Page_mac from './pages/Page_mac';
import Page_onlyonapple from './pages/Page_onlyonapple';
import Page_support from './pages/Page_support';
import Page_tvhome from './pages/Page_tvhome';
import Page_watch from './pages/Page_watch';
import Page_store from './pages/Page_store';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/accessories" element={<Page_accessories />} />
      <Route path="/airpods" element={<Page_airpods />} />
      <Route path="/ipad" element={<Page_ipad />} />
      <Route path="/iphone" element={<Page_iphone />} />
      <Route path="/mac" element={<Page_mac />} />
      <Route path="/only-on-apple" element={<Page_onlyonapple />} />
      <Route path="/support" element={<Page_support />} />
      <Route path="/tv-home" element={<Page_tvhome />} />
      <Route path="/watch" element={<Page_watch />} />
      <Route path="/store" element={<Page_store />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);