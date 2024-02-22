const produtosRes = document.getElementById('produtos')
const listProdutos = document.getElementById('listProdutos')

function MostrarProdutos() {
  

  fetch('http://localhost:3000/produtos')
  .then(response => {
    return response.json()
  })
  .then(produtos => {
    console.log(produtos)
    produtos.map((p) => {
      const div = document.createElement('div')
      div.setAttribute('class','produtoNaLista')
      div.innerText = `Nome: ${p.nome_produto} \n
      Preço: ${p.preco}`
      listProdutos.appendChild(div)
    })

  })
  .catch(error => {
    console.log("erro ao fazer requisição",error)
  })

}



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
          produtosRes.innerHTML=" "
          MostrarProdutos()
      } catch (error) {
          console.error("Erro:", error.message);
          alert("Erro ao cadastrar produto");
      }
  });
});

MostrarProdutos()



