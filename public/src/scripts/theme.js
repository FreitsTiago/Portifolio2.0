$('#chage_theme').click(function (e) {
    indentify_theme()
});

function indentify_theme() {
    theme = $('#theme').html();
    if (theme == 'light') {
        change_theme('dark')
    }
    if (theme == 'dark') {
        change_theme('light')
    }
}
function change_theme(to_theme) {
    if (to_theme == 'dark') {
        $('.bg-light').addClass('bg-ultradark');
        $('.bg-light').removeClass('bg-light');
        $('.bg-underlight').addClass('bg-dark');
        $('.bg-underlight').removeClass('bg-underlight');
        $('.text-dark').addClass('text-light');
        $('.text-dark').removeClass('text-dark');
        $('.text-black').addClass('text-white');
        $('.text-black').removeClass('text-black');
        $('.navbar-light').addClass('navbar-dark');
        $('.navbar-light').removeClass('navbar-light');
        $('.btn-dark').addClass('btn-light');
        $('.btn-dark').removeClass('btn-dark');
        $('.social-icons-dark').addClass('social-icons-light');
        $('.social-icons-dark').removeClass('social-icons-dark');
        $('#chage_theme').text('☀️');
        $('#theme').text('dark');
    }
    if (to_theme == 'light') {
        $('.bg-ultradark').addClass('bg-light');
        $('.bg-ultradark').removeClass('bg-ultradark');
        $('.bg-dark').addClass('bg-underlight');
        $('.bg-dark').removeClass('bg-dark');
        $('.text-light').addClass('text-dark');
        $('.text-light').removeClass('text-light');
        $('.text-white').addClass('text-black');
        $('.text-white').removeClass('text-white');
        $('.navbar-dark').addClass('navbar-light');
        $('.navbar-dark').removeClass('navbar-dark');
        $('.btn-light').addClass('btn-dark');
        $('.btn-light').removeClass('btn-light');
        $('.social-icons-light').addClass('social-icons-dark');
        $('.social-icons-light').removeClass('social-icons-light');
        $('#chage_theme').text('🌙');
        $('#theme').text('light');
    }
}