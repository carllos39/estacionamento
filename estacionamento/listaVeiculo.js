import { BancoVeiculo } from "./BancoVeiculo.js";


const ul= document.getElementById("listaVeiculo");
const veiculos = BancoVeiculo.buscarTodos();

if(veiculos.length===0){
ul.innerHTML= '<li>Nenhum veiculos cadastrado!</li>'
}else{
    veiculos.forEach(c=>{
      const li = document.createElement("li");
      li.textContent = v.toString();  
    // Criar o botão editar
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = ()=> window.location.href=`formVeiculo.html?id=${v.id}`;
    btnEditar.style.backgroundColor="green";
    btnEditar.style.color="white";
    
        // Criar o botão excluir
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.style.backgroundColor="red";
        btnExcluir.style.color="white";
        btnExcluir.onclick=()=> { 
          BancoVeiculo.excluir(v.id);
         window.location.reload();
        };
     

      li.append(btnEditar,btnExcluir);

      ul.appendChild(li);
    });
}
    