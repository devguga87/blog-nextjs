export default `
<p><span style="color:rgb(0,0,0);">Este exemplo renderiza um<strong> contador</strong>. Quando você clica no botão, ele incrementa o valor:</span></p>
<h1>React Hooks</h1>
<pre><code class="language-plaintext">import * as Styled from './styles';
import { HtmlContent } from '../HtmlContent';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    &lt;Styled.Container>
      &lt;HtmlContent html={footerHtml} />
    &lt;/Styled.Container>
  );
};
</code></pre>

<p style="margin-left:0px;">Aqui, <code>useState</code> é um <i>Hook</i> (nós vamos falar sobre o que isso significa em instantes). Nós o chamamos dentro de um componente funcional para adicionar alguns states locais a ele. React irá preservar este state entre re-renderizações. <code>useState</code> retorna um par: o valor do state <i>atual</i> e uma função que permite atualizá-lo. Você pode chamar essa função a partir de um manipulador de evento ou de qualquer outro lugar. É parecido com <code>this.setState</code> em uma classe, exceto que não mescla o antigo state com o novo. (Nós iremos mostrar um exemplo comparando <code>useState</code> com <code>this.state</code> em <a href="https://pt-br.reactjs.org/docs/hooks-state.html">Utilizando o State Hook</a>.)</p><p style="margin-left:0px;">O único argumento para <code>useState</code> é o state inicial. No exemplo acima, é <code>0</code> porque nosso contador começa do zero. Perceba que diferente de <code>this.state</code>, o state não precisa ser um objeto — apesar de que possa ser se você quiser. O argumento de state inicial é utilizado apenas durante a primeira renderização.</p><h4 style="margin-left:0px;">&nbsp;</h4>
`;
