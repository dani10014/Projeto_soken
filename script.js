$(document).ready(function() {

    $(document).on("click", function(event) {
        const $target = $(event.target);
        if (!$target.closest('.menu-lateral').length && !$target.closest('.menu').length) {
            $('.menu-lateral').removeClass('ativo');
        }
    });

    var $carousel = $(".imagem-central");

    $carousel.slick({
        autoplay:true,
        slidetoshow:1,
    });

    
    $(".menu").on("click",function(e){
        $(".menu-lateral").toggleClass("ativo");
        e.stopPropagation();
    });
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

    $(".menu-lateral .secao-links a").on("click", function(event) {
        $(".menu-lateral").removeClass("ativo");
        event.preventDefault();
        
        let caminho = $("#container-about");
        $('html, body').animate({
            scrollTop: caminho.offset().top
        }, 800); 
    });
})