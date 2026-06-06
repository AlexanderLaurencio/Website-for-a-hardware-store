"use strict";
import { tools } from "./tools.js";

let headerCart = document.querySelector(".header__cart");
let shoppingcart = document.querySelector(".shoppingcart");
let shoppingcartProductContainer = document.querySelector(".shoppingcart__productscontainer");
let buttonPay = document.querySelector(".shoppingcart__button--pay");
let sectionShop = document.querySelector(".section--shop");
let dialogButton = document.querySelector(".dialog__button");
let dialog = document.querySelector(".dialog");
let formPayments = document.querySelectorAll(".form__payment");
let resumeShoppingcart = document.querySelector(".resume__shoppingcart");
let dialogButtonClose = document.querySelector(".dialog__button--cancel");
let dialogButtonPay = document.querySelector(".dialog__button--pay");
let form = document.querySelector(".form");
let paymentmethodsForm = document.querySelector(".paymentmethods--form");

let shoppingcartArray = [];
let totalPrice = Number(document.querySelector(".shoppingcart__totalprice").textContent.slice(-1));

headerCart.addEventListener("click", () => {
    shoppingcart.classList.toggle("hidden");
});

dialogButtonClose.addEventListener("click", () => {
    closeModalWindow();
});

dialogButtonPay.addEventListener("click", (e) => {
    form.submit();
    paymentmethodsForm.submit();
});

buttonPay.addEventListener("click", () => {
    if (shoppingcartArray.length >= 1) {
        shoppingcart.classList.toggle("hidden");
        dialog.classList.toggle("hidden");
        shoppingcartArray.forEach(o => {
            let listElement = document.createElement("li");
            listElement.classList.add("list__element");
            
            let elementImg = document.createElement("img");
            elementImg.classList.add("element__img");
            elementImg.src = o.imgUrl;
            elementImg.alt =  o.title;
            
            let elementName = document.createElement("span");
            elementName.classList.add("element__name");
            elementName.textContent = o.title;
            
            let elementPrice = document.createElement("span");
            elementPrice.classList.add("element__price");
            elementPrice.textContent = `$${o.price}`;
            
            let elementQuantity = document.createElement("span");
            elementQuantity.classList.add("element__quantity");
            elementQuantity.textContent = `X${o.quantity}`;

            listElement.append(elementImg,elementName,elementPrice,elementQuantity);
            resumeShoppingcart.append(listElement);
        });
        document.querySelector(".resume__totalprice").children[1].firstChild.textContent = `$${totalPrice}`;
    };
});

dialogButton.addEventListener("click", () => {
    closeModalWindow();
});

formPayments.forEach(formPayment => {
    formPayment.addEventListener("click", (e) => {
        formPayments.forEach(fp => {
            fp.classList.remove("chosen");
        })
        e.target.classList.add("chosen");
    });
});

//ESTA FUNCION ES PARA CERRAR LA VENTANA MODAL A LA HORA DE PAGAR
function closeModalWindow(){
    document.querySelectorAll(".list__element").forEach(tag => tag.remove());
    dialog.classList.toggle("hidden");
};

//ESTA FUNCION MUESTRA TODAS LAS HERRAMIENTAS CUANDO ABRES LA PAGINA DE PRODUCTOS
function displayProducts(arr) {
    arr.forEach(t => {
    let sectionProduct = document.createElement("article");
    sectionProduct.classList.add("section__product");
    let sectionImg = document.createElement("img");
    sectionImg.classList.add("section__img");
    sectionImg.src = t.imgUrl;
    sectionImg.alt = t.title
    let sectionTitle = document.createElement("h4");
    sectionTitle.classList.add("section__title");
    sectionTitle.textContent = t.title;
    let sectionParagraph = document.createElement("p");
    sectionParagraph.classList.add("section__description");
    sectionParagraph.textContent = t.description;
    let sectionPrice = document.createElement("span");
    sectionPrice.textContent = `$${t.price}.00`;
    sectionPrice.classList.add("section__price");
    let sectionButton = document.createElement("button");
    sectionButton.classList.add("section__button");
    sectionButton.textContent = "Añadir al carrito";
    
    sectionButton.addEventListener("click", () => {
        addProductToShoppingCartArray(t.id);
        addProductsToShoppingCartModalWindow(shoppingcartArray);
    });

    sectionProduct.append(sectionImg);
    sectionProduct.append(sectionTitle);
    sectionProduct.append(sectionParagraph);
    sectionProduct.append(sectionPrice);
    sectionProduct.append(sectionButton);
    sectionShop.append(sectionProduct);
    });
};

