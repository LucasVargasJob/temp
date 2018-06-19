function carregaRotasSelect(){
	
	select = document.getElementById('listaRotas');
	
	for (var i = 0 ; i<=rotas.length ; i++) {
		var opt = document.createElement('option');
		opt.value = rotas[i]['cod_rota'];
		opt.innerHTML = rotas[i]['nome'];
		select.appendChild(opt);
	}
}

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var botaoCadastrar = document.getElementById("cadastrarDesenhoRota");
var span = document.getElementsByClassName("close")[0];

botaoCadastrar.onclick = function() {
    var nome = document.getElementById("nomeRota").value;
	
	    var novaRota = {
            "cod_rota": 4,
            "nome": nome,
            "pontos": points  
        };

        select = document.getElementById('listaRotas');
        var opt = document.createElement('option');
        opt.value = novaRota['cod_rota'];
        opt.innerHTML = novaRota['nome'];
        select.appendChild(opt);
		modal.style.display = "none";
		alert("Rota compartilhada com sucesso.");
        rotas.push(novaRota);
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

initMap();
carregaRotasSelect();