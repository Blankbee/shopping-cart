let shop=document.getElementById("shop")

let shopItems=[{
    id:"a",
    name:"Office Shirt",
    price:36,
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    img:"images/img-2.jpg",
},
{
    id:"b",
    name:"Green Suit",
    price:200,
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    img:"images/suit1.jpg",
},
{
    id:"c",
    name:"White T-Shirt",
    price:20,
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    img:"images/tshirt1.jpg",
},
{
    id:"d",
    name:"Light Blue Jeans",
    price:34,
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
    img:"images/jeans1.jpg",
    }]

let basket=[]

let generateShop=()=>{
    return(shop.innerHTML=shopItems.map((x)=>{
        return `
    <div id=product-id-${x.id} class="item">
        <img width="220" height="240" src="${x.img}" alt="">
        <div class="details">
            <h3>${x.name}</h3>
            <p>${x.desc}</p>
            <div class="price-quantity">
                <h2>€ ${x.price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${x.id})" class="bi bi-dash-lg"></i>
                    <div id=${x.id} class="quantity">0</div>
                    <i onclick="increment(${x.id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>`
    }).join(""))
}
generateShop()

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
}
let decrement=(id)=>{
    let selectedItem=id
    let search=basket.find((x)=> x.id === selectedItem.id)
    if(search.item===0) return;
    else{
        search.item--
    }
    update(selectedItem.id)
}
let update=(id)=>{
    let search=basket.find((x)=>x.id===id)
    //console.log(search.item)
    document.getElementById(id).innerHTML=search.item
    calculation()
}
let calculation=()=>{
    let cartIcon=document.getElementById("cartAmount")
    cartIcon.innerHTML=basket.map((x) => x.item).reduce((x,y)=>x+y,0)

}