// document.getElementById('departamento').addEventListener('focus',function(){
//     const inputDepartamento = document.getElementById('departamento');
//     inputDepartamento.style.backgroundColor="#90ee90"
// });

// document.getElementById('departamento').addEventListener('blur',function(){
//     const inputDepartamento = document.getElementById('departamento');
//     inputDepartamento.style.backgroundColor="white"
// });

function adicionarCorAoFocarInput() {
    // const listinput = document.querySelectorAll("input[type=text]");
    const listinput = document.querySelectorAll("input");

    // console.log(listinput.length);
    // console.log(listinput);

    // for (let i = 0; i < listinput.length; i++) {
    //     listinput[i].style.backgroundColor="#90ee90"
    //   } // colocar cor em todos os .text

    // listinput[0].style.backgroundColor="#90ee90"
    // listinput[1].style.backgroundColor="#90ee90"

    listinput.forEach(function(campo){
        campo.addEventListener('focus',function(){
        campo.style.outlineColor ="#90ee90";

        })

        campo.addEventListener('blur',function(){
            campo.style.outlineColor = "white";
    
        })
        
    });


}
function carregarCategorias(){
    const selectCategoria = document.getElementById('categoriaMotivo');
    selectCategoria.innerHTML="";

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "";
    selectCategoria.add(optFirst);

    categorias.forEach(function(categoria){
        var opt = document.createElement('option');
        opt.value=categoria.idCategoria;
        opt.text=categoria.Descrição;

        selectCategoria.add(opt);

    }) 
}

function carregarMotivos(){
    const selectMotivo = document.getElementById('Motivo');
    selectMotivo.innerHTML="";

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "";
    selectMotivo.add(optFirst);

    const valorCategoria = document.getElementById('categoriaMotivo').value;
    console.log("Categoria selecionada: "+ valorCategoria)
    const motivosFiltrados = motivos.filter((m)=> m.idCategoria==valorCategoria)

    motivosFiltrados.forEach(function(motivo){
        var opt = document.createElement('option');
        opt.value=motivo.idMotivo;
        opt.text=motivo.Descrição;
        selectMotivo.add(opt);

    }) 
}

document.getElementById('categoriaMotivo').addEventListener('change',function(){
    carregarMotivos();
});



document.getElementById('CodigoProduto').addEventListener("keyup",function(){
    const codigoPesquisado = document.getElementById('CodigoProduto').value;
    let produtosFiltrados = produtos.filter((p)=> p.idProduto==codigoPesquisado);

    if(produtosFiltrados.length > 0){
        document.getElementById('DescricaoProduto').value=produtosFiltrados[0].Descricao;
    } else{
        document.getElementById('DescricaoProduto').value="";
    }
});



adicionarCorAoFocarInput(); // Inicia a função ao carregar a página 
carregarCategorias();
carregarMotivos();

