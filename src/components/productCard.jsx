export default function ProductCard(props){
   return(
    <div className="">
        <img className="" src ={props.pic} alt="productImage"/>
         <h1>{props.name}</h1>
         <p>{props.description}.</p>
         <h2>price : ${props.price}</h2>
         <button>Add to Cart</button>
         <button>Buy Now</button>
    </div>
   )
}