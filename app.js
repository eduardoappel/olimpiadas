function criarItemResultado(atleta) {

  const section = document.getElementById("resultados-pesquisa");

  const campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Se campo da pesquisa for uma string vazia.
  if(!campoPesquisa ){
    section.innerHTML = "<p>Nada foi encontrado. Digite o nome de um atleta ou esporte</p>";
    return;
  }

  section.innerHTML = "";

  // Criar os elementos de forma dinâmica
  let div = document.createElement('div');
  div.classList.add('item-resultado');

  // Criar o h2 e o link dentro dele (link para o perfil, por exemplo)
  let h2 = document.createElement('h2');
  let link = document.createElement('a');
  link.href = atleta.link; // Usar o link do atleta
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = atleta.nome;
  h2.appendChild(link);

  // Criar o parágrafo com a modalidade
  let mod = document.createElement('p');
  mod.classList.add('descricao-meta');
  mod.textContent = atleta.modalidade;

   // Criar o parágrafo com a descricao
   let desc = document.createElement('p');
   desc.classList.add('descricao-meta');
   desc.textContent = atleta.descricao;

  // Criar o segundo link (link para a Wikipedia)
  let link2 = document.createElement('a');
  link2.href = atleta.linkWikipedia;
  link2.target = '_blank';
  link2.rel = 'noopener noreferrer';
  link2.textContent = 'Mais informações';

  // Adicionar os elementos ao div
  div.appendChild(h2);
  div.appendChild(mod);
  div.appendChild(desc);
  div.appendChild(link2);

  // Adicionar o div à seção
  section.appendChild(div);

}

function pesquisar() {
  const termoBusca = document.getElementById("campo-pesquisa").value.toLowerCase();
  const resultados = atletas.filter(atleta => atleta.nome.toLowerCase().includes(termoBusca) || atleta.modalidade.toLowerCase().includes(termoBusca) || atleta.descricao.toLowerCase().includes(termoBusca));

  // Cria os elementos apenas para os atletas filtrados
  resultados.forEach(atleta => {
      criarItemResultado(atleta);
  });

  if (resultados.length === 0) {
    const section = document.getElementById("resultados-pesquisa");
    section.innerHTML = "<p>Nenhum atleta ou esporte foi encontrado para o termo <strong>" + termoBusca + "</strong>. Tente usar outras palavras-chave ou verifique a ortografia.</p>";
  }
}