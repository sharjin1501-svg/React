function ProductDetails({products}){
    return(
        <>
        {
           products.map((product)=>{
            return(
                <>
                <p>
                    {product.name}
                </p>
                <p>
                    {product.price}
                </p>
                <p>
                    {product.description}
                </p>
                <button>add to cart</button>
                </>
            )
           }
        )
        }
        </>
    )
}

function App(){
    const products=[
        {id:1, name:'Product 1', price:100,
            
            description:'This is product 1'},
        {id:2, name:'Product 2', price:200},
        {id:3, name:'Product 3', price:300},
    ];
    return(
       <ProductDetails 
       products={products}/>
    )
}
const container =document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App/>);