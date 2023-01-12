let label=document.getElementById("label")
let shoppingCart=document.getElementById("shopping-cart")


let basket=JSON.parse(localStorage.getItem("data")) || []
//console.log(basket)

let calculation=()=>{
    let cartIcon=document.getElementById("cartAmount")
    cartIcon.innerHTML=basket.map((x) => x.item).reduce((x,y)=>x+y,0)

}
calculation()

let generateCartItems=()=>{
    if(basket.length !== 0){
        return (shoppingCart.innerHTML=basket
            .map((x) => {
            let {id,item} = x
            let search = shopItems.find((y)=>y.id === id) || []
            return `
            <div class="cart-item">
                <img width="100" src=${search.img} alt="" />
                <div class="details">
                    <div class="title-price-x">
                        <h4 class="title-price">
                            <p>${search.name}</p>
                            <p class="cart-item-price">$ ${search.price}</p>
                        </h4>
                        <i class="bi bi-x-lg"></i>
                    </div>

                    <div class="buttons">
                        <i onclick="decrement(${x.id})" class="bi bi-dash-lg"></i>
                        <div id=${x.id} class="quantity">${item}</div>
                        <i onclick="increment(${x.id})" class="bi bi-plus-lg"></i>
                    </div>

                    <h3></h3>
                </div>
            </div>         
            `
        }).join(""))
    }
    else{
        shoppingCart.innerHTML=``
        label.innerHTML=`
        <h2>Cart is Empty</h2>
        <a href="index.html">
            <button class="HomeBtn">Back to home</button>
        </a>
        `
    }
}
let increment=(id)=>{
    let selectedItem=id
    let search=basket.find((x)=> x.id === selectedItem.id)
    if(search===undefined){
        basket.push({
            id:selectedItem.id,
            item:1,
        })
    }
    else{
        search.item++
    }
    update(selectedItem.id)
    localStorage.setItem("data",JSON.stringify(basket))
}
let decrement=(id)=>{
    let selectedItem=id
    let search=basket.find((x)=> x.id === selectedItem.id)
    if(search.item===undefined) return
    else if(search.item===0) return
    else{
        search.item--
    }
    update(selectedItem.id)
    basket=basket.filter((x) => x.item!==0)
    localStorage.setItem("data",JSON.stringify(basket))


}
let update=(id)=>{
    let search=basket.find((x)=>x.id===id)
    //console.log(search.item)
    document.getElementById(id).innerHTML=search.item
    calculation()
}
generateCartItems()