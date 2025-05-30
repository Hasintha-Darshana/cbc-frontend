export function getCart(){
    let cart = localStorage.getItem("cart");
    
    if(cart == null){
        cart = []
        localStorage.setItem("cart", JSON.stringify(cart));
    }else{
        cart = JSON.parse(cart);
    }
    return cart
}

export function removeFromCart(productId){
    let cart = getCart();
    
    const newCart = cart.filter(
        (item)=>{
            return item.productId != productId;
        }
    )

    localStorage.setItem("cart", JSON.stringify(newCart));
}

export function addToCart(product, qty){
    let cart =getCart();

    let index = cart.findIndex((item) => item.productId === product.productId);

    if(index == -1){
        cart[cart.length] = {
            productId : product.productId,
            name : product.name,
            image: product.images[0],
            price : product.price,
            labeledPrice : product.labeledPrice,
            qty : qty
        }
    }else{
        const newQty = cart[index].qty + qty;
        if(newQty <= 0){
            removeFromCart(product.productId)
            return;
        }else{
            cart[index].qty = newQty;
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

export function getTotal(){
    let cart = getCart();
    let total = 0;

    cart.forEach((item) => {
        total += item.price * item.qty;
    });

    return total;
}