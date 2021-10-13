//{name: "", description: "", languages: [], link: ""},
const projects = [
    {name: "KingPass", description: "Apresento a você meu mais novo gerenciador de senhas, o KingPass, um simples gerenciador de senhas feito para qualquer um salvar suas senhas de foma segura e simples!", languages: ["HTML","CSS","NodeJS (Back-End | Front-End)","Bootstrap"], link: "https://kingpass.herokuapp.com/"},
    {name: "Arkab", description: "Este é um projeto de uma sala de bate papo bem simples, você entra coloca o nome que deseja usar e ja pode conversar com todos que estão na sala, porém ta bem no inicio, pretendo colocar mais funções.", languages: ["HTML", "CSS", "NodeJS (Back-End | Front-End)", "Bootstrap"], link: "https://arkab.herokuapp.com/"},
    {name: "Portifolio", description: "Esta é a segunda versão do meu portifolio, este mesmo que você está agora.", languages: ["HTML", "CSS", "NodeJS (Back-End | Front-End)", "Bootstrap"], link: "#"},
]

for(project of projects){
    $("#projects_contain").append(`
    <div class="col-md-6">
        <div class="card mb-4 shadow-sm bg-ultradark theme">
            <img class="card-img-top" alt="Print_${project.name}" style="height: 56,25%; width: 100%; display: block;" src="/src/images/${project.name.toLowerCase()}.png" data-holder-rendered="true">
            <div class="card-body">
                <div class="d-flex flex-row mb-2">
                    <h1 class="text-hide mr-2 mb-0"style="background-image: url('/src/images/icon_${project.name.toLowerCase()}.png'); background-size: 100%; width: 40px; height: 40px; border-radius: 20px;">${project.name}_Icon</h1>
                    <h2 class="text-white theme mb-0 align-middle">- ${project.name}</h2>
                </div>
                <p class="card-text text-white theme">${project.description}</p>
                <ul class="text-light theme" id="programming_languages_${project.name.toLowerCase()}">
                </ul>
                <div class="d-flex justify-content-between align-items-center">
                    <a target="_blank" href="${project.link}" style="margin-right: 10px;"><buttontype="button" class="btn btn-sm btn-outline-danger">Ver projeto</button></a>
                </div>
            </div>
        </div>
    </div>
    `);
    for(language of project.languages){
        $(`#programming_languages_${project.name.toLowerCase()}`).append(`<li>${language}</li>`)
    }

}