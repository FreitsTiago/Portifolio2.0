const social_list = [
    {name: "GitHub", link: "https://github.com/FreitsTiago"},
    {name: "Instagram", link: "https://www.instagram.com/freits_tiago"},
    {name: "Telegram", link: "https://t.me/freitstiago"},
    {name: "Portifolio", link: "http://tiagomfreitas.xyz/"},
]

for(social of social_list){
    $("#social_container").append(`
    <div class="col">
       <div class="card card-cover h-100 overflow-hidden text-white bg-black rounded-5>
           <div class="d-flex flex-column h-100 p-2 text-white">
               <ul class="d-flex list-unstyled mb-0 p-2">
                   <li class="me-3">
                       <img src="http://storege.tiagomfreitas.xyz/link-page/${social.name.toLowerCase()}.png" alt="${social.name}" width="80" height="80" class="rounded-circle">
                   </li>
                   <li class="d-flex align-items-center me-auto">
                       <small style="font-size: 30px;">${social.name}</small>
                   </li>
                   <li class="d-flex align-items-center me-3">
                       <a class="btn btn-danger" href="${social.link}">Ir</a>
                   </li>
               </ul>
           </div>
       </div>
    </div>
    `);
}