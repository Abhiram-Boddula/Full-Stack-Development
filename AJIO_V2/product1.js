function test(id) {
    let image = document.getElementById(id);
    let img = image.children;
    let img_main = document.getElementsByClassName('main_image')[0].children;
    img_main[0].src = img[0].src;
}
function show_item() {
    let product = JSON.parse(localStorage.getItem('products'));
    let data = product[product.length - 1];
    let add_to_bag = document.getElementsByClassName('add_to_bag');
    add_to_bag[0].setAttribute('id', `p${product.length - 1}`);
    let img1 = document.getElementById('1');
    let img2 = document.getElementById('2');
    let img3 = document.getElementById('3');
    let img4 = document.getElementById('4');
    let img5 = document.getElementById('5');
    let main_img = document.getElementsByClassName('main_image');
    let name = document.getElementsByClassName('name');
    let detail = document.getElementsByClassName('detail');
    let price = document.getElementsByClassName('price1');
    img1.innerHTML = `<img src="${data.poster}" />`
    img2.innerHTML = `<img src="${data.poster2}" />`
    img3.innerHTML = `<img src="${data.poster3}" />`
    img4.innerHTML = `<img src="${data.poster4}" />`
    img5.innerHTML = `<img src="${data.poster5}" />`
    main_img[0].innerHTML = `<img src="${data.poster}" />`
    name[0].innerHTML = `${data.company_name}`;
    detail[0].innerHTML = `${data.description}`
    price[0].innerHTML = `Rs. ${data.price}`
    if (check_cart(data)) {
        let go_to_cart = document.getElementById('go_to_bag');
        let add_to_cart = document.getElementsByClassName('add_to_bag');
        add_to_cart[0].style.display = "none";
        go_to_cart.style.display = "flex";
    }
}
show_item();
function add_to_cart(id) {
    let newInput = id.split("");
    newInput = newInput.splice(1).join("")
    let index = Number(newInput);
    let go_to_cart = document.getElementById('go_to_bag');
    let add_to_cart = document.getElementsByClassName('add_to_bag');
    let data = JSON.parse(localStorage.getItem('products'));
    let cart = JSON.parse(localStorage.getItem('cart-items'));
        cart.push(data[index]);
        localStorage.setItem('cart-items', JSON.stringify(cart));
        add_to_cart[0].style.display = "none";
        go_to_cart.style.display = "flex";
}
function go_to_cart() {
    window.open("cart.html");
}
function check_cart(data) {
    let isPresent = false;
    let cart = JSON.parse(localStorage.getItem('cart-items'));

    for (let i = 0; i < cart.length; i++){
        if (cart[i].company_name == data.company_name && cart[i].description == data.description) {
            isPresent = true;
            break;
        }
    }
    return isPresent;
}