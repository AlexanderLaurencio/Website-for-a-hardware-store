"use strict";

import { tools } from "./tools.js";

let articles = document.querySelectorAll(".section__article");
let footerChildren = document.querySelector("footer").children;
let carrouselLeft = document.querySelectorAll(".carrousel--left");
let carrouselRight = document.querySelectorAll(".carrousel--right");

//ESTE ES EL OBSERVER QUE OBSERVA A LAS ETIQUETAS ARTICLES
const articlesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        let ele = entry.target;
        if (entry.isIntersecting) {
            ele.classList.add("show");
        }
    })
},{threshold: .7});

articles.forEach(a => articlesObserver.observe(a));

//ESTE ES EL OBSERVER QUE OBSERVA A LOS HIJOS DEL FOOTER
const footerChildrenObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        let ele = entry.target;
        if (entry.isIntersecting) {
            ele.classList.add("show");
        }
    })
},{threshold: .4});

for (let i = 0; i < footerChildren.length; i++) {
    footerChildrenObserver.observe(footerChildren[i]);
};


//ESTA FUNCION ES PARA AGREGAR LOS PRODUCTOS DESTACADOS
function displayProducts(array, quantityOfProducts) {
    for(let a = 0; a < array.length; a++) {
        for (let i = 0; i < quantityOfProducts; i++) {
            let productObject = tools[i];

            let carrouselProduct = document.createElement("article");
            carrouselProduct.classList.add("carrousel__product");

            let carrouselImg = document.createElement("img");
            carrouselImg.classList.add(".carrousel__img");
            carrouselImg.src = `../${productObject.imgUrl}`;
            carrouselImg.alt = productObject.title;

            let carrouselTitle = document.createElement("h4");
            carrouselTitle.classList.add("carrousel__title");
            carrouselTitle.textContent = productObject.title;

            let carrouselPrice = document.createElement("span");
            carrouselPrice.classList.add("carrousel__price");
            carrouselPrice.textContent = `$${productObject.price}`;

            let carrouselButton = document.createElement("button");
            carrouselButton.classList.add("carrousel__button");
            carrouselButton.textContent = "Ver mas";

            carrouselProduct.append(carrouselImg, carrouselTitle, carrouselPrice, carrouselButton);
            array[a].append(carrouselProduct);
        }
    }
};

displayProducts(document.querySelectorAll(".carrousel--left-row"),12);

const carrouselLeftObserver = new IntersectionObserver((carrouselsLeft) => {
    carrouselsLeft.forEach(t => {
        let ele = t.target;
        if (t.isIntersecting) {
            ele.classList.add("show")
        }
    })
},{threshold: .4});

carrouselLeft.forEach(e => {
    carrouselLeftObserver.observe(e);
});
