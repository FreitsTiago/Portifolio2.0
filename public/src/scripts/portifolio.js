// Controle do estilo do perfil de acordo com a largura
window.onresize = function () {
    adjust_profile();
};
function adjust_profile(){
    width = $(window).width();
    if (width < 770) {
        $('.perfil').addClass('text-center');
        $('.perfil').addClass('mb-5');
        $('.perfil').removeClass('text-left');
    } else {
        $('.perfil').removeClass('text-center');
        $('.perfil').removeClass('mb-5');
        $('.perfil').addClass('text-left');
    }
}

adjust_profile();