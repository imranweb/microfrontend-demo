const  prefix = process.env.NODE_ENV == 'development' ? 'http://localhost:5002' : 'https://cart-app.imranweb.now.sh';
const image = `${prefix}/static/cart.png`;

const onClickHandler = () => {
    console.log("%c%cPlease fix me!!", "background:black ; color: white", "color: red; font-size:25px");
    //window.location.href =  '/checkout';
}
export default () => (
    <div>
       {/* <h1>Cart Page Modified</h1> */}
       <img width="100%" src={image} useMap="#image-map" />
       <map name="image-map">
            <area target="" alt="" title="" onClick={onClickHandler} coords="1491,470,1062,417" shape="rect" />
        </map>
    </div>
)
