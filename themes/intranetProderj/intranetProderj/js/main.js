function myFunction(){document.getElementById("acessibilidade-myDropdown").classList.toggle("acessibilidade-show")}function openNav(){document.getElementById("myNav").style.display="block"}function closeNav(){document.getElementById("myNav").style.display="none"}jQuery(document).ready(function(o){}),function(o){o(window).bind("load",function(){})}(jQuery),function(o){o("#contraste").click(function(e){e.preventDefault(),o(".menu, body, .footer").stop().toggleClass("bgContrast")})}(jQuery),function(o){o(".menu-mobile").click(function(){o(".menu-mobile").fadeOut(1),o(".homemenu").slideToggle("slow"),o(".menu-mobile-close").css("display","block")}),o(".menu-mobile-close").click(function(){o(".menu-mobile-close").fadeOut(1),o(".homemenu").slideToggle("slow"),o(".menu-mobile").css("display","block")})}(jQuery),window.onclick=function(o){if(!o.target.matches(".acessibilidade-dropbtn")){var e,s=document.getElementsByClassName("acessibilidade-dropdown-content");for(e=0;e<s.length;e++){var i=s[e];i.classList.contains("acessibilidade-show")&&i.classList.remove("acessibilidade-show")}}},function(o){o(window).scroll(function(){o(window).scrollTop()>100?o("#back2Top").fadeIn():o("#back2Top").fadeOut()}),o(document).ready(function(){o("#back2Top").click(function(e){return e.preventDefault(),o("html, body").animate({scrollTop:0},"slow"),!1})}),o(window).scroll(function(){o(window).scrollTop()>100?o("#voltaTopo").fadeIn():o("#voltaTopo").fadeOut()}),o(document).ready(function(){o("#voltaTopo").click(function(e){return e.preventDefault(),o("html, body").animate({scrollTop:0},"slow"),!1})})}(jQuery);var size=1,sizePainel=2,noticiasH1=1.5,noticiasH4=.8,vamosvirarojogoh1=16,vamosvirarojogospan=1,telefonesuteis=.9,footerh1=1.5,footerspan=.8,sectioncontainer=1;!function(o){o("#tamanhofonte").click(function(){var e=.1;size<1.5?(size+=e,sizePainel+=e,noticiasH1+=e,noticiasH4+=e,vamosvirarojogoh1+=e,telefonesuteis+=e,footerh1+=e,footerspan+=e,vamosvirarojogospan+=e,sectioncontainer+=e):(size=1,sizePainel=2,titlesliderh1=1.5,noticiasH1=1.5,noticiasH4=.8,telefonesuteis=.9,footerh1=1.5,footerspan=.8,vamosvirarojogoh1=16,vamosvirarojogospan=1,sectioncontainer=1),o(".section-container").css("font-size",sectioncontainer+"em"),o("section").css("font-size",size+"em"),o(".desc-title-slider span").css("font-size",sizePainel+"em"),o(".title-slider h1").css("font-size",size+"em"),o("section h1").css("font-size",noticiasH1+"em"),o("section h4").css("font-size",noticiasH4+"em"),o("section .desc-slider2-conteudo h1").css("font-size",vamosvirarojogoh1+"em"),o("section .desc-slider2-texto span").css("font-size",vamosvirarojogospan+"em"),o("section .telefones-uteis-wrap").css("font-size",telefonesuteis+"em"),o(".footer h1").css("font-size",footerh1+"em"),o(".footer span").css("font-size",footerspan+"em")})}(jQuery);

/*Author Gianlucca Augusto <gianlucca.augusto@extreme.digital>
 version 1.1
 copyright Proderj 2021.*/

(function ($) {
    $("#edit-submit-noticias-principal").prop('value', 'Aplicar');
})(jQuery);

var toogle1 = false;
var toogle2 = false;
var toogle3 = false;
var toogle4 = false;
var toogle5 = false;

/* formularios */
var toogle6 = false;
var toogle7 = false;
var toogle8 = false;
var toogle9 = false;

/* mapeamento */
var toogle10 = false;
var toogle11 = false;
var toogle12 = false;
var toogle13 = false;
var toogle14 = false;
var toogle15 = false;
var toogle16 = false;
var toogle17 = false;
var toogle18 = false;
var toogle19 = false;
var toogle20 = false;
var toogle21 = false;

/* normas */
var toogle22 = false;
var toogle23 = false;

/* quem & onde */
var toogle24 = false;

/* reservas */
var toogle25 = false;

/* Geral */
var toogle26 = false;
var toogle27 = false;
var toogle28 = false;
var toogle29 = false;
var toogle30 = false;
var toogle31 = false;
var toogle32 = false;
var toogle33 = false;
var toogle34 = false;
var toogle35 = false;

