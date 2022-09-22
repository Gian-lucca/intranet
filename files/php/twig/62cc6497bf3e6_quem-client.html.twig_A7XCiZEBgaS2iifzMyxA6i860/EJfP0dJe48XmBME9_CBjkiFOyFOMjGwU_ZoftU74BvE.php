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

/* sites/intranetProderj/modules/quem_client/templates/quem-client.html.twig */
class __TwigTemplate_20ad81d18aa8ed0f1ee403f5aa5853671b7e5403637d97fad3b1796e9895cb8a extends \Twig\Template
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
        // line 6
        echo "
<section id=\"indexDireita9\" class=\"indexDireita\">
    <div class=\"esquerda\"></div>
    <section id=\"indexDireita9\" class=\"container-servicos\">
        <div class=\"reservaDireita loading-container\">
            <div class=\"reservaDireitaCima loading\">
                <h2>Aguarde</h2>
                <img src=";
        // line 13
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["m_path"] ?? null), 13, $this->source) . "/img/glass_spheres-loading.gif"), "html", null, true);
        echo ">
            </div>
        </div>
        <div class=\"main-menu\">
            <div id=\"paginaInicial9\" class=\"direitaTituloTexto\">
                <a href=\"http://www.intranetdrupal.proderj.rj.gov.br/\">
                    <h3>Página Inicial</h3>
                </a>
                <h3>></h3>
                <a href=\"#\">
                    <h3>Serviços</h3>
                </a>
                <h3>></h3>
                <a href=\"#\">
                    <h3>Quem & Onde</h3>
                </a>
            </div>
            <h1 class=\"titulo-menu\">Quem & Onde</h1>

            <div class=\"container-busca\">
                <div class=\"calendario-main\">
                     <nav>
                        <div class=\"dropdown\">
                            <img src=";
        // line 36
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["m_path"] ?? null), 36, $this->source) . "/img/filter.png"), "html", null, true);
        echo "
                                class=\"calendario-texto icon\" alt=\"\" srcset=\"\">
                            <div class=\"dropdown-content\">
                                <span data-search=\"name\">Nome</span>
                                <span data-search=\"ua\">Setor</span>
                                <span data-search=\"roleName\">Cargo</span>
                            </div>
                        </div>
                    </nav> 
                </div>

                <div class=\"buscar-main\">
                    <input class=\"Busca-texto\" type=\"text\" placeholder=\"Quem você procura ?\">
                </div>

                <div class=\"loupe\">
                    <img class=\"loupe\" src=";
        // line 52
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["m_path"] ?? null), 52, $this->source) . "/img/loupe-blue.png"), "html", null, true);
        echo " alt=\"loupe\">
                </div>
            </div> 
            ";
        // line 56
        echo "            <div class=\"reservaDireitaTabela\">
                <table id=\"who-table\" class=\"tabela\" id=\"tabela3\">
                    <thead>
                        <tr id=\"lista\">
                            <th id=\"width\">Nome</th>
                            <th id=\"width\">Aniversário</th>
                            <th id=\"width\">Cargo</th>
                            <th id=\"width\">ua</th>
                            <th id=\"width\">E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <!-- Api -->
                        </tr>
                    </tbody>
                </table>
                <div class=\"pagination\">
                    <ul>
                        <!--pages or li are comes from javascript -->
                    </ul>
                </div>
            </div>
        </div>
        ";
        // line 81
        echo "        <div id=\"alertBox\"class=\"alert alert-danger\" role=\"alert\">
            <p>Ocorreu um erro de comunicação com o servidor.</p>
            <p>Pressione F5 para atualizar a página.</p>
            <p>Caso o erro persista contate o administrador.</p>
        </div>
</section>
</section>
";
    }

    public function getTemplateName()
    {
        return "sites/intranetProderj/modules/quem_client/templates/quem-client.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  125 => 81,  99 => 56,  93 => 52,  74 => 36,  48 => 13,  39 => 6,);
    }

    public function getSourceContext()
    {
        return new Source("", "sites/intranetProderj/modules/quem_client/templates/quem-client.html.twig", "/var/www/html/drupal/sites/intranetProderj/modules/quem_client/templates/quem-client.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 13);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                []
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
