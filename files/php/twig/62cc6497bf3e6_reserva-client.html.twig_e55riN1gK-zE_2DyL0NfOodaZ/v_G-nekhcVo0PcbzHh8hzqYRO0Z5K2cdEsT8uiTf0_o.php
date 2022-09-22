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

/* sites/intranetProderj/modules/reserva_client/templates/reserva-client.html.twig */
class __TwigTemplate_287320a28522bac15d81a8830c382149f6e93038911cf3d6f0ebd04ad9ca9daa extends \Twig\Template
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
        // line 8
        echo "
<section style = \"display: flex;\" id = \"indexDireita9\" class = \"indexDireita container-servicos\">
    <section class = \"indexDireitaInicial\" style=\"margin-top: 20px;\">
        <div class = \"reservaDireita loading-container\">
            <div class = \"reservaDireitaCima loading\" >
                <h2>Aguarde</h2>
                <img src=\"";
        // line 14
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["m_path"] ?? null), 14, $this->source) . "/img/glass_spheres-loading.gif"), "html", null, true);
        echo "\">
            </div>
        </div>
        ";
        // line 18
        echo "        <div id=\"alertServerError\"class=\"alert alert-danger\" role=\"alert\">
            <p>Ocorreu um erro de comunicação com o servidor.</p>
            <p>Pressione F5 para atualizar a página.</p>
            <p>Caso o erro persista contate o administrador.</p>
        </div>
        <div class = \"reservaDireita reserva-direita-content\">
            <div class = \"reservaDireitaCima\">
                <div>
                    <h2>Consulta de Reservas de Sala de Reunião</h2>
                    <br>
                    <div class = \"reservaDireitaCimaCalendario\">
                        <img src=\"";
        // line 29
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["m_path"] ?? null), 29, $this->source) . "/img/icon_calendario.png"), "html", null, true);
        echo "\">
                        <p>
                            ";
        // line 31
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_date_format_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["item"] ?? null), "content", [], "any", false, false, true, 31), 31, $this->source), "d/m/Y H:i:s"), "html", null, true);
        echo "
                        </p>
                    </div>
                </div>
                <div id = \"reservaBotao\" class = \"botaoCompleto\"> 
                    <div class=\"botao-reserva\">
                        Solicitar Reserva de Sala de Reunião
                    </div>
                </div>
            </div>
            <div class = \"reservaDireitaTabela\">
                ";
        // line 43
        echo "            </div>
        </div>
    </section>
</section>
<section style = \"display: none;\" id = \"indexDireita10\" class = \"reservaCompleto\">
    <div id = \"reservaCompleto-botao2\" class = \"reservaCompleto-botao\">
        <img id = \"iconeFechar\" src = \"";
        // line 49
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["m_path"] ?? null), 49, $this->source) . "/img/X.png"), "html", null, true);
        echo "\">
    </div>
    <div class = \"reserva\">
        <div class = \"reserva-div1\">
            <h1>Solicitação de Reserva de Sala de Reunião</h1>
        </div>
        <div class = \"reserva-div2\">
            <div id=\"alertOpError\" class=\"alert\" style=\"display:none\">
                <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span> 
                <span id=\"alertMsg\">Atenção! Preencha corretamente os campos asinalados com * (Obrigatórios).</span>
            </div>
            <div id=\"form\">
                <div class = \"reservaFormFlex\">
                    <div class = \"reservaFormFlexCampos\">
                        <label id = \"labels\">Data da Reserva:</label>
                        <input class = \"reservaInput\" value=\"yyyy-MM-dd\" type=\"date\"  name=\"data\" required>
                    </div>
                    <div class = \"reservaFormFlexCampos\">
                        <label class = \"sala\" for=\"sala\">Sala:</label>
                        <select class = \"reservaInput\" name=\"sala\">
                            <option value=\"\" disabled selected>Selecione</option>
                            <option value=\"25 andar\">25º andar</option>
                        </select>
                    </div>
                </div>
                <div class = \"reservaFormFlex\">
                    <div class = \"reservaFormFlexCampos\">
                        <label class = \"horaI\" for=\"horaI\">Hora Inicial da Reserva:</label>
                        <select class = \"reservaInput\" name=\"horaI\">
                            <option value=\"\" disabled selected>Selecione</option>
                            <option value=\"09:00:00\">09:00:00</option>
                            <option value=\"10:00:00\">10:00:00</option>
                            <option value=\"11:00:00\">11:00:00</option>
                            <option value=\"12:00:00\">12:00:00</option>
                            <option value=\"13:00:00\">13:00:00</option>
                            <option value=\"14:00:00\">14:00:00</option>
                            <option value=\"15:00:00\">15:00:00</option>
                            <option value=\"16:00:00\">16:00:00</option>
                            <option value=\"17:00:00\">17:00:00</option>
                        </select>
                    </div>
                    <div class = \"reservaFormFlexCampos\">
                        <label class = \"horaF\" for=\"horaF\">Hora Final da Reserva:</label>
                        <select class = \"reservaInput\" name=\"horaF\">
                            <option value=\"\" disabled selected>Selecione</option>
                            <option value=\"10:00:00\">10:00:00</option>
                            <option value=\"11:00:00\">11:00:00</option>
                            <option value=\"12:00:00\">12:00:00</option>
                            <option value=\"13:00:00\">13:00:00</option>
                            <option value=\"14:00:00\">14:00:00</option>
                            <option value=\"15:00:00\">15:00:00</option>
                            <option value=\"16:00:00\">16:00:00</option>
                            <option value=\"17:00:00\">17:00:00</option>
                            <option value=\"18:00:00\">18:00:00</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div class = \"reservaFormFlexCampos2\">
                        <label for=\"nome\">Nome do Solicitante:</label>
                        <input class = \"reservaInput2\" type=\"text\" name=\"nome\">
                    </div>
                    <div class = \"reservaFormFlexCampos2\">
                        <label for=\"email\">Email:</label>
                        <input class = \"reservaInput2\" type=\"email\" placeholder=\"fulano@mail.com\" name=\"email\">
                    </div>
                    <div class = \"reservaFormFlexCampos2\">
                        <label for=\"telefone\">Telefone:</label>
                        <input id=\"phone\" class = \"reservaInput2\" type=\"tel\" placeholder=\"(xx)xxxxx-xxxx\" name=\"telefone\" />
                    </div>
                </div>
                <div class = \"reservaFormFlexCampos2\">
                    <label for=\"recursos\">Informe os Recursos Extras que irá Precisar:</label>
                    <textarea name=\"recursos\"></textarea>
                </div>
                <div style = \"margin-top: 10px; text-align: -webkit-center;\">
                    <div class  = \"botaoForm\">
                        <input class=\"booking-action\" type=\"button\" id = \"botaoForm\" value=\"Reservar\" />
                        <input class=\"booking-action upd-reservation\" type=\"button\" id = \"botaoForm\" value=\"Atualizar Reserva\" disabled style=\"display: none;\"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>";
    }

    public function getTemplateName()
    {
        return "sites/intranetProderj/modules/reserva_client/templates/reserva-client.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  93 => 49,  85 => 43,  71 => 31,  66 => 29,  53 => 18,  47 => 14,  39 => 8,);
    }

    public function getSourceContext()
    {
        return new Source("", "sites/intranetProderj/modules/reserva_client/templates/reserva-client.html.twig", "/var/www/html/drupal/sites/intranetProderj/modules/reserva_client/templates/reserva-client.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 14, "date" => 31);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape', 'date'],
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
