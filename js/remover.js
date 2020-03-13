var paciente = document.querySelectorAll(".paciente");

paciente.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("fui clicado")
        this.remove();
    });
})