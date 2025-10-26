$(document).ready(function() {

    var $carousel = $(".imagem-central");

    $carousel.slick({
        autoplay:true,
        slidetoshow:1,
    });

    $(".menu").on("click",function(){
        $(".menu-lateral").toggleClass("ativo");
    })
    $(".botao-fechar").on("click",function(){
        $(".menu-lateral").removeClass("ativo");
    })
    
    $carousel.magnificPopup({
        delegate: 'a:not(.slick-cloned)',
        type: 'image',
        gallery:{
            enabled:true
        }
    });
    $(".menu-lateral #contato").on("click", function(event) {
        $(".menu-lateral").removeClass("ativo");
        event.preventDefault();
        
        let caminho = $("#container-about");
        $('html, body').animate({
            scrollTop: caminho.offset().top
        }, 800); 
    });
});
    $(".menu-lateral #sobre").on("click", function(event) {
        $(".menu-lateral").removeClass("ativo");
        event.preventDefault(); 
    
        let caminho = $("#container-about");
        $('html, body').animate({
            scrollTop: caminho.offset().top
        }, 800); 
    });
    $(".menu-lateral #social").on("click", function(event) {
        $(".menu-lateral").removeClass("ativo");
        event.preventDefault();
        
        let caminho = $("#container-about");
        $('html, body').animate({
            scrollTop: caminho.offset().top
        }, 800); 
    });
    $(".menu-lateral #endereco").on("click", function(event) {
        $(".menu-lateral").removeClass("ativo");
        event.preventDefault(); 

        let caminho = $("#container-about");
        $('html, body').animate({
            scrollTop: caminho.offset().top
        }, 800); 
    });
    $(".menu-lateral #termos-legais").on("click", function(event) {
        $(".menu-lateral").removeClass("ativo");
        event.preventDefault(); 

        let caminho = $("#container-about");
        $('html, body').animate({
            scrollTop: caminho.offset().top
        }, 800); 
    });

