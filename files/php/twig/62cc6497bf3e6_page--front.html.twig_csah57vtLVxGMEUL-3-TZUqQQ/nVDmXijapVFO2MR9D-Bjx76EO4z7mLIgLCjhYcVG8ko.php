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

/* sites/intranetProderj/themes/intranetProderj/intranetProderj/page--front.html.twig */
class __TwigTemplate_9b5b5d9888b7b3383122cb481b701876cf199515500957472227bc67317e1a97 extends \Twig\Template
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
        echo "
";
        // line 2
        $this->loadTemplate((($context["directory"] ?? null) . "/partials/header.html.twig"), "sites/intranetProderj/themes/intranetProderj/intranetProderj/page--front.html.twig", 2)->display($context);
        // line 3
        echo "
";
        // line 4
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sliderPrincipal", [], "any", false, false, true, 4)) {
            // line 5
            echo "    <div class=\"slider-fixo\" data-aos=\"zoom-in\" data-aos-duration=\"2000\">
        ";
            // line 6
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sliderPrincipal", [], "any", false, false, true, 6), 6, $this->source), "html", null, true);
            echo "       
    </div><!-- /slider-fixo -->   
";
        }
        // line 9
        echo "
<div class = \"indexDireitaColunaDireita\">
 <h1>Atalhos</h1>
   <ul>
  <div id = \"comunicados\" class = \"iconePointerSublinhado\">
    <a href = \"Comunicados\"><li>
         <img src = ";
        // line 15
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 15, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Atl_Icon_Comunicados.png"), "html", null, true);
        echo ">
             <p>Comunicados</p>
     </li></a>
  </div>
    <a href = \"https://proderj.webmail.rj.gov.br/\"><li>
      <img src = ";
        // line 20
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 20, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Atl_icon_webmail.png"), "html", null, true);
        echo ">
        <p>Webmail</p>
          </li></a>
     <a href = \"https://www.proderj.rj.gov.br/\"><li>
       <img src = ";
        // line 24
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 24, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Atl_icon_portal_proderj.png"), "html", null, true);
        echo ">
         <p>Portal PRODERJ</p>
           </li></a>
      <a href = \"/reserva\"><li>
         <img src = ";
        // line 28
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 28, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Atl_icon_sala_de_reunião.png"), "html", null, true);
        echo ">
           <p>Sala de Reunião</p>
           </li></a>
        <div id = \"quem2\" class = \"iconePointerSublinhado\">
       <a href = \"/Quem\"><li>
          <img src = ";
        // line 33
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 33, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Atl_Icon_Quem_e_Onde.png"), "html", null, true);
        echo ">
            <p>Quem & Onde</p>
              </li></a>
           </div>
        <a href = \"/ASCPDERJ\"><li>
            <img src = ";
        // line 38
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 38, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Atl_Icon_ASCPDERJ.png"), "html", null, true);
        echo ">
             <p>ASCPDERJ</p>
            </li></a>
        <a href = \"/Diga_e_tal\"><li>
             <img src = ";
        // line 42
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 42, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Atl_Icon_Digae_e_Tal.png"), "html", null, true);
        echo ">
              <p>Diga & Tal</p>
               </li></a>
              <a href = \"/Mapeamento\"><li>
              <img src = ";
        // line 46
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, (($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 46, $this->source) . $this->extensions['Drupal\Core\Template\TwigExtension']->getActiveThemePath()) . "/imagens/Ícones/Atl_Icon_Mapeamento.png"), "html", null, true);
        echo ">
              <p>Mapeamento de Processos Internos</p>
              </li></a>
              </ul>
</div>
<div class=\"top\">
<div class=\"indexDireitaColunaEsquerdaCima\">
    ";
        // line 53
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "videosPrincipal", [], "any", false, false, true, 53)) {
            // line 54
            echo "    <section id=\"video\" data-aos=\"fade-right\" class=\"programas-acoes branco aos-init aos-animate\"  data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"2000\">
        <div class=\"section-container\" id=\"video-section\">
            <div class=\"titulo-secao\"><span>Vídeo</span></div>
                ";
            // line 57
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "videosPrincipal", [], "any", false, false, true, 57), 57, $this->source), "html", null, true);
            echo "
        </div>
    </section>
    ";
        }
        // line 61
        echo "
    ";
        // line 62
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "PrincipaisServicos2", [], "any", false, false, true, 62)) {
            // line 63
            echo "    <section data-aos=\"fade-left\" class=\"programas-acoes branco aos-init aos-animate\">
        <div class=\"section-container\">    
            <div class=\"titulo-secao\">
                <span>Principais Serviços</span>
            </div>       
            ";
            // line 68
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "PrincipaisServicos2", [], "any", false, false, true, 68), 68, $this->source), "html", null, true);
            echo "
        </div>    
    </section><!-- /Principais Serviços -->
    ";
        }
        // line 72
        echo "
    ";
        // line 73
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "PrincipaisServicos", [], "any", false, false, true, 73)) {
            // line 74
            echo "    <section data-aos=\"fade-left\" class=\"programas-acoes branco aos-init aos-animate\">
        <div class=\"section-container\">    
            <div class=\"titulo-secao\">
                <span>Programa de Capacitação</span>
            </div>       
            ";
            // line 79
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "PrincipaisServicos", [], "any", false, false, true, 79), 79, $this->source), "html", null, true);
            echo "
        </div>    
    </section><!-- /Principais Serviços -->
    ";
        }
        // line 83
        echo "</div>

 <!--    ";
        // line 85
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "flipCard", [], "any", false, false, true, 85)) {
            // line 86
            echo "    <section class=\"section-container aos-init aos-animate\" data-aos=\"flip-down\" data-aos-easing=\"ease-out-cubic\">
    \t<div class=\"section-container\">    
            <div class=\"titulo-secao\">
                <span>Programa de Capacitação</span>
            </div>  
        ";
            // line 91
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "flipCard", [], "any", false, false, true, 91), 91, $this->source), "html", null, true);
            echo "
        </div>
    </section>
    ";
        }
        // line 94
        echo "-->
