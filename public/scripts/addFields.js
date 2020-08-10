//procurar o botão
document.querySelector("#add-time")
//Quando clicar o botão
.addEventListener('click', cloneField)

//executar uma ação
function cloneField() {
    //duplicar os campos. que Campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)// boolean: true or false

    //pegar os campos . Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pega o field do momento e limapa ele
        field.value = ""
    })

    //colocar na pagina: Onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}