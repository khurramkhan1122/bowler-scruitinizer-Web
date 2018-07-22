
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','css/analytics.js','ga');
  
    ga('create', 'UA-77580321-1', 'auto');
    ga('send', 'pageview');

    $("#menu_item_home").click(function() {
        $('html, body').animate({
            scrollTop: $("#home").offset().top},
    'slow');
        
    });
    $("#menu_item_product").click(function() {
        $('html, body').animate({
            scrollTop: $("#product").offset().top-100},
    'slow');
        
    });
    $("#menu_item_Asim").click(function() {
        $('html, body').animate({
            scrollTop: $("#Asim").offset().top-230},
    'slow');
        
    });
    $("#menu_item_features").click(function() {
        $('html, body').animate({
            scrollTop: $("#features").offset().top-100},
    'slow');
        
    });
    $("#menu_item_download").click(function() {
        $('html, body').animate({
            scrollTop: $("#download").offset().top-100},
    'slow');
        
    });
    $("#menu_item_contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top-100},
    'slow');
        
    });
    $("#arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#home").offset().top},
    'slow');
        
    });