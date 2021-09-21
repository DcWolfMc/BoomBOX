const FAQ = () => {
    return(
        <div className="container-fluid estilofaq">
      <h1 className="titulo">Perguntas Frequentes</h1>
      <div className="row g-6 fonte">
        <div className="col-md-6">
          <div className="accordion" id="accordionPanelsStayOpenExample" style={{marginleft: '150px'}}>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#pergunta1" aria-expanded="true" aria-controls="pergunta1">
                  Ajuda com pagamento não efetuado
                </button>
              </h2>
              <div id="pergunta1" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  <strong>Observação:</strong> se seu plano foi feito com uma empresa parceira (como sua operadora de
                  celular ou Internet), ela é a responsável pelo seu pagamento.
                  Também verifique se o banco ou provedor tem suas informações corretas. Eles podem verificar sua
                  identidade para garantir a segurança, por exemplo, com uma senha, PIN, impressão digital ou código
                  enviado ao seu dispositivo.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#pergunta3" aria-expanded="false" aria-controls="pergunta3">
                  Não consigo redefinir a senha
                </button>
              </h2>
              <div id="pergunta3" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                  Você precisa ter acesso ao endereço de e-mail cadastrado na sua conta do Spotify para abrir o link de
                  redefinição de senha que nós enviamos.
                  Caso você não tenha acesso, estas são algumas opções:
                  Recupere o acesso ao endereço de e-mail, se possível.
                  Crie uma nova conta e comece do zero.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#pergunta5" aria-expanded="false" aria-controls="pergunta5">
                  Não recebeu o e-mail de redefinição de senha?
                </button>
              </h2>
              <div id="pergunta5" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  Verifique as pastas de spam/lixo eletrônico ou qualquer outra pasta filtrada.
                  Se você não tiver acesso ao seu endereço de e-mail, consulte “Endereço de e-mail antigo?”.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#pergunta7" aria-expanded="false" aria-controls="pergunta7">
                  O link para redefinição de senha não funciona?
                </button>
              </h2>
              <div id="pergunta7" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  Redefina a senha novamente, mas desta vez abra o link do e-mail em uma janela anônima/privada do
                  navegador.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#pergunta9" aria-expanded="false" aria-controls="pergunta9">
                  O que é o Spotify?
                </button>
              </h2>
              <div id="pergunta9" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  O Spotify é um serviço digital que dá acesso instantâneo a milhões de músicas, podcasts, vídeos e
                  outros conteúdos de criadores no mundo todo.
                  As funções básicas são gratuitas, como ouvir músicas, mas você também pode fazer upgrade para o
                  Spotify Premium.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#pergunta2" aria-expanded="true" aria-controls="pergunta2">
                  Posso guardar as músicas do Spotify?
                </button>
              </h2>
              <div id="pergunta2" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  O Spotify só dá acesso a músicas e podcasts pelos nossos apps. Devido às nossas licenças, não é
                  possível exportar nosso conteúdo para fora do aplicativo.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#pergunta4" aria-expanded="false" aria-controls="pergunta4">
                  Segurança do dispositivo
                </button>
              </h2>
              <div id="pergunta4" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                  Para garantir a segurança online em geral, mantenha o firmware, o sistema operacional e/ou o software
                  antivírus do dispositivo atualizados.
                  Confira o site de suporte do seu dispositivo para obter ajuda com isso.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#pergunta6" aria-expanded="false" aria-controls="pergunta6">
                  Remover o acesso de aplicativos de terceiros
                </button>
              </h2>
              <div id="pergunta6" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  Se algum acesso não autorizado for feito à sua conta, recomendamos remover todos os aplicativos de
                  terceiros com acesso ao Spotify, pois eles podem ter sido comprometidos. Depois, você pode permitir o
                  acesso novamente, se quiser.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#pergunta8" aria-expanded="false" aria-controls="pergunta8">
                  Sair da sua conta depois de usar o Spotify em dispositivos públicos
                </button>
              </h2>
              <div id="pergunta8" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  Seja no trabalho, na escola, na biblioteca ou quando usar um dispositivo que não é seu, lembre-se de
                  sempre sair do Spotify para evitar que outras pessoas tenham acesso à sua conta.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#pergunta10" aria-expanded="false" aria-controls="pergunta10">
                  Posso receber um reembolso?
                </button>
              </h2>
              <div id="pergunta10" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  Não podemos reembolsar o seguinte:
                  Cartões pré-pagos comprados em lojas. O melhor a se fazer é devolver à loja, se possível.
                  Pagamentos do Premium feitos por um parceiro, como o iTunes. Entre em contato com a empresa para
                  solicitar um reembolso (as informações dela aparecem na página da sua conta, em Seu plano).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default FAQ;