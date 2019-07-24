const $botaoGira = document.querySelector("#gira");
const $SkillsFrente = document.querySelector("#caixa_skills");
const $SkillsTras = document.querySelector("#caixa_skills_back");

let i = 0;

$botaoGira.addEventListener("click", () => {

    if(i == 0){
        $SkillsFrente.style.transform = "rotateX(-90deg)";
        $SkillsFrente.style.transition = "all 1s";
        $SkillsTras.style.transform = "rotateX(0deg)";
        $SkillsTras.style.transition = "all 1s";
        i = 1
    } else if(i = 1){
        $SkillsFrente.style.transform = "rotateX(0deg)";
        $SkillsFrente.style.transition = "all 1s";
        $SkillsTras.style.transform = "rotateX(90deg)";
        $SkillsTras.style.transition = "all 1s";
        i = 0;
    }

})