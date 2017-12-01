merchandise = [
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
        img: 'https://cdn0.rubylane.com/shops/tropictradingco/0312-13.1L.jpg',
        stock: 3
    },

    {
        name: 'Barstow Trestle Extension Table',
        price: 2400,
        img:
            'https://cdn.shopify.com/s/files/1/0809/3571/products/trestle-table-barstow-trestle-extension-table-2.jpg?v=1492616590',
        stock: 8
    },
    {
        name: 'Fossilized Clam Lava Table',
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
        name: 'Natural White Oak Dining Table',
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
    },
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
        name: 'Thistle Moissanite Ring',
        price: 427.0,
        img:
            'https://img0.etsystatic.com/119/0/7096101/il_340x270.998680116_dv0j.jpg',
        stock: 8
    }
];

var shopping_cart = [];
var total = 0;

function getImgURL() {
    $('#pic').on('click', function(event) {
        var img = URL.createObjectURL(event.target.files[0]);
        return img;
    });
}

function addToMerch() {
    var price = Number($('#price').val());
    if (!Number.isNaN(price)) {
        $('[data-toggle="popover"]').popover();
        merchandise.push({
            name: $('#name').val(),
            price: $('#price').val(),
            img: '',
            stock: 1
        });
        $('#name').val('');
        $('#price').val('');
        $('#pic').val('');
        $('.product').html(makeCards(merchandise));
    } else {
        $('.btn').removeClass('data-content');
        $('#price')
            .addClass('has-error')
            .prepend('<h3>Must Be A Number</h3>');
    }
}

function showHome() {
    $('#Merchandise')
        .removeClass('show')
        .addClass('hide');
    $('#Sell')
        .removeClass('show')
        .addClass('hide');
    $('#CheckOut')
        .removeClass('show')
        .addClass('hide');
    $('#Home')
        .removeClass('hide')
        .addClass('show');
}
function showCheckout() {
    $('#Merchandise')
        .removeClass('show')
        .addClass('hide');
    $('#Sell')
        .removeClass('show')
        .addClass('hide');
    $('#CheckOut')
        .removeClass('hide')
        .addClass('show');
    $('#Home')
        .removeClass('show')
        .addClass('hide');
}

function subtractStock(num) {
    merchandise[num].stock -= 1;
    $(String(num)).popover();
}

function addtoCart(num) {
    subtractStock(num);
    shopping_cart.push(merchandise[num]);
    $('#CheckOut').prepend(
        '<div class="col-sm-4 col-lg-4"><div class="panel panel-default"><div class="panel-heading">' +
            merchandise[num].name +
            '</div><div class="panel-body"><img src="' +
            merchandise[num].img +
            '" class="img-responsive img" alt="Image"></div></div></div>'
    );

    total += merchandise[num].price;

    $('#total').html(
        '<center><h5>Total: $' + total.toFixed(2) + '</h5></center>'
    );
    setTimeout(function() {
        main();
    }, 2000);
}

function readURL(input) {
    // FILES.readAsDataURL(input);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#pic')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };
        console.log(reader.readAsDataURL(input.files[0]));
        return reader.readAsDataURL(input.files[0]);
    }
    console.log(input);
}

function makeCards() {
    var merch = '';
    for (i = 0; i < merchandise.length; i++) {
        var neck =
            '<div class="col-sm-4 col-lg-4"><div class="panel panel-default"><div class="panel-heading">' +
            merchandise[i].name +
            '</div><div class="panel-body"><img src="' +
            merchandise[i].img +
            '" class="img-responsive img" alt="Image"></div><div class="panel-footer"><p><i class="fa fa-usd" aria-hidden="true"></i> Price:$ ' +
            merchandise[i].price +
            '</p><p><i class="fa fa-shopping-basket" aria-hidden="true"></i> Stock:' +
            merchandise[i].stock +
            '</p><button class="';
        neck +=
            merchandise[i].stock > 0
                ? 'btn-primary btn-xs'
                : 'btn-secondary btn-xs';
        neck +=
            '" data-container="body" tabindex="0" data-toggle="popover" data-placement="bottom" data-content="' +
            merchandise[i].name +
            'has been added to the cart' +
            '" data-original-title="Success" data-trigger="focus" href="#" onclick="addtoCart(' +
            i +
            ')"id="' +
            i +
            '"';
        neck += merchandise[i].stock > 0 ? '' : ' disabled';
        neck +=
            '><i class="fa fa-shopping-cart" aria-hidden="true"></i>Add-to-Cart</button></div></div></div>';
        merch += neck;
    }

    return merch;
}

function showMerchandise() {
    $('#CheckOut')
        .removeClass('show')
        .addClass('hide');
    $('.merchandise')
        .removeClass('hide')
        .addClass('show');

    $('#Sell')
        .removeClass('show')
        .addClass('hide');
    $('#Home')
        .removeClass('show')
        .addClass('hide');
}

function SellForm() {
    $('#CheckOut')
        .removeClass('show')
        .addClass('hide');
    $('#Merchandise')
        .removeClass('show')
        .addClass('hide');
    $('#Sell')
        .removeClass('hide')
        .addClass('show');
    $('#Home')
        .removeClass('show')
        .addClass('hide');
}
function main() {
    $('.product').html(makeCards());
    $('[data-toggle="popover"]').popover({
        placement: 'bottom',
        delay: {
            show: 200,
            hide: 100
        }
    });
    $('[data-toggle="popover"]').click(function() {
        setTimeout(function() {
            $('.popover').fadeOut('slow');
        }, 2000);
    });
}

$(main);
