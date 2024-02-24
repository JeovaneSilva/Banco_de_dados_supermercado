const listProdutos = document.getElementById('listProdutos')



async function removerProdutoNoBancoDeDados(produtoId) {
  try {
      const response = await fetch(`http://localhost:3000/produtos/${produtoId}`, {
          method: 'DELETE'
      });
      if (response.ok) {
          console.log(`Produto com ID ${produtoId} removido do banco de dados com sucesso.`);
      } else {
          throw new Error("Erro ao excluir produto do banco de dados.");
      }
  } catch (error) {
      console.error("Erro:", error.message);
      alert("Erro ao excluir produto do banco de dados.");
  }
  listProdutos.innerHTML=""
  MostrarProdutos()
}

// prettier

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form-control");

  form.addEventListener("submit", async function(event) {
      event.preventDefault(); // Evita o comportamento padrão do formulário

      const nomeProduto = document.getElementById("nomeProduto").value;
      const preco = document.getElementById("preco").value;

      try {
          const response = await fetch("http://localhost:3000/produtos", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  nome_produto: nomeProduto,
                  preco: preco
              })
          });

          if (response.ok) {
              alert("Produto cadastrado com sucesso!");
              // Limpar os campos do formulário após o envio bem-sucedido
              document.getElementById("nomeProduto").value = "";
              document.getElementById("preco").value = "";
          } else {
              throw new Error("Erro ao cadastrar produto");
          }
          listProdutos.innerHTML=""
          MostrarProdutos()
      } catch (error) {
          console.error("Erro:", error.message);
          alert("Erro ao cadastrar produto");
      }
  });

});

listProdutos.addEventListener("click", async function(event) {
   
  if (event.target.classList.contains("imgLixeira")) {
      const produtoId = event.target.parentNode.parentNode.id;
      // Mostrar mensagem de confirmação
      const confirmacao = confirm("Tem certeza que deseja excluir este produto?");
      if (confirmacao) {
          // Se confirmado, remover o produto no banco de dados
          await removerProdutoNoBancoDeDados(produtoId);
      }
    }
});

function MostrarProdutos() {

  fetch('http://localhost:3000/produtos')
  .then(response => {
    return response.json()
  })
  .then(produtos => {
    console.log(produtos)
    produtos.map((p) => {
      const div = document.createElement('div')
      const div2 = document.createElement('div')
      const div3 = document.createElement('div')

      div.setAttribute('class', "produtoNaLista")
      div.setAttribute('id', p.id_produto)
      div.style.display="flex"

    
      div2.setAttribute('class', "infoProduto")
      div2.innerText = `Nome: ${p.nome_produto} \n
      Preço: ${p.preco}`

      div3.setAttribute('class', "infoIMg")
      const img = document.createElement('img')
      img.setAttribute('src', "img/delete_FILL0_wght400_GRAD0_opsz24.png")
      img.setAttribute('class', "imgLixeira")
      div3.appendChild(img)

      div.appendChild(div2)
      div.appendChild(div3)
    
      listProdutos.appendChild(div)

    })

  })
  .catch(error => {
    console.log("erro ao fazer requisição",error)
  })

}


MostrarProdutos()


