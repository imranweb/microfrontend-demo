//import {Layout} from 'shared';

const  prefix = process.NODE_ENV == 'development' ? 'http://localhost:5003' : 'https://cart-app.imranweb.now.sh';
const image = `${prefix}/static/cart.png`;
export default () => (
    <div>
       <h1>Cart Page</h1>
       <img src={image} width="100%"  />
    </div>
)
