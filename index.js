merchandise = {
    necklace: [
        {
            name: 'Coast Lines Necklace',
            price: 148.0,
            img:
                'https://www.grahamblackopal.com/wp-content/uploads/2016/09/opal-necklaces-1-300x300.jpg',
            stock: 6
        },
        {
            name: 'Raw Amethyst Necklace',
            price: 10.0,
            img:
                'https://img1.etsystatic.com/147/2/10028875/il_340x270.1182383613_mygf.jpg',
            stock: 12
        },
        {
            name: 'Baseball Cross Necklace',
            price: 64.99,
            img:
                'https://cdn.shopify.com/s/files/1/0952/7168/products/gold-2.0-baseball-stacked-bats-cross-front.jpg?v=1502290715',
            stock: 24
        },
        {
            name: 'Long Beaded Necklace',
            price: 19.99,
            img:
                'https://cdn.shopify.com/s/files/1/0513/2417/products/labradorite_moonstone_rosegold_necklace_18_1024x1024.jpg?v=1500505831',
            stock: 8
        },
        {
            name: 'Heart Locket',
            price: 74.89,
            img:
                'https://i.pinimg.com/236x/18/17/50/1817507bd7d6aab1dc6c53b8ea27ec82--heart-locket-heart-designs.jpg',
            stock: 43
        },
        {
            name: 'Tribal Turquoise Necklace',
            price: 149.0,
            img:
                'https://cdn0.rubylane.com/shops/tropictradingco/0312-13.1L.jpg',
            stock: 3
        }
    ],

    tables: [
        {
            name: '',
            price: '',
            img: '',
            stock: ''
        },
        {
            name: '',
            price: '',
            img: '',
            stock: ''
        },
        {
            name: '',
            price: '',
            img: '',
            stock: ''
        },
        {
            name: '',
            price: '',
            img: '',
            stock: ''
        },
        {
            name: '',
            price: '',
            img: '',
            stock: ''
        },
        {
            name: '',
            price: '',
            img: '',
            stock: ''
        }
    ]
};

function makeNecklaceCards() {
    var count = 0;
    var merch = '';
    for (i = 0; i < merchandise.necklace.length; i++) {
        var neck =
            '<div class="w3-card-4"><center><h2>' +
            merchandise.necklace[count].name +
            '</h2><img src="' +
            merchandise.necklace[count].img +
            '"alt="Norway" style="width:100%"><div class=" w3-container w3-center"><p><i class="fa fa-usd" aria-hidden="true"></i> Price:$ ' +
            merchandise.necklace[count].price +
            '</p><p><i class="fa fa-shopping-basket" aria-hidden="true"></i> Stock:' +
            merchandise.necklace[count].stock +
            '</p></div></center></div>';
        merch += neck;
        count += 1;
    }
    return merch;
}
function FillNeck() {
    $('#myNeck').html(makeNecklaceCards());
}

function main() {
    FillNeck();
}

$(main);
