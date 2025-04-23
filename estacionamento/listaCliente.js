import { BancoCliente } from "./bancoCliente.js";

const ul= document.getElementById("listaCliente");
const clientes = BancoCliente.buscaTodos();

if(clientes.length===0){
ul.innerHTML= '<li>Nenhum cliente cadastrado!</li>'
}else{
    clientes.forEach(c=>{
      const li = document.createElement("li");
      li.textContent = c.toString();  
    // Criar o botão editar
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = ()=> window.location.href=`formCliente.html?id=${c.id}`;
    btnEditar.style.backgroundColor="green";
    btnEditar.style.color="white";
    
        // Criar o botão excluir
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.style.backgroundColor="red";
        btnExcluir.style.color="white";
        btnExcluir.onclick=()=> { 
          BancoCliente.excluir(c.id);
         window.location.reload();
        };
        const btnCliente = document.createElement("button");
        btnCliente.textContent= "cadastrar veiculo";
        btnCliente.onclick =()=> window.location.href=`formVeiculo.html?id=${c.id}`;
        btnCliente.style.backgroundColor="blue";
        btnCliente.style.color="white";

      li.append(btnEditar,btnExcluir,btnCliente);

      ul.appendChild(li);
    });
}