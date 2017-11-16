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
            name: 'Barstow Trestle Extension Table',
            price: 2400,
            img:
                'https://cdn.shopify.com/s/files/1/0809/3571/products/trestle-table-barstow-trestle-extension-table-2.jpg?v=1492616590',
            stock: 8
        },
        {
            name: 'Fossilized Clam Lava Cofee Table',
            price: 2528.0,
            img: 'http://mecox.com/images/uploads/pets/38885/dsc_0368.jpg',
            stock: 4
        },
        {
            name: 'Wood Slab Table',
            price: 19500.0,
            img:
                'https://i.pinimg.com/736x/c0/74/b2/c074b2e79b53070118cf322e38ba8a3c--wood-slab-table-wooden-tables.jpg',
            stock: 1
        },
        {
            name: 'Rustic Farmhouse Table',
            price: 150.0,
            img:
                'http://lonestarborger.com/wp-content/uploads/2017/09/rustic-farmhouse-dining-table-plans.jpg',
            stock: 19
        },
        {
            name: 'Natural White Oak with Turquoise Inlay Dining Table',
            price: 2400.0,
            img:
                'https://img0.etsystatic.com/177/0/9010447/il_570xN.1195275672_j0mo.jpg',
            stock: 8
        },
        {
            name: 'Large Teak Root Coffee Table',
            price: 1199.0,
            img:
                'https://www.uncommongoods.com/images/items/26000/26084_1_1200px.jpg',
            stock: 24
        }
    ],
    rings: [
        {
            name: 'Twig & Leaf Bridal Set',
            price: 1500,
            img:
                'https://img0.etsystatic.com/164/1/6050455/il_570xN.1205949726_1o6x.jpg',
            stock: 1
        },
        {
            name: 'Slim Dragon Gold & Silver Ring',
            price: 395,
            img:
                'https://media-jrdunnjewelers.netdna-ssl.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/m/bm65089bl.jpg',
            stock: 5
        },
        {
            name: 'Copper Elephant Ring',
            price: 38.0,
            img:
                'https://img1.etsystatic.com/011/1/5407252/il_340x270.467233077_ddxe.jpg',
            stock: 27
        },
        {
            name: 'Scottish Thistle Ring',
            price: 135.0,
            img:
                'https://img1.etsystatic.com/122/0/7096101/il_fullxfull.857239243_4mtq.jpg',
            stock: 12
        },
        {
            name: 'Spinner Silver Heart Ring',
            price: 149.0,
            img:
                'https://img0.etsystatic.com/000/0/5589439/il_fullxfull.276977540.jpg',
            stock: 10
        },
        {
            name: 'Thistle Moissanite Engagement Ring',
            price: 427.0,
            img:
                'https://img0.etsystatic.com/119/0/7096101/il_340x270.998680116_dv0j.jpg',
            stock: 8
        }
    ]
};

function makeRingCards() {
    var count = 0;
    var merch = '';
    for (i = 0; i < merchandise.tables.length; i++) {
        var neck =
            '<div class="col-sm-4 col-lg-4"><div class="panel panel-danger"><div class="panel-heading">' +
            merchandise.rings[count].name +
            '</div><div class="panel-body"><img src="' +
            merchandise.rings[count].img +
            '" class="img-responsive img" alt="Image"></div><div class="panel-footer"><p><i class="fa fa-usd" aria-hidden="true"></i> Price:$ ' +
            merchandise.rings[count].price +
            '</p><p><i class="fa fa-shopping-basket" aria-hidden="true"></i> Stock:' +
            merchandise.rings[count].stock +
            '</p></div></div></div>';
        merch += neck;
        count += 1;
    }
    return merch;
}
function makeTableCards() {
    var count = 0;
    var merch = '';
    for (i = 0; i < merchandise.tables.length; i++) {
        var neck =
            '<div class="col-sm-4 col-lg-4"><div class="panel panel-danger"><div class="panel-heading">' +
            merchandise.tables[count].name +
            '</div><div class="panel-body"><img src="' +
            merchandise.tables[count].img +
            '" class="img-responsive img" alt="Image"></div><div class="panel-footer"><p><i class="fa fa-usd" aria-hidden="true"></i> Price:$ ' +
            merchandise.tables[count].price +
            '</p><p><i class="fa fa-shopping-basket" aria-hidden="true"></i> Stock:' +
            merchandise.tables[count].stock +
            '</p></div></div></div>';

        merch += neck;
        count += 1;
    }
    return merch;
}

function makeNecklaceCards() {
    var count = 0;
    var merch = '';
    for (i = 0; i < merchandise.necklace.length; i++) {
        var neck =
            '<div class="col-sm-4 col-lg-4"><div class="panel panel-danger"><div class="panel-heading">' +
            merchandise.necklace[count].name +
            '</div><div class="panel-body"><img src="' +
            merchandise.necklace[count].img +
            '" class="img-responsive img" alt="Image"></div><div class="panel-footer"><p><i class="fa fa-usd" aria-hidden="true"></i> Price:$ ' +
            merchandise.necklace[count].price +
            '</p><p><i class="fa fa-shopping-basket" aria-hidden="true"></i> Stock:' +
            merchandise.necklace[count].stock +
            '</p></div></div></div>';
        merch += neck;
        count += 1;
    }
    return merch;
}
function FillNeck() {
    $('#myNeck').html(makeNecklaceCards());
    $('#myTable').html(makeTableCards());
    $('#myRings').html(makeRingCards());
}

function showMerchandise() {
    $('.merchandise')
        .removeClass('hide')
        .addClass('show');

    $('#Sell')
        .removeClass('show')
        .addClass('hide');
}

function SellForm() {
    $('#Merchandise')
        .removeClass('show')
        .addClass('hide');
    $('#Sell')
        .removeClass('hide')
        .addClass('show');
}
function main() {
    FillNeck();
}

$(main);