/*Comunicados */
var toogle36 = false

    window.onload = function (){

        document.getElementById('indexBloco1').onclick = function()
        {
            if (toogle1 == false){
                document.getElementById('indexBloco1Sub').style.display = 'block';

                document.getElementById('indexBloco1').style.backgroundColor = 'rgb(0, 91, 156)';
                document.getElementById('bloco1h2').style.color = 'white';
                document.getElementById('indexBlocoConteudo1').style.backgroundColor = '#00508a';
                document.getElementById('bloco1W').style.display = 'block';
                document.getElementById('bloco1B').style.display = 'none';

                document.getElementById('indexBloco2Sub').style.display = 'none';
                document.getElementById('indexBloco2').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo2').style.backgroundColor = 'white';
                document.getElementById('bloco2h2').style.color = 'black';
                document.getElementById('bloco2B').style.display = 'block';
                document.getElementById('bloco2W').style.display = 'none';

                document.getElementById('indexBloco3Sub').style.display = 'none';
                document.getElementById('indexBloco3').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo3').style.backgroundColor = 'white';
                document.getElementById('bloco3h2').style.color = 'black';
                document.getElementById('bloco3B').style.display = 'block';
                document.getElementById('bloco3W').style.display = 'none';
                
                document.getElementById('indexBloco4Sub').style.display = 'none';
                document.getElementById('bloco4B').style.display = 'block';
                document.getElementById('bloco4W').style.display = 'none';
                document.getElementById('indexBloco4').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo4').style.backgroundColor = 'white';
                document.getElementById('bloco4h2').style.color = 'black';

                document.getElementById('indexBloco5Sub').style.display = 'none';
                document.getElementById('indexBloco5').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo5').style.backgroundColor = 'white';
                document.getElementById('bloco5h2').style.color = 'black';
                document.getElementById('bloco5B').style.display = 'block';
                document.getElementById('bloco5W').style.display = 'none';

                toogle2 = false;
                toogle3 = false;
                toogle4 = false;
                toogle5 = false;
                
            }

            if (toogle1 == true){
                document.getElementById('indexBloco1Sub').style.display = 'none';
                document.getElementById('indexBloco1').style.backgroundColor = 'white';
                    
            }
            toogle1 = !toogle1;
        }

        document.getElementById('indexBloco2').onclick = function()
        {
            if (toogle2 == false){
                document.getElementById('indexBloco2Sub').style.display = 'block';

                document.getElementById('indexBloco2').style.backgroundColor = 'rgb(0, 91, 156)';
                document.getElementById('bloco2h2').style.color = 'white';
                document.getElementById('indexBlocoConteudo2').style.backgroundColor = '#00508a';
                document.getElementById('bloco2W').style.display = 'block';
                document.getElementById('bloco2B').style.display = 'none';

                document.getElementById('indexBloco1Sub').style.display = 'none';
                document.getElementById('indexBloco1').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo1').style.backgroundColor = 'white';
                document.getElementById('bloco1h2').style.color = 'black';
                document.getElementById('bloco1B').style.display = 'block';
                document.getElementById('bloco1W').style.display = 'none';

                document.getElementById('indexBloco3Sub').style.display = 'none';
                document.getElementById('indexBloco3').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo3').style.backgroundColor = 'white';
                document.getElementById('bloco3h2').style.color = 'black';
                document.getElementById('bloco3B').style.display = 'block';
                document.getElementById('bloco3W').style.display = 'none';

                document.getElementById('indexBloco4Sub').style.display = 'none';
                document.getElementById('indexBloco4').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo4').style.backgroundColor = 'white';
                document.getElementById('bloco4h2').style.color = 'black';
                document.getElementById('bloco4B').style.display = 'block';
                document.getElementById('bloco4W').style.display = 'none';

                document.getElementById('indexBloco5Sub').style.display = 'none';
                document.getElementById('indexBloco5').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo5').style.backgroundColor = 'white';
                document.getElementById('bloco5h2').style.color = 'black';
                document.getElementById('bloco5B').style.display = 'block';
                document.getElementById('bloco5W').style.display = 'none';

                toogle1 = false;
                toogle3 = false;
                toogle4 = false;
                toogle5 = false;
                
            }

            if (toogle2 == true){
                document.getElementById('indexBloco2Sub').style.display = 'none';
                document.getElementById('indexBloco2').style.backgroundColor = 'white';
                    
            }
            toogle2 = !toogle2;
        }

        document.getElementById('indexBloco3').onclick = function()
        {
            if (toogle3 == false){
                document.getElementById('indexBloco3Sub').style.display = 'block';

                document.getElementById('indexBloco3').style.backgroundColor = 'rgb(0, 91, 156)';
                document.getElementById('bloco3h2').style.color = 'white';
                document.getElementById('indexBlocoConteudo3').style.backgroundColor = '#00508a';
                document.getElementById('bloco3W').style.display = 'block';
                document.getElementById('bloco3B').style.display = 'none';

                document.getElementById('indexBloco1Sub').style.display = 'none';
                document.getElementById('indexBloco1').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo1').style.backgroundColor = 'white';
                document.getElementById('bloco1h2').style.color = 'black';
                document.getElementById('bloco1B').style.display = 'block';
                document.getElementById('bloco1W').style.display = 'none';

                document.getElementById('indexBloco2Sub').style.display = 'none';
                document.getElementById('indexBloco2').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo2').style.backgroundColor = 'white';
                document.getElementById('bloco2h2').style.color = 'black';
                document.getElementById('bloco2B').style.display = 'block';
                document.getElementById('bloco2W').style.display = 'none';

                document.getElementById('indexBloco4Sub').style.display = 'none';
                document.getElementById('indexBloco4').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo4').style.backgroundColor = 'white';
                document.getElementById('bloco4h2').style.color = 'black';
                document.getElementById('bloco4B').style.display = 'block';
                document.getElementById('bloco4W').style.display = 'none';

                document.getElementById('indexBloco5Sub').style.display = 'none';
                document.getElementById('indexBloco5').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo5').style.backgroundColor = 'white';
                document.getElementById('bloco5h2').style.color = 'black';
                document.getElementById('bloco5B').style.display = 'block';
                document.getElementById('bloco5W').style.display = 'none';

                toogle1 = false;
                toogle2 = false;
                toogle4 = false;
                toogle5 = false;
                
            }

            if (toogle3 == true){
                document.getElementById('indexBloco3Sub').style.display = 'none';
                document.getElementById('indexBloco3').style.backgroundColor = 'white';
                    
            }
            toogle3 = !toogle3;
        }

        document.getElementById('indexBloco4').onclick = function()
        {
            if (toogle4 == false){
                document.getElementById('indexBloco4Sub').style.display = 'block';

                document.getElementById('indexBloco4').style.backgroundColor = 'rgb(0, 91, 156)';
                document.getElementById('bloco4h2').style.color = 'white';
                document.getElementById('indexBlocoConteudo4').style.backgroundColor = '#00508a';
                document.getElementById('bloco4W').style.display = 'block';
                document.getElementById('bloco4B').style.display = 'none';

                document.getElementById('indexBloco1Sub').style.display = 'none';
                document.getElementById('indexBloco1').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo1').style.backgroundColor = 'white';
                document.getElementById('bloco1h2').style.color = 'black';
                document.getElementById('bloco1B').style.display = 'block';
                document.getElementById('bloco1W').style.display = 'none';

                document.getElementById('indexBloco2Sub').style.display = 'none';
                document.getElementById('indexBloco2').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo2').style.backgroundColor = 'white';
                document.getElementById('bloco2h2').style.color = 'black';
                document.getElementById('bloco2B').style.display = 'block';
                document.getElementById('bloco2W').style.display = 'none';

                document.getElementById('indexBloco3Sub').style.display = 'none';
                document.getElementById('indexBloco3').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo3').style.backgroundColor = 'white';
                document.getElementById('bloco3h2').style.color = 'black';
                document.getElementById('bloco3B').style.display = 'block';
                document.getElementById('bloco3W').style.display = 'none';

                document.getElementById('indexBloco5Sub').style.display = 'none';
                document.getElementById('indexBloco5').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo5').style.backgroundColor = 'white';
                document.getElementById('bloco5h2').style.color = 'black';
                document.getElementById('bloco5B').style.display = 'block';
                document.getElementById('bloco5W').style.display = 'none';

                toogle1 = false;
                toogle2 = false;
                toogle3 = false;
                toogle5 = false;
                
            }

            if (toogle4 == true){
                document.getElementById('indexBloco4Sub').style.display = 'none';
                document.getElementById('indexBloco4').style.backgroundColor = 'white';
                    
            }
            toogle4 = !toogle4;
        }

        document.getElementById('indexBloco5').onclick = function()
        {
            if (toogle5 == false){
                document.getElementById('indexBloco5Sub').style.display = 'block';

                document.getElementById('indexBloco5').style.backgroundColor = 'rgb(0, 91, 156)';
                document.getElementById('bloco5h2').style.color = 'white';
                document.getElementById('indexBlocoConteudo5').style.backgroundColor = '#00508a';
                document.getElementById('bloco5W').style.display = 'block';
                document.getElementById('bloco5B').style.display = 'none';

                document.getElementById('indexBloco1Sub').style.display = 'none';
                document.getElementById('indexBloco1').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo1').style.backgroundColor = 'white';
                document.getElementById('bloco1h2').style.color = 'black';
                document.getElementById('bloco1B').style.display = 'block';
                document.getElementById('bloco1W').style.display = 'none';

                document.getElementById('indexBloco2Sub').style.display = 'none';
                document.getElementById('indexBloco2').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo2').style.backgroundColor = 'white';
                document.getElementById('bloco2h2').style.color = 'black';
                document.getElementById('bloco2B').style.display = 'block';
                document.getElementById('bloco2W').style.display = 'none';

                document.getElementById('indexBloco3Sub').style.display = 'none';
                document.getElementById('indexBloco3').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo3').style.backgroundColor = 'white';
                document.getElementById('bloco3h2').style.color = 'black';
                document.getElementById('bloco3B').style.display = 'block';
                document.getElementById('bloco3W').style.display = 'none';

                document.getElementById('indexBloco4Sub').style.display = 'none';
                document.getElementById('indexBloco4').style.backgroundColor = 'white';
                document.getElementById('indexBlocoConteudo4').style.backgroundColor = 'white';
                document.getElementById('bloco4h2').style.color = 'black';
                document.getElementById('bloco4B').style.display = 'block';
                document.getElementById('bloco4W').style.display = 'none';

                toogle1 = false;
                toogle2 = false;
                toogle3 = false;
                toogle4 = false;
                
            }

            if (toogle5 == true){
                document.getElementById('indexBloco5Sub').style.display = 'none';
                document.getElementById('indexBloco5').style.backgroundColor = 'white';
                    
            }
            toogle5 = !toogle5;
        }


        /* formularios */
        document.getElementById('formulario1').onclick = function()
        {
            if (toogle6 == false){
                document.getElementById('formularioAba1').style.display = 'block';

                document.getElementById('formularioAba2').style.display = 'none';
                document.getElementById('formularioAba3').style.display = 'none';
                document.getElementById('formularioAba4').style.display = 'none';

                toogle7 = false;
                toogle8 = false;
                toogle9 = false;
                
            }

            if (toogle6 == true){
                document.getElementById('formularioAba1').style.display = 'none';
                    
            }
            toogle6 = !toogle6;
        }
        document.getElementById('formulario2').onclick = function()
        {
            if (toogle7 == false){
                document.getElementById('formularioAba2').style.display = 'block';

                document.getElementById('formularioAba1').style.display = 'none';
                document.getElementById('formularioAba3').style.display = 'none';
                document.getElementById('formularioAba4').style.display = 'none';

                toogle6 = false;
                toogle8 = false;
                toogle9 = false;
                
            }

            if (toogle7 == true){
                document.getElementById('formularioAba2').style.display = 'none';
                    
            }
            toogle7 = !toogle7;
        }
        document.getElementById('formulario3').onclick = function()
        {
            if (toogle8 == false){
                document.getElementById('formularioAba3').style.display = 'block';

                document.getElementById('formularioAba1').style.display = 'none';
                document.getElementById('formularioAba2').style.display = 'none';
                document.getElementById('formularioAba4').style.display = 'none';

                toogle6 = false;
                toogle7 = false;
                toogle9 = false;
                
            }

            if (toogle8 == true){
                document.getElementById('formularioAba3').style.display = 'none';
                    
            }
            toogle8 = !toogle8;
        }
        document.getElementById('formulario4').onclick = function()
        {
            if (toogle9 == false){
                document.getElementById('formularioAba4').style.display = 'block';

                document.getElementById('formularioAba1').style.display = 'none';
                document.getElementById('formularioAba2').style.display = 'none';
                document.getElementById('formularioAba3').style.display = 'none';

                toogle6 = false;
                toogle7 = false;
                toogle8 = false;
                
            }

            if (toogle9 == true){
                document.getElementById('formularioAba4').style.display = 'none';
                    
            }
            toogle9 = !toogle9;
        }

        /* mapeamento */
        document.getElementById('mapeamento1').onclick = function()
        {
            if (toogle10 == false){
                document.getElementById('mapeamentoAba1').style.display = 'block';

                document.getElementById('mapeamentoAba2').style.display = 'none';
                document.getElementById('mapeamentoAba3').style.display = 'none';
                document.getElementById('mapeamentoAba4').style.display = 'none';
                document.getElementById('mapeamentoAba5').style.display = 'none';
                document.getElementById('mapeamentoAba6').style.display = 'none';
                document.getElementById('mapeamentoAba7').style.display = 'none';
                document.getElementById('mapeamentoAba8').style.display = 'none';
                document.getElementById('mapeamentoAba9').style.display = 'none';
                document.getElementById('mapeamentoAba10').style.display = 'none';
                document.getElementById('mapeamentoAba11').style.display = 'none';
                document.getElementById('mapeamentoAba12').style.display = 'none';

                toogle11 = false;
                toogle12 = false;
                toogle13 = false;
                toogle14 = false;
                toogle15 = false;
                toogle16 = false;
                toogle17 = false;
                toogle18 = false;
                toogle19 = false;
                toogle20 = false;
                toogle21 = false;
                
            }

            if (toogle10 == true){
                document.getElementById('mapeamentoAba1').style.display = 'none';
                    
            }
            toogle10 = !toogle10;
        }

        document.getElementById('mapeamento2').onclick = function()
        {
            if (toogle11 == false){
                document.getElementById('mapeamentoAba2').style.display = 'block';

                document.getElementById('mapeamentoAba1').style.display = 'none';
                document.getElementById('mapeamentoAba3').style.display = 'none';
                document.getElementById('mapeamentoAba4').style.display = 'none';
                document.getElementById('mapeamentoAba5').style.display = 'none';
                document.getElementById('mapeamentoAba6').style.display = 'none';
                document.getElementById('mapeamentoAba7').style.display = 'none';
                document.getElementById('mapeamentoAba8').style.display = 'none';
                document.getElementById('mapeamentoAba9').style.display = 'none';
                document.getElementById('mapeamentoAba10').style.display = 'none';
                document.getElementById('mapeamentoAba11').style.display = 'none';
                document.getElementById('mapeamentoAba12').style.display = 'none';

                toogle10 = false;
                toogle12 = false;
                toogle13 = false;
                toogle14 = false;
                toogle15 = false;
                toogle16 = false;
                toogle17 = false;
                toogle18 = false;
                toogle19 = false;
                toogle20 = false;
                toogle21 = false;
                
            }

            if (toogle11 == true){
                document.getElementById('mapeamentoAba2').style.display = 'none';
                    
            }
            toogle11 = !toogle11;
        }

        document.getElementById('mapeamento3').onclick = function()
        {
            if (toogle12 == false){
                document.getElementById('mapeamentoAba3').style.display = 'block';

                document.getElementById('mapeamentoAba1').style.display = 'none';
                document.getElementById('mapeamentoAba2').style.display = 'none';
                document.getElementById('mapeamentoAba4').style.display = 'none';
                document.getElementById('mapeamentoAba5').style.display = 'none';
                document.getElementById('mapeamentoAba6').style.display = 'none';
                document.getElementById('mapeamentoAba7').style.display = 'none';
                document.getElementById('mapeamentoAba8').style.display = 'none';
                document.getElementById('mapeamentoAba9').style.display = 'none';
                document.getElementById('mapeamentoAba10').style.display = 'none';
                document.getElementById('mapeamentoAba11').style.display = 'none';
                document.getElementById('mapeamentoAba12').style.display = 'none';

                toogle10 = false;
                toogle11 = false;
                toogle13 = false;
                toogle14 = false;
                toogle15 = false;
                toogle16 = false;
                toogle17 = false;
                toogle18 = false;
                toogle19 = false;
                toogle20 = false;
                toogle21 = false;
                
            }

            if (toogle12 == true){
                document.getElementById('mapeamentoAba3').style.display = 'none';
                    
            }
            toogle12 = !toogle12;
        }

        document.getElementById('mapeamento4').onclick = function()
        {
            if (toogle13 == false){
                document.getElementById('mapeamentoAba4').style.display = 'block';

                document.getElementById('mapeamentoAba1').style.display = 'none';
                document.getElementById('mapeamentoAba2').style.display = 'none';
                document.getElementById('mapeamentoAba3').style.display = 'none';
                document.getElementById('mapeamentoAba5').style.display = 'none';
                document.getElementById('mapeamentoAba6').style.display = 'none';
                document.getElementById('mapeamentoAba7').style.display = 'none';
                document.getElementById('mapeamentoAba8').style.display = 'none';
                document.getElementById('mapeamentoAba9').style.display = 'none';
                document.getElementById('mapeamentoAba10').style.display = 'none';
                document.getElementById('mapeamentoAba11').style.display = 'none';
                document.getElementById('mapeamentoAba12').style.display = 'none';

                toogle10 = false;
                toogle11 = false;
                toogle12 = false;
                toogle14 = false;
                toogle15 = false;
                toogle16 = false;
                toogle17 = false;
                toogle18 = false;
                toogle19 = false;
                toogle20 = false;
                toogle21 = false;
                
            }

            if (toogle13 == true){
                document.getElementById('mapeamentoAba4').style.display = 'none';
                    
            }
            toogle13 = !toogle13;
        }
        document.getElementById('mapeamento5').onclick = function()
        {
            if (toogle14 == false){
                document.getElementById('mapeamentoAba5').style.display = 'block';

                document.getElementById('mapeamentoAba1').style.display = 'none';
                document.getElementById('mapeamentoAba2').style.display = 'none';
                document.getElementById('mapeamentoAba3').style.display = 'none';
                document.getElementById('mapeamentoAba4').style.display = 'none';
                document.getElementById('mapeamentoAba6').style.display = 'none';
                document.getElementById('mapeamentoAba7').style.display = 'none';
                document.getElementById('mapeamentoAba8').style.display = 'none';
                document.getElementById('mapeamentoAba9').style.display = 'none';
                document.getElementById('mapeamentoAba10').style.display = 'none';
                document.getElementById('mapeamentoAba11').style.display = 'none';
                document.getElementById('mapeamentoAba12').style.display = 'none';

                toogle10 = false;
                toogle11 = false;
                toogle12 = false;
                toogle13 = false;
                toogle15 = false;
                toogle16 = false;
                toogle17 = false;
                toogle18 = false;
                toogle19 = false;
                toogle20 = false;
                toogle21 = false;
                
            }

            if (toogle14 == true){
                document.getElementById('mapeamentoAba5').style.display = 'none';
                    
            }
            toogle14 = !toogle14;
        }

        document.getElementById('mapeamento6').onclick = function()
        {
            if (toogle15 == false){
                document.getElementById('mapeamentoAba6').style.display = 'block';

                document.getElementById('mapeamentoAba1').style.display = 'none';
                document.getElementById('mapeamentoAba2').style.display = 'none';
                document.getElementById('mapeamentoAba3').style.display = 'none';
                document.getElementById('mapeamentoAba4').style.display = 'none';
                document.getElementById('mapeamentoAba5').style.display = 'none';
                document.getElementById('mapeamentoAba7').style.display = 'none';
                document.getElementById('mapeamentoAba8').style.display = 'none';
                document.getElementById('mapeamentoAba9').style.display = 'none';
                document.getElementById('mapeamentoAba10').style.display = 'none';
                document.getElementById('mapeamentoAba11').style.display = 'none';
                document.getElementById('mapeamentoAba12').style.display = 'none';

                toogle10 = false;
                toogle11 = false;
                toogle12 = false;
                toogle13 = false;
                toogle14 = false;
                toogle16 = false;
                toogle17 = false;
                toogle18 = false;
                toogle19 = false;
                toogle20 = false;
                toogle21 = false;
                
            }

            if (toogle15 == true){
                document.getElementById('mapeamentoAba6').style.display = 'none';
                    
            }
            toogle15 = !toogle15;
        }

        document.getElementById('mapeamento7').onclick = function()
        {
            if (toogle16 == false){
                document.getElementById('mapeamentoAba7').style.display = 'block';

                document.getElementById('mapeamentoAba1').style.display = 'none';
                document.getElementById('mapeamentoAba2').style.display = 'none';
                document.getElementById('mapeamentoAba3').style.display = 'none';
                document.getElementById('mapeamentoAba4').style.display = 'none';
                document.getElementById('mapeamentoAba5').style.display = 'none';
                document.getElementById('mapeamentoAba6').style.display = 'none';
                document.getElementById('mapeamentoAba8').style.display = 'none';
                document.getElementById('mapeamentoAba9').style.display = 'none';
                document.getElementById('mapeamentoAba10').style.display = 'none';
                document.getElementById('mapeamentoAba11').style.display = 'none';
                document.getElementById('mapeamentoAba12').style.display = 'none';

                toogle10 = false;
                toogle11 = false;
                toogle12 = false;
                toogle13 = false;
                toogle14 = false;
                toogle15 = false;
                toogle17 = false;
                toogle18 = false;
                toogle19 = false;
                toogle20 = false;
                toogle21 = false;
                
            }

            if (toogle16 == true){
                document.getElementById('mapeamentoAba7').style.display = 'none';
                    
            }
            toogle16 = !toogle16;
        }

        document.getElementById('mapeamento8').onclick = function()
        {
            if (toogle17 == false){
                document.getElementById('mapeamentoAba8').style.display = 'block';

                document.getElementById('mapeamentoAba1').style.display = 'none';
                document.getElementById('mapeamentoAba2').style.display = 'none';
                document.getElementById('mapeamentoAba3').style.display = 'none';
                document.getElementById('mapeamentoAba4').style.display = 'none';
                document.getElementById('mapeamentoAba5').style.display = 'none';
                document.getElementById('mapeamentoAba6').style.display = 'none';
                document.getElementById('mapeamentoAba7').style.display = 'none';
                document.getElementById('mapeamentoAba9').style.display = 'none';
                document.getElementById('mapeamentoAba10').style.display = 'none';
                document.getElementById('mapeamentoAba11').style.display = 'none';
                document.getElementById('mapeamentoAba12').style.display = 'none';

                toogle10 = false;
                toogle11 = false;
                toogle12 = false;
                toogle13 = false;
                toogle14 = false;
                toogle15 = false;
                toogle16 = false;
                toogle18 = false;
                toogle19 = false;
                toogle20 = false;
                toogle21 = false;
                
            }

            if (toogle17 == true){
                document.getElementById('mapeamentoAba8').style.display = 'none';
                    
            }
            toogle17 = !toogle17;
        }

        document.getElementById('mapeamento9').onclick = function()
        {
            if (toogle18 == false){
                document.getElementById('mapeamentoAba9').style.display = 'block';

                document.getElementById('mapeamentoAba1').style.display = 'none';
                document.getElementById('mapeamentoAba2').style.display = 'none';
                document.getElementById('mapeamentoAba3').style.display = 'none';
                document.getElementById('mapeamentoAba4').style.display = 'none';
                document.getElementById('mapeamentoAba5').style.display = 'none';
                document.getElementById('mapeamentoAba6').style.display = 'none';
                document.getElementById('mapeamentoAba7').style.display = 'none';
                document.getElementById('mapeamentoAba8').style.display = 'none';
                document.getElementById('mapeamentoAba10').style.display = 'none';
                document.getElementById('mapeamentoAba11').style.display = 'none';
                document.getElementById('mapeamentoAba12').style.display = 'none';

                toogle10 = false;
                toogle11 = false;
                toogle12 = false;
                toogle13 = false;
                toogle14 = false;
                toogle15 = false;
                toogle16 = false;
                toogle17 = false;
                toogle19 = false;
                toogle20 = false;
                toogle21 = false;
                
            }

            if (toogle18 == true){
                document.getElementById('mapeamentoAba9').style.display = 'none';
                    
            }
            toogle18 = !toogle18;
        }

        document.getElementById('mapeamento10').onclick = function()
        {
            if (toogle19 == false){
                document.getElementById('mapeamentoAba10').style.display = 'block';

                document.getElementById('mapeamentoAba1').style.display = 'none';
                document.getElementById('mapeamentoAba2').style.display = 'none';
                document.getElementById('mapeamentoAba3').style.display = 'none';
                document.getElementById('mapeamentoAba4').style.display = 'none';
                document.getElementById('mapeamentoAba5').style.display = 'none';
                document.getElementById('mapeamentoAba6').style.display = 'none';
                document.getElementById('mapeamentoAba7').style.display = 'none';
                document.getElementById('mapeamentoAba8').style.display = 'none';
                document.getElementById('mapeamentoAba9').style.display = 'none';
                document.getElementById('mapeamentoAba11').style.display = 'none';
                document.getElementById('mapeamentoAba12').style.display = 'none';

                toogle10 = false;
                toogle11 = false;
                toogle12 = false;
                toogle13 = false;
                toogle14 = false;
                toogle15 = false;
                toogle16 = false;
                toogle17 = false;
                toogle18 = false;
                toogle20 = false;
                toogle21 = false;
                
            }

            if (toogle19 == true){
                document.getElementById('mapeamentoAba10').style.display = 'none';
                    
            }
            toogle19 = !toogle19;
        }

        document.getElementById('mapeamento11').onclick = function()
        {
            if (toogle20 == false){
                document.getElementById('mapeamentoAba11').style.display = 'block';

                document.getElementById('mapeamentoAba1').style.display = 'none';
                document.getElementById('mapeamentoAba2').style.display = 'none';
                document.getElementById('mapeamentoAba3').style.display = 'none';
                document.getElementById('mapeamentoAba4').style.display = 'none';
                document.getElementById('mapeamentoAba5').style.display = 'none';
                document.getElementById('mapeamentoAba6').style.display = 'none';
                document.getElementById('mapeamentoAba7').style.display = 'none';
                document.getElementById('mapeamentoAba8').style.display = 'none';
                document.getElementById('mapeamentoAba9').style.display = 'none';
                document.getElementById('mapeamentoAba10').style.display = 'none';
                document.getElementById('mapeamentoAba12').style.display = 'none';

                toogle10 = false;
                toogle11 = false;
                toogle12 = false;
                toogle13 = false;
                toogle14 = false;
                toogle15 = false;
                toogle16 = false;
                toogle17 = false;
                toogle18 = false;
                toogle19 = false;
                toogle21 = false;
                
            }

            if (toogle20 == true){
                document.getElementById('mapeamentoAba11').style.display = 'none';
                    
            }
            toogle20 = !toogle20;
        }

        document.getElementById('mapeamento12').onclick = function()
        {
            if (toogle21 == false){
                document.getElementById('mapeamentoAba12').style.display = 'block';

                document.getElementById('mapeamentoAba1').style.display = 'none';
                document.getElementById('mapeamentoAba2').style.display = 'none';
                document.getElementById('mapeamentoAba3').style.display = 'none';
                document.getElementById('mapeamentoAba4').style.display = 'none';
                document.getElementById('mapeamentoAba5').style.display = 'none';
                document.getElementById('mapeamentoAba6').style.display = 'none';
                document.getElementById('mapeamentoAba7').style.display = 'none';
                document.getElementById('mapeamentoAba8').style.display = 'none';
                document.getElementById('mapeamentoAba9').style.display = 'none';
                document.getElementById('mapeamentoAba10').style.display = 'none';
                document.getElementById('mapeamentoAba11').style.display = 'none';

                toogle10 = false;
                toogle11 = false;
                toogle12 = false;
                toogle13 = false;
                toogle14 = false;
                toogle15 = false;
                toogle16 = false;
                toogle17 = false;
                toogle18 = false;
                toogle19 = false;
                toogle20 = false;
                
            }

            if (toogle21 == true){
                document.getElementById('mapeamentoAba12').style.display = 'none';
                    
            }
            toogle21 = !toogle21;
        }


        /* normas */
        document.getElementById('normas1').onclick = function()
        {
            if (toogle22 == false){
                document.getElementById('normasAba1').style.display = 'block';

                document.getElementById('normasAba2').style.display = 'none';

                toogle23 = false;
                
            }

            if (toogle22 == true){
                document.getElementById('normasAba1').style.display = 'none';
                    
            }
            toogle22 = !toogle22;
        }
        document.getElementById('normas2').onclick = function()
        {
            if (toogle23 == false){
                document.getElementById('normasAba2').style.display = 'block';

                document.getElementById('normasAba1').style.display = 'none';

                toogle22 = false;
                
            }

            if (toogle23 == true){
                document.getElementById('normasAba2').style.display = 'none';
                    
            }
            toogle23 = !toogle23;
        }


        /* quem & onde */
        document.getElementById('iconePesquisa').onclick = function()
        {
            if (toogle24 == false){
                document.getElementById('indexDireita8').style.display = 'flex';
                
            }
            toogle24 = !toogle24;
        }
        document.getElementById('perfilQuemCompleto-botao').onclick = function()
        {
            if (toogle24 == true){

                document.getElementById('indexDireita8').style.display = 'none';
                
            }
            toogle24 = !toogle24;
        }

        /* reservas */
        document.getElementById('reservaBotao').onclick = function()
        {
            if (toogle25 == false){
                document.getElementById('indexDireita10').style.display = 'flex';
                
            }
            toogle25 = !toogle25;
        }
        document.getElementById('reservaCompleto-botao2').onclick = function()
        {
            if (toogle25 == true){

                document.getElementById('indexDireita10').style.display = 'none';
                
            }
            toogle25 = !toogle25;
        }


        /* geral*/
        document.getElementById('formularios').onclick = function()
        {
            if (toogle27 == false){
                document.getElementById('indexDireita2').style.display = 'flex';

                document.getElementById('indexDireita1').style.display = 'none';
                document.getElementById('indexDireita3').style.display = 'none';
                document.getElementById('indexDireita4').style.display = 'none';
                document.getElementById('indexDireita5').style.display = 'none';
                document.getElementById('indexDireita6').style.display = 'none';
                document.getElementById('indexDireita7').style.display = 'none';
                document.getElementById('indexDireita8').style.display = 'none';
                document.getElementById('indexDireita9').style.display = 'none';
                document.getElementById('indexDireita10').style.display = 'none';
                document.getElementById('indexDireita11').style.display = 'none';
                document.getElementById('indexDireita12').style.display = 'none';
                document.getElementById('indexDireita13').style.display = 'none';
                document.getElementById('indexDireita14').style.display = 'none';

                toogle26 = false;
                toogle28 = false;
                toogle29 = false;
                toogle30 = false;
                toogle31 = false;
                toogle32 = false;
                toogle33 = false;
                toogle34 = false;
                toogle35 = false;
                
            }
            toogle27 = !toogle27;
        }
        document.getElementById('mapeamento').onclick = function()
        {
            if (toogle28 == false){
                document.getElementById('indexDireita3').style.display = 'flex';

                document.getElementById('indexDireita1').style.display = 'none';
                document.getElementById('indexDireita2').style.display = 'none';
                document.getElementById('indexDireita4').style.display = 'none';
                document.getElementById('indexDireita5').style.display = 'none';
                document.getElementById('indexDireita6').style.display = 'none';
                document.getElementById('indexDireita7').style.display = 'none';
                document.getElementById('indexDireita8').style.display = 'none';
                document.getElementById('indexDireita9').style.display = 'none';
                document.getElementById('indexDireita10').style.display = 'none';
                document.getElementById('indexDireita11').style.display = 'none';
                document.getElementById('indexDireita12').style.display = 'none';
                document.getElementById('indexDireita13').style.display = 'none';
                document.getElementById('indexDireita14').style.display = 'none';

                toogle26 = false;
                toogle27 = false;
                toogle29 = false;
                toogle30 = false;
                toogle31 = false;
                toogle32 = false;
                toogle33 = false;
                toogle34 = false;
                toogle35 = false;
                
            }
            toogle28 = !toogle28;
        }
        document.getElementById('normas').onclick = function()
        {
            if (toogle29 == false){
                document.getElementById('indexDireita4').style.display = 'flex';

                document.getElementById('indexDireita1').style.display = 'none';
                document.getElementById('indexDireita2').style.display = 'none';
                document.getElementById('indexDireita3').style.display = 'none';
                document.getElementById('indexDireita5').style.display = 'none';
                document.getElementById('indexDireita6').style.display = 'none';
                document.getElementById('indexDireita7').style.display = 'none';
                document.getElementById('indexDireita8').style.display = 'none';
                document.getElementById('indexDireita9').style.display = 'none';
                document.getElementById('indexDireita10').style.display = 'none';
                document.getElementById('indexDireita11').style.display = 'none';
                document.getElementById('indexDireita12').style.display = 'none';
                document.getElementById('indexDireita13').style.display = 'none';
                document.getElementById('indexDireita14').style.display = 'none';

                toogle26 = false;
                toogle27 = false;
                toogle28 = false;
                toogle30 = false;
                toogle31 = false;
                toogle32 = false;
                toogle33 = false;
                toogle34 = false;
                toogle35 = false;
                
            }
            toogle29 = !toogle29;
        }
        document.getElementById('perfil').onclick = function()
        {
            if (toogle30 == false){
                document.getElementById('indexDireita5').style.display = 'flex';

                document.getElementById('indexDireita1').style.display = 'none';
                document.getElementById('indexDireita2').style.display = 'none';
                document.getElementById('indexDireita3').style.display = 'none';
                document.getElementById('indexDireita4').style.display = 'none';
                document.getElementById('indexDireita6').style.display = 'none';
                document.getElementById('indexDireita7').style.display = 'none';
                document.getElementById('indexDireita8').style.display = 'none';
                document.getElementById('indexDireita9').style.display = 'none';
                document.getElementById('indexDireita10').style.display = 'none';
                document.getElementById('indexDireita11').style.display = 'none';
                document.getElementById('indexDireita12').style.display = 'none';
                document.getElementById('indexDireita13').style.display = 'none';
                document.getElementById('indexDireita14').style.display = 'none';

                toogle26 = false;
                toogle27 = false;
                toogle28 = false;
                toogle29 = false;
                toogle31 = false;
                toogle32 = false;
                toogle33 = false;
                toogle34 = false;
                toogle35 = false;
                
            }
            toogle30 = !toogle30;
        }
        document.getElementById('aniversariantes').onclick = function()
        {
            if (toogle31 == false){
                document.getElementById('indexDireita6').style.display = 'flex';

                document.getElementById('indexDireita1').style.display = 'none';
                document.getElementById('indexDireita2').style.display = 'none';
                document.getElementById('indexDireita3').style.display = 'none';
                document.getElementById('indexDireita4').style.display = 'none';
                document.getElementById('indexDireita5').style.display = 'none';
                document.getElementById('indexDireita7').style.display = 'none';
                document.getElementById('indexDireita8').style.display = 'none';
                document.getElementById('indexDireita9').style.display = 'none';
                document.getElementById('indexDireita10').style.display = 'none';
                document.getElementById('indexDireita11').style.display = 'none';
                document.getElementById('indexDireita12').style.display = 'none';
                document.getElementById('indexDireita13').style.display = 'none';
                document.getElementById('indexDireita14').style.display = 'none';

                toogle26 = false;
                toogle27 = false;
                toogle28 = false;
                toogle29 = false;
                toogle30 = false;
                toogle32 = false;
                toogle33 = false;
                toogle34 = false;
                toogle35 = false;
                
            }
            toogle31 = !toogle31;
        }
        document.getElementById('quem').onclick = function()
        {
            if (toogle32 == false){
                document.getElementById('indexDireita7').style.display = 'flex';

                document.getElementById('indexDireita1').style.display = 'none';
                document.getElementById('indexDireita2').style.display = 'none';
                document.getElementById('indexDireita3').style.display = 'none';
                document.getElementById('indexDireita4').style.display = 'none';
                document.getElementById('indexDireita5').style.display = 'none';
                document.getElementById('indexDireita6').style.display = 'none';
                document.getElementById('indexDireita8').style.display = 'none';
                document.getElementById('indexDireita9').style.display = 'none';
                document.getElementById('indexDireita10').style.display = 'none';
                document.getElementById('indexDireita11').style.display = 'none';
                document.getElementById('indexDireita12').style.display = 'none';
                document.getElementById('indexDireita13').style.display = 'none';
                document.getElementById('indexDireita14').style.display = 'none';

                toogle26 = false;
                toogle27 = false;
                toogle28 = false;
                toogle29 = false;
                toogle30 = false;
                toogle31 = false;
                toogle33 = false;
                toogle34 = false;
                toogle35 = false;
                
            }
            toogle32 = !toogle32;
        }
        document.getElementById('quem2').onclick = function()
        {
            if (toogle32 == false){
                document.getElementById('indexDireita7').style.display = 'flex';

                document.getElementById('indexDireita1').style.display = 'none';
                document.getElementById('indexDireita2').style.display = 'none';
                document.getElementById('indexDireita3').style.display = 'none';
                document.getElementById('indexDireita4').style.display = 'none';
                document.getElementById('indexDireita5').style.display = 'none';
                document.getElementById('indexDireita6').style.display = 'none';
                document.getElementById('indexDireita8').style.display = 'none';
                document.getElementById('indexDireita9').style.display = 'none';
                document.getElementById('indexDireita10').style.display = 'none';
                document.getElementById('indexDireita11').style.display = 'none';
                document.getElementById('indexDireita12').style.display = 'none';
                document.getElementById('indexDireita13').style.display = 'none';
                document.getElementById('indexDireita14').style.display = 'none';

                toogle26 = false;
                toogle27 = false;
                toogle28 = false;
                toogle29 = false;
                toogle30 = false;
                toogle31 = false;
                toogle33 = false;
                toogle34 = false;
                toogle35 = false;
                
            }
            toogle32 = !toogle32;
        }
        document.getElementById('reserva').onclick = function()
        {
            if (toogle33 == false){
                document.getElementById('indexDireita9').style.display = 'flex';

                document.getElementById('indexDireita1').style.display = 'none';
                document.getElementById('indexDireita2').style.display = 'none';
                document.getElementById('indexDireita3').style.display = 'none';
                document.getElementById('indexDireita4').style.display = 'none';
                document.getElementById('indexDireita5').style.display = 'none';
                document.getElementById('indexDireita6').style.display = 'none';
                document.getElementById('indexDireita7').style.display = 'none';
                document.getElementById('indexDireita8').style.display = 'none';
                document.getElementById('indexDireita10').style.display = 'none';
                document.getElementById('indexDireita11').style.display = 'none';
                document.getElementById('indexDireita12').style.display = 'none';
                document.getElementById('indexDireita13').style.display = 'none';
                document.getElementById('indexDireita14').style.display = 'none';

                toogle26 = false;
                toogle27 = false;
                toogle28 = false;
                toogle29 = false;
                toogle30 = false;
                toogle31 = false;
                toogle32 = false;
                toogle34 = false;
                toogle35 = false;
                
            }
            toogle33 = !toogle33;
        }
        document.getElementById('mds').onclick = function()
        {
            if (toogle34 == false){
                document.getElementById('indexDireita11').style.display = 'flex';

                document.getElementById('indexDireita1').style.display = 'none';
                document.getElementById('indexDireita2').style.display = 'none';
                document.getElementById('indexDireita3').style.display = 'none';
                document.getElementById('indexDireita4').style.display = 'none';
                document.getElementById('indexDireita5').style.display = 'none';
                document.getElementById('indexDireita6').style.display = 'none';
                document.getElementById('indexDireita7').style.display = 'none';
                document.getElementById('indexDireita8').style.display = 'none';
                document.getElementById('indexDireita10').style.display = 'none';
                document.getElementById('indexDireita9').style.display = 'none';
                document.getElementById('indexDireita12').style.display = 'none';
                document.getElementById('indexDireita13').style.display = 'none';
                document.getElementById('indexDireita14').style.display = 'none';

                toogle26 = false;
                toogle27 = false;
                toogle28 = false;
                toogle29 = false;
                toogle30 = false;
                toogle31 = false;
                toogle32 = false;
                toogle33 = false;
                toogle35 = false;
                
            }
            toogle34 = !toogle34;
        }
        document.getElementById('planilha').onclick = function()
        {
            if (toogle35 == false){
                document.getElementById('indexDireita12').style.display = 'flex';

                document.getElementById('indexDireita1').style.display = 'none';
                document.getElementById('indexDireita2').style.display = 'none';
                document.getElementById('indexDireita3').style.display = 'none';
                document.getElementById('indexDireita4').style.display = 'none';
                document.getElementById('indexDireita5').style.display = 'none';
                document.getElementById('indexDireita6').style.display = 'none';
                document.getElementById('indexDireita7').style.display = 'none';
                document.getElementById('indexDireita8').style.display = 'none';
                document.getElementById('indexDireita10').style.display = 'none';
                document.getElementById('indexDireita9').style.display = 'none';
                document.getElementById('indexDireita11').style.display = 'none';
                document.getElementById('indexDireita13').style.display = 'none';
                document.getElementById('indexDireita14').style.display = 'none';

                toogle26 = false;
                toogle27 = false;
                toogle28 = false;
                toogle29 = false;
                toogle30 = false;
                toogle31 = false;
                toogle32 = false;
                toogle33 = false;
                toogle34 = false;
                
            }
            toogle35 = !toogle35;
        }
        document.getElementById('comunicados').onclick = function()
        {
            if (toogle35 == false){
                document.getElementById('indexDireita13').style.display = 'flex';

                document.getElementById('indexDireita1').style.display = 'none';
                document.getElementById('indexDireita2').style.display = 'none';
                document.getElementById('indexDireita3').style.display = 'none';
                document.getElementById('indexDireita4').style.display = 'none';
                document.getElementById('indexDireita5').style.display = 'none';
                document.getElementById('indexDireita6').style.display = 'none';
                document.getElementById('indexDireita7').style.display = 'none';
                document.getElementById('indexDireita8').style.display = 'none';
                document.getElementById('indexDireita10').style.display = 'none';
                document.getElementById('indexDireita9').style.display = 'none';
                document.getElementById('indexDireita11').style.display = 'none';
                document.getElementById('indexDireita12').style.display = 'none';
                document.getElementById('indexDireita14').style.display = 'none';

                toogle26 = false;
                toogle27 = false;
                toogle28 = false;
                toogle29 = false;
                toogle30 = false;
                toogle31 = false;
                toogle32 = false;
                toogle33 = false;
                toogle34 = false;
                
            }
            toogle35 = !toogle35;
        }
        document.getElementById('estrutura').onclick = function()
        {
            if (toogle26 == false){
                document.getElementById('indexDireita14').style.display = 'flex';

                document.getElementById('indexDireita1').style.display = 'none';
                document.getElementById('indexDireita2').style.display = 'none';
                document.getElementById('indexDireita3').style.display = 'none';
                document.getElementById('indexDireita4').style.display = 'none';
                document.getElementById('indexDireita5').style.display = 'none';
                document.getElementById('indexDireita6').style.display = 'none';
                document.getElementById('indexDireita7').style.display = 'none';
                document.getElementById('indexDireita8').style.display = 'none';
                document.getElementById('indexDireita10').style.display = 'none';
                document.getElementById('indexDireita9').style.display = 'none';
                document.getElementById('indexDireita11').style.display = 'none';
                document.getElementById('indexDireita12').style.display = 'none';
                document.getElementById('indexDireita13').style.display = 'none';

                toogle35 = false;
                toogle27 = false;
                toogle28 = false;
                toogle29 = false;
                toogle30 = false;
                toogle31 = false;
                toogle32 = false;
                toogle33 = false;
                toogle34 = false;
                
            }
            toogle26 = !toogle26;
        }


        /* configurando paginas iniciais */
        document.getElementById('paginaInicial2').onclick = function()
        {
            document.getElementById('indexDireita1').style.display = 'flex';

            document.getElementById('indexDireita2').style.display = 'none';
            document.getElementById('indexDireita3').style.display = 'none';
            document.getElementById('indexDireita4').style.display = 'none';
            document.getElementById('indexDireita5').style.display = 'none';
            document.getElementById('indexDireita6').style.display = 'none';
            document.getElementById('indexDireita7').style.display = 'none';
            document.getElementById('indexDireita8').style.display = 'none';
            document.getElementById('indexDireita9').style.display = 'none';
            document.getElementById('indexDireita10').style.display = 'none';
            document.getElementById('indexDireita11').style.display = 'none';
            document.getElementById('indexDireita12').style.display = 'none';
            document.getElementById('indexDireita13').style.display = 'none';
            document.getElementById('indexDireita14').style.display = 'none';

            toogle26 = false;
            toogle27 = false;
            toogle28 = false;
            toogle29 = false;
            toogle30 = false;
            toogle31 = false;
            toogle32 = false;
            toogle33 = false;
            toogle34 = false;
            toogle35 = false;
        }
        document.getElementById('paginaInicial3').onclick = function()
        {
            document.getElementById('indexDireita1').style.display = 'flex';

            document.getElementById('indexDireita2').style.display = 'none';
            document.getElementById('indexDireita3').style.display = 'none';
            document.getElementById('indexDireita4').style.display = 'none';
            document.getElementById('indexDireita5').style.display = 'none';
            document.getElementById('indexDireita6').style.display = 'none';
            document.getElementById('indexDireita7').style.display = 'none';
            document.getElementById('indexDireita8').style.display = 'none';
            document.getElementById('indexDireita9').style.display = 'none';
            document.getElementById('indexDireita10').style.display = 'none';
            document.getElementById('indexDireita11').style.display = 'none';
            document.getElementById('indexDireita12').style.display = 'none';
            document.getElementById('indexDireita13').style.display = 'none';
            document.getElementById('indexDireita14').style.display = 'none';

            toogle26 = false;
            toogle27 = false;
            toogle28 = false;
            toogle29 = false;
            toogle30 = false;
            toogle31 = false;
            toogle32 = false;
            toogle33 = false;
            toogle34 = false;
            toogle35 = false;
        }
        document.getElementById('paginaInicial4').onclick = function()
        {
            document.getElementById('indexDireita1').style.display = 'flex';

            document.getElementById('indexDireita2').style.display = 'none';
            document.getElementById('indexDireita3').style.display = 'none';
            document.getElementById('indexDireita4').style.display = 'none';
            document.getElementById('indexDireita5').style.display = 'none';
            document.getElementById('indexDireita6').style.display = 'none';
            document.getElementById('indexDireita7').style.display = 'none';
            document.getElementById('indexDireita8').style.display = 'none';
            document.getElementById('indexDireita9').style.display = 'none';
            document.getElementById('indexDireita10').style.display = 'none';
            document.getElementById('indexDireita11').style.display = 'none';
            document.getElementById('indexDireita12').style.display = 'none';
            document.getElementById('indexDireita13').style.display = 'none';
            document.getElementById('indexDireita14').style.display = 'none';

            toogle26 = false;
            toogle27 = false;
            toogle28 = false;
            toogle29 = false;
            toogle30 = false;
            toogle31 = false;
            toogle32 = false;
            toogle33 = false;
            toogle34 = false;
            toogle35 = false;
        }
        document.getElementById('paginaInicial5').onclick = function()
        {
            document.getElementById('indexDireita1').style.display = 'flex';

            document.getElementById('indexDireita2').style.display = 'none';
            document.getElementById('indexDireita3').style.display = 'none';
            document.getElementById('indexDireita4').style.display = 'none';
            document.getElementById('indexDireita5').style.display = 'none';
            document.getElementById('indexDireita6').style.display = 'none';
            document.getElementById('indexDireita7').style.display = 'none';
            document.getElementById('indexDireita8').style.display = 'none';
            document.getElementById('indexDireita9').style.display = 'none';
            document.getElementById('indexDireita10').style.display = 'none';
            document.getElementById('indexDireita11').style.display = 'none';
            document.getElementById('indexDireita12').style.display = 'none';
            document.getElementById('indexDireita13').style.display = 'none';
            document.getElementById('indexDireita14').style.display = 'none';

            toogle26 = false;
            toogle27 = false;
            toogle28 = false;
            toogle29 = false;
            toogle30 = false;
            toogle31 = false;
            toogle32 = false;
            toogle33 = false;
            toogle34 = false;
            toogle35 = false;
        }
        document.getElementById('paginaInicial6').onclick = function()
        {
            document.getElementById('indexDireita1').style.display = 'flex';

            document.getElementById('indexDireita2').style.display = 'none';
            document.getElementById('indexDireita3').style.display = 'none';
            document.getElementById('indexDireita4').style.display = 'none';
            document.getElementById('indexDireita5').style.display = 'none';
            document.getElementById('indexDireita6').style.display = 'none';
            document.getElementById('indexDireita7').style.display = 'none';
            document.getElementById('indexDireita8').style.display = 'none';
            document.getElementById('indexDireita9').style.display = 'none';
            document.getElementById('indexDireita10').style.display = 'none';
            document.getElementById('indexDireita11').style.display = 'none';
            document.getElementById('indexDireita12').style.display = 'none';
            document.getElementById('indexDireita13').style.display = 'none';
            document.getElementById('indexDireita14').style.display = 'none';

            toogle26 = false;
            toogle27 = false;
            toogle28 = false;
            toogle29 = false;
            toogle30 = false;
            toogle31 = false;
            toogle32 = false;
            toogle33 = false;
            toogle34 = false;
            toogle35 = false;
        }
        document.getElementById('paginaInicial7').onclick = function()
        {
            document.getElementById('indexDireita1').style.display = 'flex';

            document.getElementById('indexDireita2').style.display = 'none';
            document.getElementById('indexDireita3').style.display = 'none';
            document.getElementById('indexDireita4').style.display = 'none';
            document.getElementById('indexDireita5').style.display = 'none';
            document.getElementById('indexDireita6').style.display = 'none';
            document.getElementById('indexDireita7').style.display = 'none';
            document.getElementById('indexDireita8').style.display = 'none';
            document.getElementById('indexDireita9').style.display = 'none';
            document.getElementById('indexDireita10').style.display = 'none';
            document.getElementById('indexDireita11').style.display = 'none';
            document.getElementById('indexDireita12').style.display = 'none';
            document.getElementById('indexDireita13').style.display = 'none';
            document.getElementById('indexDireita14').style.display = 'none';

            toogle26 = false;
            toogle27 = false;
            toogle28 = false;
            toogle29 = false;
            toogle30 = false;
            toogle31 = false;
            toogle32 = false;
            toogle33 = false;
            toogle34 = false;
            toogle35 = false;
        }
        document.getElementById('paginaInicial9').onclick = function()
        {
            document.getElementById('indexDireita1').style.display = 'flex';

            document.getElementById('indexDireita2').style.display = 'none';
            document.getElementById('indexDireita3').style.display = 'none';
            document.getElementById('indexDireita4').style.display = 'none';
            document.getElementById('indexDireita5').style.display = 'none';
            document.getElementById('indexDireita6').style.display = 'none';
            document.getElementById('indexDireita7').style.display = 'none';
            document.getElementById('indexDireita8').style.display = 'none';
            document.getElementById('indexDireita9').style.display = 'none';
            document.getElementById('indexDireita10').style.display = 'none';
            document.getElementById('indexDireita11').style.display = 'none';
            document.getElementById('indexDireita12').style.display = 'none';
            document.getElementById('indexDireita13').style.display = 'none';
            document.getElementById('indexDireita14').style.display = 'none';

            toogle26 = false;
            toogle27 = false;
            toogle28 = false;
            toogle29 = false;
            toogle30 = false;
            toogle31 = false;
            toogle32 = false;
            toogle33 = false;
            toogle34 = false;
            toogle35 = false;
        }
        document.getElementById('paginaInicial11').onclick = function()
        {
            document.getElementById('indexDireita1').style.display = 'flex';

            document.getElementById('indexDireita2').style.display = 'none';
            document.getElementById('indexDireita3').style.display = 'none';
            document.getElementById('indexDireita4').style.display = 'none';
            document.getElementById('indexDireita5').style.display = 'none';
            document.getElementById('indexDireita6').style.display = 'none';
            document.getElementById('indexDireita7').style.display = 'none';
            document.getElementById('indexDireita8').style.display = 'none';
            document.getElementById('indexDireita9').style.display = 'none';
            document.getElementById('indexDireita10').style.display = 'none';
            document.getElementById('indexDireita11').style.display = 'none';
            document.getElementById('indexDireita12').style.display = 'none';
            document.getElementById('indexDireita13').style.display = 'none';
            document.getElementById('indexDireita14').style.display = 'none';

            toogle26 = false;
            toogle27 = false;
            toogle28 = false;
            toogle29 = false;
            toogle30 = false;
            toogle31 = false;
            toogle32 = false;
            toogle33 = false;
            toogle34 = false;
            toogle35 = false;
        }
        document.getElementById('paginaInicial12').onclick = function()
        {
            document.getElementById('indexDireita1').style.display = 'flex';

            document.getElementById('indexDireita2').style.display = 'none';
            document.getElementById('indexDireita3').style.display = 'none';
            document.getElementById('indexDireita4').style.display = 'none';
            document.getElementById('indexDireita5').style.display = 'none';
            document.getElementById('indexDireita6').style.display = 'none';
            document.getElementById('indexDireita7').style.display = 'none';
            document.getElementById('indexDireita8').style.display = 'none';
            document.getElementById('indexDireita9').style.display = 'none';
            document.getElementById('indexDireita10').style.display = 'none';
            document.getElementById('indexDireita11').style.display = 'none';
            document.getElementById('indexDireita12').style.display = 'none';
            document.getElementById('indexDireita13').style.display = 'none';
            document.getElementById('indexDireita14').style.display = 'none';

            toogle26 = false;
            toogle27 = false;
            toogle28 = false;
            toogle29 = false;
            toogle30 = false;
            toogle31 = false;
            toogle32 = false;
            toogle33 = false;
            toogle34 = false;
            toogle35 = false;
        }
        document.getElementById('paginaInicial13').onclick = function()
        {
            document.getElementById('indexDireita1').style.display = 'flex';

            document.getElementById('indexDireita2').style.display = 'none';
            document.getElementById('indexDireita3').style.display = 'none';
            document.getElementById('indexDireita4').style.display = 'none';
            document.getElementById('indexDireita5').style.display = 'none';
            document.getElementById('indexDireita6').style.display = 'none';
            document.getElementById('indexDireita7').style.display = 'none';
            document.getElementById('indexDireita8').style.display = 'none';
            document.getElementById('indexDireita9').style.display = 'none';
            document.getElementById('indexDireita10').style.display = 'none';
            document.getElementById('indexDireita11').style.display = 'none';
            document.getElementById('indexDireita12').style.display = 'none';
            document.getElementById('indexDireita13').style.display = 'none';
            document.getElementById('indexDireita14').style.display = 'none';

            toogle26 = false;
            toogle27 = false;
            toogle28 = false;
            toogle29 = false;
            toogle30 = false;
            toogle31 = false;
            toogle32 = false;
            toogle33 = false;
            toogle34 = false;
            toogle35 = false;
        }
        document.getElementById('paginaInicial14').onclick = function()
        {
            document.getElementById('indexDireita1').style.display = 'flex';

            document.getElementById('indexDireita2').style.display = 'none';
            document.getElementById('indexDireita3').style.display = 'none';
            document.getElementById('indexDireita4').style.display = 'none';
            document.getElementById('indexDireita5').style.display = 'none';
            document.getElementById('indexDireita6').style.display = 'none';
            document.getElementById('indexDireita7').style.display = 'none';
            document.getElementById('indexDireita8').style.display = 'none';
            document.getElementById('indexDireita9').style.display = 'none';
            document.getElementById('indexDireita10').style.display = 'none';
            document.getElementById('indexDireita11').style.display = 'none';
            document.getElementById('indexDireita12').style.display = 'none';
            document.getElementById('indexDireita13').style.display = 'none';
            document.getElementById('indexDireita14').style.display = 'none';

            toogle26 = false;
            toogle27 = false;
            toogle28 = false;
            toogle29 = false;
            toogle30 = false;
            toogle31 = false;
            toogle32 = false;
            toogle33 = false;
            toogle34 = false;
            toogle35 = false;
        }
    }