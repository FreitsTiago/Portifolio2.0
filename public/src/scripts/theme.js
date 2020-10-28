// Template da lista de temas {light:'',dark:''}
var themes = [{light:'bg-light',dark:'bg-ultradark'},{light:'bg-underlight',dark:'bg-dark'}, {light:'text-dark',dark:'text-light'}, {light:'text-black',dark:'text-white'}, {light:'navbar-light',dark:'navbar-dark'}, {light:'btn-dark',dark:'btn-light'},{light:'social-icons-dark',dark:'social-icons-light'}]

window.onload = function (){
    if(localStorage.theme == 'light'){
        change_theme('light')
    }
    if(localStorage.theme == 'dark'){
        change_theme('dark')
    }
}

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
    if(to_theme == 'light'){
        for(nowtheme of themes){
            $('.'+nowtheme.dark).addClass(nowtheme.light);
            $('.'+nowtheme.dark).removeClass(nowtheme.dark);
        }
        $('#chage_theme').text('🌙');
        $('#theme').text('light');
        localStorage.setItem('theme', 'light');
    }
    if(to_theme == 'dark'){
        for(nowtheme of themes){
            $('.'+nowtheme.light).addClass(nowtheme.dark);
            $('.'+nowtheme.light).removeClass(nowtheme.light);
        }
        $('#chage_theme').text('☀️');
        $('#theme').text('dark');
        localStorage.setItem('theme', 'dark');
    }
}