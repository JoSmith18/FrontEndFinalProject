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
    ]
};

function makeNecklaceCards() {
    for (i = 0; i < merchandise.length; i++) {
        '<div class="w3-card-4" style="width:50%"><center><h2>' +
            merchandise.necklace.name +
            '</h2></center><img src="' +
            merchandise.necklace.img +
            '"alt="Norway" style="width:100%"><div class="w3-container w3-center"><p>Price:' +
            merchandise.necklace.price +
            '</p><p>Stock:' +
            merchandise.necklace.stock +
            '</p></div></div>';
    }
}
function FillNeck() {
    $('#myNeck').html(
        '<div class="col-lg-3 col-sm-3"><h3><img src="' +
            +'">' +
            +'</h3><span>Price-' +
            +'</span><br>'
    );
}

function main() {}

$(main);
