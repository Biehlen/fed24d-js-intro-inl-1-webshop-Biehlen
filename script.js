const products = [
    {
        id: 0,
        name: 'Chocolate Cherry',
        price: 13,
        rating: 4,
        amount: 0,
        category: 'Chocolate',
        img: {
            url: 'assets/Chocolate.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk täckt av choklad och färgglatt strössel med ett rött körsbär på toppen'
        },
    },
    {
        id: 1,
        name: 'Appelpie',
        price: 15,
        rating: 4.5,
        amount: 0,
        category: 'Filled donuts',
        img: {
            url: 'assets/Apple.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk med äppelfyllning'
        },
    },
    {
        id: 2,
        name: 'Blueberry dream',
        price: 13,
        rating: 4,
        amount: 0,
        category: 'Fruits and berries',
        img: {
            url: 'assets/Blueberry.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk täckt med blå/lila blåbärsfrosting och dekorerad med strössel och färska blåbär'
        },
    },
    {
        id: 3,
        name: 'Cinnamon',
        price: 13,
        rating: 4.5,
        amount: 0,
        category: 'Classic',
        img: {
            url: 'assets/Cinnamon.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En klassisk munk smaksatt med kanel och dekorerad med pudrat florsocker'
        },
    },
    {
        id: 4,
        name: 'Lemon Lovers',
        price: 13,
        rating: 4,
        amount: 0,
        category: 'Fruits and berries',
        img: {
            url: 'assets/Lemon.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En citronmunk med vit frosting dekorerad med riven samt skivad citron och blått strössel'
        },
    },
    {
        id: 5,
        name: 'Lime Time',
        price: 13,
        rating: 3.5,
        amount: 0,
        category: 'Fruits and berries',
        img: {
            url: 'assets/Lime.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk täckt med grön limefrosting och dekorerad med färgglatt strössel'
        },
    },
    {
        id: 6,
        name: 'Marshmellow heaven',
        price: 14,
        rating: 4.5,
        amount: 0,
        category: 'Classic',
        img: {
            url: 'assets/Marshmellow.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk täckt med vaniljfrosting, färgglatt strössel samt baby marshmellows'
        },
    },
    {
        id: 7,
        name: 'Nutella Fever',
        price: 15,
        rating: 4.5,
        amount: 0,
        category: 'Filled donuts',
        img: {
            url: 'assets/Nutella.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk fylld med nutella dekorerad med pudrat florsocker samt toppad med en klick nutella'
        },
    },
    {
        id: 8,
        name: 'Pink sprinkle',
        price: 13,
        rating: 4,
        amount: 0,
        category: 'Classic',
        img: {
            url: 'assets/Pink sprinkle.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk täckt med rosa hallon och vanilj frosting och toppad med färgglatt strössel'
        },
    },
    {
        id: 9,
        name: 'Smores',
        price: 15,
        rating: 4.5,
        amount: 0,
        category: 'Chocolate',
        img: {
            url: 'assets/Smores.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk täckt med smält choklad, kaksmulor och rostade marshmellows'
        },
    },
    {
        id: 10,
        name: 'Vanilla',
        price: 14,
        rating: 4,
        amount: 0,
        category: 'Filled donuts',
        img: {
            url: 'assets/Vanilla.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En klassisk munk fylld med vaniljkräm toppad med pudrat florsocker'
        },
    },
    {
        id: 11,
        name: 'Strawberry on top',
        price: 13,
        rating: 4,
        amount: 0,
        category: 'Frukt och bär',
        img: {
            url: 'assets/Strawberry.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk täckt med rosa jordgubbsfrosting toppad med färgglatt strössel och en färsk jordgubbe'
        },
    },
];


// ------------------------------------------------
// ------------------ HTML ELEMENTS ---------------
// ------------------------------------------------
const productsListDiv = document.querySelector('#products-list');

// ------------------------------------------------
// -----------------------SHOW PRODUCTS IN CART----
// ------------------------------------------------

const cart = document.querySelector('#cart-summary');
function updateAndPrintCart() {

    /* 
    Att Göra: 
    x En container i html där producterna skrivs ut
    x Produkter som har minst 1 i antal: filter 
    x Loop för att skriva ut produkterna
    - totalsumma
    - om det inte finns några produkter eller om man minskar antalet av en produkt till 0
        så ska det skrivas ut att varukorgen är tom
    */

    const cartProducts = products.filter((product) => product.amount > 0);
    

    // Skriv ut valda produkterna i varukorgen

    let sum = 0;

    cart.innerHTML = '', // Tömma div:en på ev tidigare innehåll 
    cartProducts.forEach(product => {
        if (product.amount > 0) {
            sum += product.amount * product.price
            cart.innerHTML += `
                <div>
                    ${product.name}: ${product.amount} st - ${product.amount * product.price} kr
                </div>
            `;
        };

    });

    cart.innerHTML += `<p>Totalsumma: ${sum} kr</p>`;

    

    // TODO: Summa av alla produkter, tips: använd reduce
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


    
};



// ------------------------------------------------
// -------------------- PRINT PRODUCTS IN HTML-----
// ------------------------------------------------

function printProductsList() {
    productsListDiv.innerHTML = '';

    products.forEach(product => {
        productsListDiv.innerHTML += `
            <article class="product">
                <img src="${product.img.url}" alt="${product.img.alt}">
                <h3>${product.name}</h3>
                <p>${product.price} kr</p>
                <p>Rating: ${product.rating}</p>
                <span>Amount: ${product.amount}</span>
                <div>
                    <button class="decrease" id="decrease-${product.id}">-</button>
                    <input type="number" min="0" value="${product.amount}" id="input-${product.id}">
                    <button class="increase" id="increase-${product.id}">+</button>
                </div>
            </article>
        `;
    });


    const decreaseButtons = document.querySelectorAll('button.decrease');
    decreaseButtons.forEach(button => {
        button.addEventListener('click', decreaseProductCount);
    });

    const increaseButtons = document.querySelectorAll('button.increase');
    increaseButtons.forEach(button => {
        button.addEventListener('click', increaseProductCount);
    });

}

printProductsList();

function decreaseProductCount(e) {
    const productId = Number(e.target.id.replace('decrease-', ''));

    const foundProductIndex = products.findIndex(product => product.id === productId);
    console.log('found product at index', foundProductIndex);

    if (products[productId].amount <= 0) {
        products[productId].amount = 0;
    } else {
        products[productId].amount -= 1;
    }


    printProductsList();

}

function increaseProductCount(e) {
    const productId = Number(e.target.id.replace('increase-', ''));
    console.log('clicked on button with id', productId);
    // Leta rätt på produkten i arrayen som har det id:et
    const foundProductIndex = products.findIndex(product => product.id === productId);
    console.log('found product at index', foundProductIndex);

    // Meddelande till mig själv. Om produkten inte finns, skriv ut felmeddelande i consolen
    if (foundProductIndex === -1) {
        console.error('Det finns ingen sådan produkt i produktlistan! Kolla att id:t är korrekt')
        return;
    }

    //Öka dess amout med -1
    products[foundProductIndex].amount += 1;


    // Skriv ut produklistan
    // Alternativ 1
    // document.querySelector(`#input-${productId}`).value = products[foundProductIndex].amount;

    // Alternativ 2
    printProductsList();

    updateAndPrintCart();
}