import { BancoFuncionario } from "./BancoFuncionario.js";

const ul = document.getElementById("listaFuncionario");
const funcionarios = BancoFuncionario.buscaTodos();

if(funcionarios===0){
ul.innerHTML= '<li>Nenhum funcionário cadastrado!</li>'
}else{
    funcionarios.forEach(f => {
        const li = document.createElement("li");
        li.textContent = f.toString();
  //Criaro botão editar
  const btnEditar= document.createElement("button");
  btnEditar.textContent = "Editar";
  btnEditar.onclick = ()=> window.location.href =`formFuncionario.html?id=${f.id}`;
  btnEditar.style.backgroundColor="green";
  btnEditar.style.color="white";

  //Criar o botão para excuir
  const btnExcluir= document.createElement("button");
  btnExcluir.textContent="Excluir";
  btnExcluir.style.backgroundColor="red";
  btnExcluir.style.color="white";
  btnExcluir.onclick = ()=> {
 BancoFuncionario.excluir(f.id);
 window.location.reload();
  };

  li.append(btnEditar,btnExcluir);
  ul.appendChild(li);
    });

}