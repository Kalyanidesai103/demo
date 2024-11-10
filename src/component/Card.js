function Cart (props){
    return (
        <div class="carT">
            <img className="imgSize"
            src={props.img}
            alt="Card demos"
            width="10%"
            height="250"
            />
            <div class="card-body">
                <h4 class="card-title">{props.title}</h4>
                <p class="card-text">{props.text}</p>
                <a href={props.link} class="btn btn=primary stretched-link">
                    <button>{props.btnTxt}</button>
                </a>
            </div><br/> <br/>
        </div>
    );
}
    export default Cart;
