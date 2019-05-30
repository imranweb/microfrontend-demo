//import Layout from '../components/Layout.js';
import React from 'react';

//import {Layout, Button} from 'shared';
//import ButtonFlow from 'shared/ButtonFlow';
const  prefix = process.NODE_ENV == 'development' ? 'http://localhost:5003' : 'https://home-app.imranweb.now.sh';
const image = `${prefix}/static/home.png`;
const Index = (props) => (
  <div>
     <h1>Home Page </h1>
    <img src={image} width="100%" />
  </div>
)

export default Index
