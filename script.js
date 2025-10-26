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
        delegate: 'a:not(.slick-cloned)', // Delega o clique para os links que NÃO são clones do Slick
        type: 'image',
        gallery:{
            enabled:true
        }
    });
})