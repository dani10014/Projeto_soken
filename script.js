$(document).ready(function() {

    $(".imagem-central").slick({
        autoplay:true,
    });
    $(".menu").on("click",function(){
        $(".menu-lateral").toggleClass("ativo");
    })
    $(".botao-fechar").on("click",function(){
        $(".menu-lateral").removeClass("ativo");
    })
})