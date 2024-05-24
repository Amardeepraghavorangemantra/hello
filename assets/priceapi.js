jQuery(document).ready(function ($) {
  $.ajax({
    url: `https://uat-ccp-api.tvsmotor.net/catalogs/?productType=Vehicle&market=Domestic&industry=2Wheeler&state=Karnataka&cityName=Bengaluru`,
    method: "GET",
    dataType: "json",
    success: function (productdata) {
     console.log(productdata);
      let dynamicItem = productdata.categories[1].catalogItems;
      let titlematch;
      product_title =  jQuery('.product__title.cstm_product_title').attr('data-product-title');
      // console.log("product_title>>>>>", product_title);
      
      jQuery.each(dynamicItem, function(index, productdetail) {
        titlematch = productdetail.productName;
        // console.log("titlematch>>>", titlematch);
        if(titlematch == product_title) {
        console.log("titlematch>>>"+ titlematch + "<======>"+ product_title);
        jQuery('.product__text.inline-richtext').html("<p>" + productdetail.variant + "</p>");
        jQuery('.product__title').html("<h1>" + productdetail.productName + "</h1>");
        jQuery('span.price-item.price-item--regular').text("Rs. " + " " + productdetail.price.onroadprice);
        jQuery('span.price-item.price-item--sale.price-item--last').text("Rs. " + " " + productdetail.price.ex_showroomprice);
        return false;
        }
        
      });
    }
  });
});
