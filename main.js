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

let generateShop=()=>{
    return(shop.innerHTML=shopItems.map((x)=>{
        return `
    <div class="item">
        <img width="220" height="240" src="${x.img}" alt="">
        <div class="details">
            <h3>${x.name}</h3>
            <p>${x.desc}</p>
            <div class="price-quantity">
                <h2>€ ${x.price}</h2>
                <div class="buttons">
                    <i class="bi bi-dash-lg"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>`
    }).join(""))
}
generateShop()