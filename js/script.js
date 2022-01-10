// cart system
let getCart = document.querySelectorAll('.add-cart');
let products = [
    {
        description: 'Pet Bag',
        tag: 'petBag',
        options: '1.5 Kg',
        price: 3.48,
        quantity: 0
    },
    {
        description: 'Pet House',
        tag: 'petHouse',
        options: '1.5 Kg',
        price: 3.48,
        quantity: 0
    },
    {
        description: 'Pet Medicine',
        tag: 'petMedicine',
        options: '1.5 Kg',
        price: 3.48,
        quantity: 0
    },
    {
        description: 'Pet Necklace',
        tag: 'petNecklace',
        options: '1.5 Kg',
        price: 3.48,
        quantity: 0
    },
    {
        description: 'Rubber Ball',
        tag: 'rubberBall',
        options: '1.5 Kg',
        price: 3.48,
        quantity: 0
    }
];

for (let i=0; i < getCart.length; i++) {
    getCart[i].addEventListener('click', function(){
        cartNumbers(products[i]);
    })
};

function onLoadCartNUmbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
};
function cartNumbers(products) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(products);
};
function setItems(products) {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if(cartItems[products.tag] == undefined){
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].quantity += 1;
    }else{
        products.quantity = 1;
        cartItems = {
            [products.tag]: products
        };
    }
    localStorage.setItem('productInCart', JSON.stringify(cartItems));
}
onLoadCartNUmbers (); 

$(function(){
    $('.menu-icon-js').click(function(){
        $('.side-menu').toggleClass('show');
        $('.mega-menu').addClass('transform00');
    })
    $('.side-menu').click(function(){
        $(this).removeClass('show');
        $('.mega-menu').removeClass('transform00');
    })
    $('.mega-menu').click(function(e){
        e.stopPropagation();
    })
    $('.show-submenu').click(function(){
        $(this).parents('.has-submenu').siblings('.has-submenu').removeClass('active').find('.sub-menu').slideUp();
        $(this).parents('.has-submenu').toggleClass('active').find('.sub-menu').slideToggle();
    })
    $('.general-list li a').click(function(e){
        e.preventDefault();
        $(this).parents('li').toggleClass('This');
        $(this).find('span').addClass('test')
    })
    $('.general-list li').eq(2).addClass('pink').nextUntil('.prountil').addClass('.lorem');
})


$('.product-info').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    dots:true,
    slideSpeed: 2000,
    paginationSpeed: 2000,
    smartSpeed: 2000,
    items:4
});
$('.piechart').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 10,
    lineCap: 'round',
    barColor: '#043353',
    trackColor:	"#E4DFCF",
    size: 180,
    rotate: 0,    
    animate: 1000,

    onStep: function(value) {
    this.$el.find('span').text(Math.round(value));
},
    onStop: function(value, to) {
    this.$el.find('span').text(Math.round(to));
}
});