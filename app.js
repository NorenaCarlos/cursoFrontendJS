const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('#shoppingCartContainer');
const burgerMenu = document.querySelector('.menu');
const cartMenuBag = document.querySelector('.navbar-shopping-cart');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');


burgerMenu.addEventListener('click',toggleMobileMenu);
menuEmail.addEventListener('click',toggleDesktopMenu);
cartMenuBag.addEventListener('click',toggleCartMenu);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);


function toggleDesktopMenu() {
    const isCartMenuClosed = shoppingCartMenu.classList.contains('inactive');
    if(!isCartMenuClosed){
        shoppingCartMenu.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isCartMenuClosed = shoppingCartMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetailContainer.classList.toggle('inactive');
    }
    if (!isCartMenuClosed) {
        shoppingCartMenu.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCartMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    }
    if(!isProductDetailClosed){
        productDetailContainer.classList.toggle('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive');
    }
    shoppingCartMenu.classList.toggle('inactive');
}
function openProductDetailAside(product) {
    productDetailContainer.classList.remove('inactive');
    const isCartMenuClosed = cartMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    }
    if(!isCartMenuClosed){
        cartMenu.classList.toggle('inactive');
    }
}
function closeProductDetailAside(product) {
    productDetailContainer.classList.add('inactive');
}
function openProductDetailAside(product) {
    productDetailContainer.classList.remove('inactive');
    const isCartMenuClosed = cartMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    }
    if(!isCartMenuClosed){
        cartMenu.classList.toggle('inactive');
    }
}
function closeProductDetailAside(product) {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Pantalla",
    price: 220,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Laptop",
    price: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src',product.image);
    productImage.addEventListener('click',openProductDetailAside);
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText="$ "+product.price;

    const productName = document.createElement('p');
    productName.innerText=product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.appendChild(productCard);
}