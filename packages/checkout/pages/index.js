//import {Layout} from 'shared';

const  prefix = process.env.NODE_ENV == 'development' ? 'http://localhost:5001' : 'https://checkout-app.imranweb.now.sh';
const image = `${prefix}/static/checkout.png`;

export default () => (
    <div>
       {/* <h1>Checkout Page</h1> */}
       <img width="100%" src={image} useMap="#image-map" />
        <map name="image-map">
        <area target="" alt="" title="" href="https://home-app.imranweb.now.sh" coords="408,64,137,9" shape="rect" />
        </map>
    </div>
)
