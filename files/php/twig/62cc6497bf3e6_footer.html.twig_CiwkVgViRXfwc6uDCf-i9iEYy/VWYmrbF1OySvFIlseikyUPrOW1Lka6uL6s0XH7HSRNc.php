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

/* sites/intranetProderj/themes/intranetProderj/intranetProderj/partials/footer.html.twig */
class __TwigTemplate_c2a46f8e14b8883adac9bc406cb2c635a4c2f5e2f1c9546b875103112ef93563 extends \Twig\Template
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
        echo "<!-- FOOTER 
  <footer class=\"footer\"> 
    ";
        // line 3
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footerEndereco", [], "any", false, false, true, 3)) {
            // line 4
            echo "      <div style=\"display: flex; flex-wrap: wrap; width: 60%; margin: 10px auto; justify-content: space-between; align-items: center; text-align: left;\">
\t
        ";
            // line 6
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "logoPortal", [], "any", false, false, true, 6), 6, $this->source), "html", null, true);
            echo "

        <div class=\"endereco\">
          ";
            // line 9
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footerEndereco", [], "any", false, false, true, 9), 9, $this->source), "html", null, true);
            echo "
        </div>

        <div class=\"socia-media-ft\">
          <h4 style=\"margin-bottom: 10px; font-size: .8em;\">Redes Sociais</h4>
          ";
            // line 14
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "redesSociaisPortal", [], "any", false, false, true, 14), 14, $this->source), "html", null, true);
            echo "
        </div>
\t\t  </div>  
    ";
        }
        // line 17
        echo "   
      <div style=\"display: contents; width: 40%; text-align: center; padding-bottom: 20px;\">
          <div style=\"display: flex; flex-wrap: wrap; width: 60%; margin: 0 auto; justify-content: space-between;\">
              
              <a href=\"http://rj.gov.br/\"><div class=\"logo-branco-rodape\" style=\"top: 0; left: 0;\"></div></a>
              
              <div style=\"margin-top: 10px;\">
              <a href=\"https://www.proderj.rj.gov.br/\" target=\"_blank\">
                <div class=\"logo-proderj-fixo\" style=\"top: 0; left: 0; width:200px; height:47px\">&nbsp;</div>
              </a>
          </div>

          </div>  
      </div>
        <!-- VOLTAR AO TOPO 
      <a id=\"back2Top\" title=\"Voltar ao topo\" href=\"#\">&#10148;</a>-->
<!-- #FOOTER -->";
    }

    public function getTemplateName()
    {
        return "sites/intranetProderj/themes/intranetProderj/intranetProderj/partials/footer.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  70 => 17,  63 => 14,  55 => 9,  49 => 6,  45 => 4,  43 => 3,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "sites/intranetProderj/themes/intranetProderj/intranetProderj/partials/footer.html.twig", "/var/www/html/drupal/sites/intranetProderj/themes/intranetProderj/intranetProderj/partials/footer.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 3);
        static $filters = array("escape" => 6);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
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
