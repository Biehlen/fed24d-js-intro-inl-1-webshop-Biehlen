const products = [
    {
        name: 'Choklad och körsbär',
        price: '13kr',
        rating: '4',
        category: 'Choklad',
        img: {
            url: 'assets/Chocolate.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk täckt av choklad och färgglatt strössel med ett rött körsbär på toppen'
        },
    },
    {
        name: 'Äppelpaj',
        price: '15kr',
        rating: '4,5',
        category: 'Fyllda munkar',
        img: {
            url: 'assets/Apple.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk med äppelfyllning'
        },
    },
    {
        name: 'Blåbär',
        price: '13kr',
        rating: '4',
        category: 'Frukt och bär',
        img: {
            url: 'assets/Blueberry.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk täckt med blå/lila blåbärsfrosting och dekorerad med strössel och färska blåbär'
        },
    },
    {
        name: 'Kanel',
        price: '13kr',
        rating: '4.5',
        category: 'Klassiker',
        img: {
            url: 'assets/Cinnamon.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En klassisk munk smaksatt med kanel och dekorerad med pudrat florsocker'
        },
    },
    {
        name: 'Citron',
        price: '13kr',
        rating: '4',
        category: 'Frukt och bär',
        img: {
            url: 'assets/Lemon.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En citronmunk med vit frosting dekorerad med riven samt skivad citron och blått strössel'
        },
    },
    {
        name: 'Lime',
        price: '13kr',
        rating: '3.5',
        category: 'Frukt och bär',
        img: {
            url: 'assets/Lime.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk täckt med grön limefrosting och dekorerad med färgglatt strössel'
        },
    },
    {
        name: 'Marshmellow',
        price: '14kr',
        rating: '4.5',
        category: 'Klassiker',
        img: {
            url: 'assets/Marshmellow.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk täckt med vaniljfrosting, färgglatt strössel samt baby marshmellows'
        },
    },
    {
        name: 'Nutella',
        price: '15kr',
        rating: '4.5',
        category: 'Fyllda munkar, choklad',
        img: {
            url: 'assets/Nutella.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk fylld med nutella dekorerad med pudrat florsocker samt toppad med en klick nutella'
        },
    },
    {
        name: 'Pink sprinkle',
        price: '13kr',
        rating: '4',
        category: 'Klassiker',
        img: {
            url: 'assets/Pink sprinkle.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk täckt med rosa hallon och vanilj frosting och toppad med färgglatt strössel'
        },
    },
    {
        name: 'Smores',
        price: '15kr',
        rating: '4.5',
        category: 'Choklad',
        img: {
            url: 'assets/Smores.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En munk täckt med smält choklad, kaksmulor och rostade marshmellows'
        },
    },
    {
        name: 'Vanilj',
        price: '14kr',
        rating: '4',
        category: 'Fyllda munkar',
        img: {
            url: 'assets/Vanilla.jpeg',
            width: '1024',
            height: '1024',
            alt: 'En klassisk munk fylld med vaniljkräm toppad med pudrat florsocker'
        },
    },
    {
        name: 'Jordgubb',
        price: '13kr',
        rating: '4',
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
// ----------- PRINT PRODUCTS IN HTML -------------
// ------------------------------------------------
products.forEach(product => {
    productsListDiv.innerHTML += `
        <article class="product">
            <h3>${product.name}</h3>
            <p>${product.price} kr</p>
            <p>Rating: ${product.rating}</p>
            <img src="${product.img.url}" alt="${product.img.alt}">
        </article>
    `;
});