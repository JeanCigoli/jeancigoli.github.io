$(document).ready(function(){

	const menus = document.querySelectorAll('.menu_itens');

	$(window).scroll(function(){ // função para pegar o movimento do scroll (barra de rolagem)
		var top = $(window).scrollTop();

		/* Criação do efeito de selecionar o menu */
		if(top >= 700 && top <= 1299) {
			$(menus[0]).addClass('active');
			$(menus[1]).removeClass('active');
		} else if (top >= 1300 && top <= 1999) {
			$(menus[1]).addClass('active');
			$(menus[0]).removeClass('active');
			$(menus[2]).removeClass('active');
		} else if (top >= 2000 && top <= 2599) {
			$(menus[2]).addClass('active');
			$(menus[1]).removeClass('active');
			$(menus[3]).removeClass('active');
		} else if (top >= 2600) {
			$(menus[3]).addClass('active');
			$(menus[2]).removeClass('active');
		} else {
			$(menus[0]).removeClass('active');
			$(menus[1]).removeClass('active');
			$(menus[2]).removeClass('active');
			$(menus[3]).removeClass('active');
		}

		if(top > 0){ 
			$("#caixa_nave").addClass("menu_bar");
		}else{
			$("#caixa_nave").removeClass("menu_bar");
		}

		if(top > 200){ // verifica a posição da página
			$("#seta").show(); // aqui vc aplica o fade no menu
		}else{
			$("#seta").hide();
		}


		if(top > 800){ 
			$(".caixa_formacao").addClass("acao"); 
		}else{
			$(".caixa_formacao").removeClass("acao");
		}

		if(top > 2150){ 
			$(".project1").addClass("acao"); 
		}else{
			$(".project1").removeClass("acao");
		}

		if(top > 1800){ 
			$(".html").show();
			$(".html").css("animation", "html 3s");
		}else if(top < 1350){
			$(".html").hide();
		}

		if(top > 1800){ 
			$(".java").show();
			$(".java").css("animation", "java 3s");; 
		}else if(top < 1350){
			$(".java").hide();
		}

		if(top > 1800){ 
			$(".javascript").show();
			$(".javascript").css("animation", "javascript 3s");;
		}else if(top < 1350){
			$(".javascript").hide();
		}

		if(top > 1800){
			$(".css").show();
			$(".css").css("animation", "css 3s");; 
		}else if(top < 1350){
			$(".css").hide();
		}

		if(top > 2150){ 
			$(".project1").addClass("acao"); 
		}else{
			$(".project1").removeClass("acao");
		}

	}); 
});