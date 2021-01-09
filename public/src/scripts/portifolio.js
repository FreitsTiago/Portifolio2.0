var xhr = new XMLHttpRequest();

// Controle do estilo do perfil de acordo com a largura
window.onresize = function () {
    adjust_profile();
};
function adjust_profile() {
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

$('#send_mail').click(function () {
    var name = $('#form_name').val()
    var email = $('#form_email').val()
    var msg = $('#form_msg').val()
    if (name != '' && email != '' && msg != '') {
        var data = { name: $('#form_name').val(), email: $('#form_email').val(), msg: $('#form_msg').val() };
        fetch('/send_email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        $('#form_name').val('');
        $('#form_email').val('');
        $('#form_msg').val('');
        $('#sucees_email').show();
    } else {
        alert('Prencha o formulario corretamente!')
    };
});



