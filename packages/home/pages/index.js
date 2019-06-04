//import Layout from '../components/Layout.js';
import React from 'react';

//import {Layout, Button} from 'shared';
//import ButtonFlow from 'shared/ButtonFlow';
const  prefix = process.env.NODE_ENV == 'development' ? 'http://localhost:5003' : 'https://home-app.imranweb.now.sh';
const topBanner = `${prefix}/static/banner.png`;
const image = `${prefix}/static/home.png`;
const Index = (props) => (
  <div>
     {/* <h1>Home Page</h1> */}
     {/* <img src={topBanner} width="100%" /> */}
     <img width="100%" src={image} useMap="#image-map" />
     <map name="image-map">
    <area target="" alt="" title="" href="https://microfrontend-demo.imranweb.now.sh/cart" coords="1394,18,1481,66" shape="rect" />
    </map> 
  </div>
)

export default Index
