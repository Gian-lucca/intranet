<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* sites/intranetProderj/themes/intranetProderj/intranetProderj/partials/header.html.twig */
class __TwigTemplate_e042c33496f967477bb1b5efe4e86a39dd3381e5cc9c211b507a89d6bef86f53 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<!--Author Gianlucca Augusto <gianlucca.augusto@extreme.digital>
 version 1.1
 copyright Proderj 2021.-->

<div class=\"container-pagina\">
    <div class=\"menu-superior\">
        <div class=\"menusupi\">      
            <div class=\"esquerda-menu-superior\">
               <!-- <ul>
                    <li style=\"font-weight:600; letter-spacing:0.8\" title=\"Portal do Governo do Rio de Janeiro\"><a href=\"http://www.rj.gov.br/default.aspx\">rj.gov</a></li>
                </ul>-->
                <div class=\"social-midia-sup\" style=\"padding-left: 20px;\">
                    <button type=\"submit\">
                    <div id=\"acessibilidade-myDropdown\" class=\"acessibilidade-dropdown-content acessibilidade-show\">
                  <!--  <a href=\"#\" class=\"contrast\" id=\"contraste\">Contraste</a>-->
                   <!-- <a href=\"#\" id=\"tamanhofonte\"><span style=\"font-weight:700;\">A</span><span style=\"font-weight:700; font-size:0.8em;\">A</span>&nbsp; Tamanho da fonte</a>-->
                 </div>
                        <i class=\"fa fa-adjust\" aria-hidden=\"true\"></i>
                         <h3> Seja Bem Vindo!!</h3>
                    </button>
                    <button type=\"submit\">
                        <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>
                      <!--    <h3>Admin</h3>-->
                    </button>
                </div>
            </div>
            <div class=\"infosup\">
                ";
        // line 28
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "menuTopo", [], "any", false, false, true, 28), 28, $this->source), "html", null, true);
        echo "
            </div>
            <div id=\"atl-player\">
                <div style=\"height: 35px; \">                    
                </div>
            </div>
        </div>
    </div><!-- #MENUSUPI -->    
    <script>
        function openNav() {
           // document.getElementById(\"myNav\").style.display = \"block\";
        }

        function closeNav() {
            //document.getElementById(\"myNav\").style.display = \"none\";
        }
    </script>
    <header class=\"cabecalho\"><!-- ### HEADER ### -->
        <section id = \"indexCorpoConsultas\" class = \"index-corpo-consultas\">
                <div class = \"indexImagemIconesBlocos\">
                    <div class = \"indexImagemIcones\" >
                    <a href=\"/\" rel=\"home\">
                        <img src = ";
        // line 50
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 50, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Logotipo/LogotipoIntranet.png"), "html", null, true);
        echo " atl=\"Início\">
                        </a>
                        <div class = \"indexRedesSociais\">
                            <a href = \"https://www.instagram.com/proderj/\">
                                <img src = ";
        // line 54
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 54, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Icon_instagram.png"), "html", null, true);
        echo ">
                            </a>
                            <a href = \"https://www.linkedin.com/company/proderjtic\">
                                <img src = ";
        // line 57
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 57, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Icon_linkedin.png"), "html", null, true);
        echo ">
                            </a>
                            <a href = \"https://twitter.com/proderj\">
                                <img src = ";
        // line 60
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 60, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Icon_twitter.png"), "html", null, true);
        echo ">
                            </a>
                        </div>
                    </div>
                    <div class = \"indexBlocos\">
                        <div id = \"indexBloco1\" class = \"index-consultas-bloco\">
                            <div id = \"indexBlocoConteudo1\" class = \"index-consultas-bloco-conteudo\">
                                <img id = \"bloco1W\" src = ";
        // line 67
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 67, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Menu_Icon_PRODERJ.png"), "html", null, true);
        echo ">
                                <img id = \"bloco1B\" src = ";
        // line 68
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 68, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Menu_Icon_PRODERJ_B.png"), "html", null, true);
        echo ">
                                <h2 id = \"bloco1h2\">
                                    PRODERJ
                                </h2>
                            </div>
                        </div>
                        <div id = \"indexBloco1Sub\" class = \"indexBlocoSub\" style=\"display: none;\">
                            <div id = \"indexBloco1SubConteudo\" class = \"indexBlocoSubConteudo\">
                                <ul>
                                    <a href = \"/ASCPDERJ\"><li>
                                        <h3>
                                            ASCPDERJ
                                        </h3>
                                        <img src = ";
        // line 81
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 81, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/icon_Link_externo.png"), "html", null, true);
        echo ">
                                    </li></a>
                                    <a href = \"/Estatuto\"><li>
                                        <h3>
                                            Estatuto do Servidor
                                        </h3>
                                        <img src = ";
        // line 87
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 87, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/icon_Link_externo.png"), "html", null, true);
        echo ">
                                    </li></a>
                                    <div id = \"estrutura\" class = \"iconePointer\">
                                        <a href = \"/Estrutura\"><li>
                                            <h3>
                                                Estrutura
                                            </h3>
                                        </li></a>
                                    </div>
                                    <div id = \"formularios\" class = \"iconePointer\">
                                        <a href = \"/Formularios\"><li>
                                            <h3>
                                                Formulários
                                            </h3>
                                        </li></a>
                                    </div>
                                    <div id = \"mapeamento\" class = \"iconePointer\">
                                        <a href = \"/Mapeamento\"><li>
                                            <h3>
                                                Mapeamento de Processos Internos
                                            </h3>
                                        </li></a>
                                    </div>
                                    <div id = \"normas\" class = \"iconePointer\">
                                        <a href = \"/Normas\"><li>
                                            <h3>
                                                Normas e Procedimentos
                                            </h3>
                                        </li></a>
                                    </div>
                                    <div id = \"perfil\" class = \"iconePointer\">
                                        <a href = \"/Perfil\"><li>
                                            <h3>
                                                Perfil do Presidente
                                            </h3>
                                        </li></a>
                                    </div>
                                    <div id = \"perfil\" class = \"iconePointer\">
                                        <a href = \"/Quem_somos\"><li>
                                            <h3>
                                                Quem Somos
                                            </h3>
                                        </li></a>
                                    </div>
                                    <a href = \"/Regime\"><li>
                                        <h3>
                                            Regime Interno
                                        </h3>
                                        <img src = ";
        // line 135
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 135, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/icon_Link_externo.png"), "html", null, true);
        echo ">
                                    </li></a>
                                </ul>
                            </div>
                        </div>
                        <div id = \"indexBloco2\" class = \"index-consultas-bloco\">
                            <div id = \"indexBlocoConteudo2\" class = \"index-consultas-bloco-conteudo\">
                                <img id = \"bloco2B\" src = ";
        // line 142
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 142, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Menu_Icon_RH.png"), "html", null, true);
        echo ">
                                <img id = \"bloco2W\" src = ";
        // line 143
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 143, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Menu_Icon_RH_W.png"), "html", null, true);
        echo ">
                                <h2 id = \"bloco2h2\">
                                    RH
                                </h2>
                            </div>
                        </div>
                        <div id = \"indexBloco2Sub\" class = \"indexBlocoSub\" style=\"display: none;\">
                            <div id = \"indexBloco2SubConteudo\" class = \"indexBlocoSubConteudo\">
                                <ul>
                                    <a href = \"/Adicional\"><li>
                                        <h3>
                                            Adicional (GDE)
                                        </h3>
                                        <img src = ";
        // line 156
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 156, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/icon_Link_externo.png"), "html", null, true);
        echo ">
                                    </li></a>
                                    <a href = \"/Calendario\"><li>
                                        <h3>
                                            Calendário de Pagamento
                                        </h3>
                                        <img src = ";
        // line 162
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 162, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/icon_Link_externo.png"), "html", null, true);
        echo ">
                                    </li></a>
                                    <a href = \"https://www.servidor.rj.gov.br/portal-web/index\"><li>
                                        <h3>
                                            Portal do Servidor
                                        </h3>
                                        <img src = ";
        // line 168
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 168, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/icon_Link_externo.png"), "html", null, true);
        echo ">
                                    </li></a>
                                </ul>
                            </div>
                        </div>
                        <div id = \"indexBloco3\" class = \"index-consultas-bloco\">
                            <div id = \"indexBlocoConteudo3\" class = \"index-consultas-bloco-conteudo\">
                                <img id = \"bloco3B\" src = ";
        // line 175
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 175, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Menu_Icon_Serviços.png"), "html", null, true);
        echo ">
                                <img id = \"bloco3W\" src = ";
        // line 176
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 176, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Menu_Icon_Serviços_W.png"), "html", null, true);
        echo ">
                                <h2 id = \"bloco3h2\">
                                    Serviços
                                </h2>
                            </div>
                        </div>
                        <div id = \"indexBloco3Sub\" class = \"indexBlocoSub\" style=\"display: none;\">
                            <div id = \"indexBloco3SubConteudo\" class = \"indexBlocoSubConteudo\">
                                <ul>
                                    <div id = \"aniversariantes\" class = \"iconePointer\">
                                        <a href = \"/birthday\"><li>
                                            <h3>
                                                Aniversariantes
                                            </h3>
                                        </li>
                                    </div>
                                    <a href = \"https://www.atende.rj.gov.br/\"><li>
                                        <h3>
                                            Atende RJ
                                        </h3>
                                        <img src = ";
        // line 196
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 196, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/icon_Link_externo.png"), "html", null, true);
        echo ">
                                    </li></a>
                                    <div id = \"quem\" class = \"iconePointer\">
                                        <a href = \"/Quem\"><li>
                                            <h3>
                                                Quem & Onde
                                            </h3>
                                        </li>
                                    </div>
                                    <a href = \"/Reserva_veiculo\"><li>
                                        <h3>
                                            Reserva de Veículo
                                        </h3>
                                        <img src = ";
        // line 209
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 209, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/icon_Link_externo.png"), "html", null, true);
        echo ">
                                    </li></a>
                                    <div id = \"reserva\" class = \"iconePointer\">
                                        <a href = \"/reserva\"><li>
                                            <h3>
                                                Reserva Sala de Reunião
                                            </h3>
                                        </li></a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div id = \"indexBloco4\" class = \"index-consultas-bloco\">
                            <div id = \"indexBlocoConteudo4\" class = \"index-consultas-bloco-conteudo\">
                                <img id = \"bloco4B\" src = ";
        // line 223
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 223, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Menu_Icon_Mural.png"), "html", null, true);
        echo ">
                                <img id = \"bloco4W\" src = ";
        // line 224
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 224, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Menu_Icon_Mural_W.png"), "html", null, true);
        echo ">
                                <h2 id = \"bloco4h2\">
                                    Mural
                                </h2>
                            </div>
                        </div>
                        <div id = \"indexBloco4Sub\" class = \"indexBlocoSub\" style=\"display: none;\">
                            <div id = \"indexBloco4SubConteudo\" class = \"indexBlocoSubConteudo\">
                                <ul>
                                    <a href = \"http://www.ioerj.com.br/portal/modules/content/index.php?id=21\"><li>
                                        <h3>
                                            Diário Oficial do Estado do Rio de Janeiro
                                        </h3>
                                        <img src = ";
        // line 237
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 237, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/icon_Link_externo.png"), "html", null, true);
        echo ">
                                    </li></a>
                                    <a href = \"/Diga_e_tal\"><li>
                                        <h3>
                                            Diga & Tal
                                        </h3>
                                        <img src = ";
        // line 243
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 243, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/icon_Link_externo.png"), "html", null, true);
        echo ">
                                    </li></a>
                                    <a href = \"http://www.rj.gov.br/\"><li>
                                        <h3>
                                            GovernoRJ
                                        </h3>
                                        <img src = ";
        // line 249
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 249, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/icon_Link_externo.png"), "html", null, true);
        echo ">
                                    </li></a>
                                </ul>
                            </div>
                        </div>
                        <div id = \"indexBloco5\" class = \"index-consultas-bloco\">
                            <div id = \"indexBlocoConteudo5\" class = \"index-consultas-bloco-conteudo\">
                                <img id = \"bloco5B\" src = ";
        // line 256
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 256, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Menu_Icon_Tic.png"), "html", null, true);
        echo ">
                                <img id = \"bloco5W\" src = ";
        // line 257
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 257, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Menu_Icon_Tic_W.png"), "html", null, true);
        echo ">
                                <h2 id = \"bloco5h2\">
                                    TIC
                                </h2>
                            </div>
                        </div>
                        <div id = \"indexBloco5Sub\" class = \"indexBlocoSub\" style=\"display: none;\">
                            <div id = \"indexBloco5SubConteudo\" class = \"indexBlocoSubConteudo\">
                                <ul>
                                    <a href = \"/GProderj\"><li>
                                        <h3>
                                            GProderj
                                        </h3>
                                        <img src = ";
        // line 270
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 270, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/icon_Link_externo.png"), "html", null, true);
        echo ">
                                    </li></a>
                                    <div id = \"mds\" class = \"iconePointer\">
                                        <a href = \"/MDS\"><li>
                                            <h3>
                                                MDS
                                            </h3>
                                        </li></a>
                                    </div>
                                    <div id = \"planilha\" class = \"iconePointer\">
                                        <a href = \"/Planilha_Ambiente\"><li>
                                            <h3>
                                                Planilha de Ambiente
                                            </h3>
                                        </li></a>
                                    </div>
                                    <a href = \"/Segurança\"><li>
                                        <h3>
                                            Segurança da Informação
                                        </h3>
                                        <img src = ";
        // line 290
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 290, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/icon_Link_externo.png"), "html", null, true);
        echo ">
                                    </li></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = \"indexLogoGoverno\">
                <a href=\"http://www.rj.gov.br/\">
                    <img src =\"/Logos/logo-gov-header.col.png\">
                    </a>
                </div>                
            </section>      
    </header><!--  ### FIM HEADER ###  -->
    <section id=\"menu\">
        <div id=\"myNav\" class=\"menu-overlay\">
            <div class=\"menu-overlay-container section-container\">
                <div class=\"menu-overlay-content\">
                    <div class=\"menu-row\">
                        <div class=\"\" id=\"close\">
                            <a href=\"javascript:void(0)\" class=\"closebtn\" onClick=\"closeNav()\">&times;</a>
                        </div>
                        ";
        // line 312
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "menuPrincipal", [], "any", false, false, true, 312), 312, $this->source), "html", null, true);
        echo "
                    </div>
                </div>
            </div>
        </div><!--/div--> 
    </section><!-- #MENU -->
</div>";
    }

    public function getTemplateName()
    {
        return "sites/intranetProderj/themes/intranetProderj/intranetProderj/partials/header.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  436 => 312,  411 => 290,  388 => 270,  372 => 257,  368 => 256,  358 => 249,  349 => 243,  340 => 237,  324 => 224,  320 => 223,  303 => 209,  287 => 196,  264 => 176,  260 => 175,  250 => 168,  241 => 162,  232 => 156,  216 => 143,  212 => 142,  202 => 135,  151 => 87,  142 => 81,  126 => 68,  122 => 67,  112 => 60,  106 => 57,  100 => 54,  93 => 50,  68 => 28,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "sites/intranetProderj/themes/intranetProderj/intranetProderj/partials/header.html.twig", "/var/www/html/drupal/sites/intranetProderj/themes/intranetProderj/intranetProderj/partials/header.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 28);
        static $functions = array("active_theme_path" => 50);

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                ['active_theme_path']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