displayProducts(tools);


//FUNCION QUE FILTRA LAS HERRAMIENTAS Y LUEGO LAS MUESTRA EN PANTALLA
function filterProducts(e) {
    let toolsFiltered = tools.filter(t => t.category == e.target.textContent);
    displayProducts(toolsFiltered);
};

//ESTE CODIGO ES PARA LOS ELEMENTOS DE LA LISTA DE LA PAGINA PRODUCTOS
document.querySelectorAll(".aside__element").forEach(li => {
    let category = li.textContent;
    li.addEventListener("click", (e) => {
        document.querySelectorAll(".aside__element").forEach(si => {
            si.classList.remove("aside__element--selected");
        });
        e.target.classList.add("aside__element--selected");
        //ESTA ES LA PARTE QUE FILTRA LOS PRODUCTOS
        document.querySelectorAll(".section__product").forEach(p => p.remove());
        if (category !== "Todos") {
            filterProducts(e);
        } else {
            displayProducts(tools);
        }
    });
});

//ESTA ES LA FUNCION PARA AÑADIR PRODUCTOS A EL ARRAY DEL CARRITO
function addProductToShoppingCartArray(id) {
    let toolPosition = Number(id) - 1;
    let tool = tools[toolPosition];
    totalPrice = totalPrice + tool.price;
    document.querySelector(".shoppingcart__totalprice").lastChild.textContent = `$${totalPrice}`;

    if (shoppingcartArray.some(t => t.id == id)) {
        shoppingcartArray = shoppingcartArray.map(t => {
            if (t.id !== id) {
                return t
            } 
            return {
                ...t,
                quantity: t.quantity + 1
            }
        })
        return 
    } 
    
    shoppingcartArray = [...shoppingcartArray, {
        ...tool,
        quantity: 1
    }]
};

//ESTA ES LA FUNCION PARA AGREGAR UN PRODUCTO A LA VENTANA MODAL DEL CARRITO
function addProductsToShoppingCartModalWindow(array) {
    document.querySelectorAll(".shoppingcart__product").forEach(p => p.remove());

    array.forEach(t => {
            let shoppingcartProduct = document.createElement("li");
            shoppingcartProduct.classList.add("shoppingcart__product");

            let shoppingcartImg = document.createElement("img");
            shoppingcartImg.classList.add("shoppingcart__img");

            shoppingcartImg.src = t.imgUrl;
            shoppingcartImg.alt = t.title;

            let shoppingcartTitle = document.createElement("span");
            shoppingcartTitle.classList.add("shoppingcart__title");
            shoppingcartTitle.textContent = t.title;

            let shoppingcartPrice = document.createElement("span");
            shoppingcartPrice.classList.add("shoppingcart__price");
            shoppingcartPrice.textContent = `$${t.price}.00`;

            let shoppingcartQuantity = document.createElement("span");
            shoppingcartQuantity.classList.add("shoppingcart__quantity");
            shoppingcartQuantity.textContent = `X${t.quantity}`;

            // let materialIconTag = document.createElement("span");
            // materialIconTag.classList.add("material-symbols-outlined");
            // materialIconTag.textContent = "close";

            let shoppingCartButton = document.createElement("button");
            shoppingCartButton.classList.add("shoppingcart__button");
            shoppingCartButton.textContent = "×"

            shoppingCartButton.addEventListener("click", () => {
                totalPrice = totalPrice - (t.quantity * t.price);
                document.querySelector(".shoppingcart__totalprice").lastChild.textContent = `$${totalPrice}`;
                removeProductFromShoppingCart(t.id);
                addProductsToShoppingCartModalWindow(shoppingcartArray);
            });

            // shoppingCartButton.append(materialIconTag);
            shoppingcartProduct.append(shoppingcartImg,shoppingcartTitle,shoppingcartPrice,shoppingcartQuantity,shoppingCartButton);
            shoppingcartProductContainer.append(shoppingcartProduct);
    });
};

//FUNCION PARA REMOVER UN PRODUCTO DE UN CARRITO
function removeProductFromShoppingCart(id) {
    shoppingcartArray = shoppingcartArray.filter(t => t.id != id);
};