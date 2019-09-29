/* jslint browser: true*/
/*global $*/

// https://github.com/jasonmoo/t.js
(function(){function c(a){this.t=a}function l(a,b){for(var e=b.split(".");e.length;){if(!(e[0]in a))return!1;a=a[e.shift()]}return a}function d(a,b){return a.replace(h,function(e,a,i,f,c,h,k,m){var f=l(b,f),j="",g;if(!f)return"!"==i?d(c,b):k?d(m,b):"";if(!i)return d(h,b);if("@"==i){e=b._key;a=b._val;for(g in f)f.hasOwnProperty(g)&&(b._key=g,b._val=f[g],j+=d(c,b));b._key=e;b._val=a;return j}}).replace(k,function(a,c,d){return(a=l(b,d))||0===a?"%"==c?(new Option(a)).innerHTML.replace(/"/g,"&quot;"):
    a:""})}var h=/\{\{(([@!]?)(.+?))\}\}(([\s\S]+?)(\{\{:\1\}\}([\s\S]+?))?)\{\{\/\1\}\}/g,k=/\{\{([=%])(.+?)\}\}/g;c.prototype.render=function(a){return d(this.t,a)};window.t=c})();
// end of 't';

Number.prototype.to_$ = function () {
    return "₹" + parseFloat( this ).toFixed(2);
};
String.prototype.strip$ = function () {
    return this.split("₹")[1];
};


var app = {

    shipping : 5.00,
    products : [
        {
            "name" : "Provider Name",
            "breakfast_price" : "1.95",
            "lunch_price" : "19.90",
            "dinner_price" : "29.95",
            "all" : "50.00"
        },
        {
            "name" : "Provider Name",
            "breakfast_price" : "9.95",
            "lunch_price" : "39.95",
            "dinner_price" : "49.95",
            "all" : "60.00"
        },
        {
            "name" : "Provider Name",
            "breakfast_price" : "59.95",
            "lunch_price" : "69.95",
            "dinner_price" : "79.95",
            "all" : "70.00"
        },
        {
            "name" : "Provider Name",
            "breakfast_price" : "89.95",
            "lunch_price" : "99.95",
            "dinner_price" : "12.95",
            "all" : "80.00"
        }
    ],




    removeProduct: function () {
        "use strict";

        var item = $(this).closest(".shopping-cart--list-item");

        item.addClass("closing");
        window.setTimeout( function () {
            item.remove();
            app.updateTotals();
        }, 500); // Timeout for css animation
    },

    addProduct: function () {
        "use strict";

        var qtyCtr = $(this).prev(".product-qty"),
            quantity = parseInt(qtyCtr.html(), 10) + 1;

        app.updateProductSubtotal(this, quantity);
    },

    subtractProduct: function () {
        "use strict";

        var qtyCtr = $(this).next(".product-qty"),
            num = parseInt(qtyCtr.html(), 10) - 1,
            quantity = num <= 0 ? 0 : num;

        app.updateProductSubtotal(this, quantity);
    },

    checkUpdate: function() {
        "use strict";
        var context = $(this).closest("li");
        var productPrice = 0;

        $("input.form-check-input:checked", context).each(function() {
            productPrice += parseFloat($(this).data("price"));
        });

        var productQty = parseInt(context.find(".product-qty").html(), 10);

        var subtotalCtr = $(".product-total-price", context);
        subtotalCtr.html((productPrice * productQty).to_$());

        app.updateTotals();
    },

    updateProductSubtotal: function(context, quantity) {
        "use strict";


        var ctr = $(context).closest(".product-modifiers"),
            li = ctr.closest("li");
        var total = 0;
        $("input.form-check-input:checked", li).each(function() {
            total += parseFloat($(this).data("price"));
        });
        var productQtyCtr = ctr.find(".product-qty");

        var subtotalCtr = ctr.find(".product-total-price"),
            subtotalPrice = quantity * total;

        productQtyCtr.html(quantity);
        subtotalCtr.html(subtotalPrice.to_$());

        app.updateTotals();
    },



    updateTotals: function () {
        "use strict";

        var products = $(".shopping-cart--list-item"),
            subtotal = 0,
            shipping;

        for (var i = 0; i < products.length; i += 1) {
            subtotal += parseFloat( $(products[i]).find(".product-total-price").html().strip$() );
        }

        shipping = (subtotal > 0 && subtotal < (100 / 1.06)) ? app.shipping : 0;

        $("#subtotalCtr").find(".cart-totals-value").html( subtotal.to_$() );
        $("#taxesCtr").find(".cart-totals-value").html( (subtotal * 0.06).to_$() );
        $("#totalCtr").find(".cart-totals-value").html( (subtotal * 1.06 + shipping).to_$() );
        $("#shippingCtr").find(".cart-totals-value").html( shipping.to_$() );
    },

    attachEvents: function () {
        "use strict";

        $(".product-remove").on("click", app.removeProduct);
        $(".product-plus").on("click", app.addProduct);
        $(".product-subtract").on("click", app.subtractProduct);
        $(".form-check-input").on("click",app.checkUpdate);

    },



    renderTemplates: function () {
        "use strict";

        var products = app.products,
            content = [],
            template = new t( $("#shopping-cart--list-item-template").html() );

        for (var i = 0; i < products.length; i += 1) {
            content[i] = template.render(products[i]);
        }

        $("#shopping-cart--list").html(content.join(""));
    },


};
app.products = app.products.map(({name, breakfast_price, lunch_price, dinner_price}) =>
    ({
        name,
        breakfast_price,
        lunch_price,
        dinner_price,
        "all": ((+breakfast_price) + (+lunch_price) + (+dinner_price)).toFixed(2)
    }));

//code to make the value of "all" the sum of previous prices




app.renderTemplates();
app.attachEvents();
app.updateTotals();