</div>



";
        // line 99
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "noticiasPrincipal", [], "any", false, false, true, 99)) {
            // line 100
            echo "    <section class=\"banner branco noticias\" class=\"programas-acoes branco aos-init aos-animate\">
        ";
            // line 101
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "noticiasPrincipal", [], "any", false, false, true, 101), 101, $this->source), "html", null, true);
            echo "
    </section>
    <hr class=\"gradiente\">
";
        }
        // line 105
        echo "
";
        // line 106
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bannerPrincipal", [], "any", false, false, true, 106)) {
            // line 107
            echo "    <section class=\"banner branco\">
        <div class=\"section-container aos-init aos-animate\" data-aos=\"flip-down\" data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"2000\">
            <div class=\"banner-principal\">
                ";
            // line 110
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bannerPrincipal", [], "any", false, false, true, 110), 110, $this->source), "html", null, true);
            echo "
            </div>
        </div>
    </section>
    <hr class=\"gradiente\">
";
        }
        // line 116
        echo "
";
        // line 117
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "publicacoes", [], "any", false, false, true, 117)) {
            // line 118
            echo "    <section data-aos=\"fade-left\" class=\"programas-acoes branco aos-init aos-animate\">
        <div class=\"section-container\">    
            <div class=\"titulo-secao\">
                <span>Publicações</span>
            </div>       
            ";
            // line 123
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "publicacoes", [], "any", false, false, true, 123), 123, $this->source), "html", null, true);
            echo "
        </div>    
    </section><!-- /linkUteis -->
    <hr class=\"gradiente\">
";
        }
        // line 128
        echo "
";
        // line 129
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "dadosPrincipal", [], "any", false, false, true, 129)) {
            // line 130
            echo "    <section class=\"programas-acoes branco\" data-aos=\"fade-up-right\" data-aos-easing=\"ease-out-cubic\" data-aos-duration=\"2000\" class=\"aos-init aos-animate\">
        <div class=\"section-container\">
            <div class=\"titulo-secao\">
                <span>ISP Dados</span>
                <p></p>
            </div>
            <div class=\"dados-principal\">
                ";
            // line 137
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "dadosPrincipal", [], "any", false, false, true, 137), 137, $this->source), "html", null, true);
            echo "
            </div>

        </div>
    </section>
<hr class=\"gradiente\">
";
        }
        // line 144
        echo "

<!-- VOLTAR AO TOPO 

    <a id=\"back2Top\" title=\"Voltar ao topo\" href=\"#\">&#10148;</a>

";
        // line 150
        $this->loadTemplate((($context["directory"] ?? null) . "/partials/footer.html.twig"), "sites/intranetProderj/themes/intranetProderj/intranetProderj/page--front.html.twig", 150)->display($context);
        echo "-->
";
    }

    public function getTemplateName()
    {
        return "sites/intranetProderj/themes/intranetProderj/intranetProderj/page--front.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  290 => 150,  282 => 144,  272 => 137,  263 => 130,  261 => 129,  258 => 128,  250 => 123,  243 => 118,  241 => 117,  238 => 116,  229 => 110,  224 => 107,  222 => 106,  219 => 105,  212 => 101,  209 => 100,  207 => 99,  200 => 94,  193 => 91,  186 => 86,  184 => 85,  180 => 83,  173 => 79,  166 => 74,  164 => 73,  161 => 72,  154 => 68,  147 => 63,  145 => 62,  142 => 61,  135 => 57,  130 => 54,  128 => 53,  118 => 46,  111 => 42,  104 => 38,  96 => 33,  88 => 28,  81 => 24,  74 => 20,  66 => 15,  58 => 9,  52 => 6,  49 => 5,  47 => 4,  44 => 3,  42 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "sites/intranetProderj/themes/intranetProderj/intranetProderj/page--front.html.twig", "/var/www/html/drupal/sites/intranetProderj/themes/intranetProderj/intranetProderj/page--front.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("include" => 2, "if" => 4);
        static $filters = array("escape" => 6);
        static $functions = array("active_theme_path" => 15);

        try {
            $this->sandbox->checkSecurity(
                ['include', 'if'],
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
