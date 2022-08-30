window.onload = function () {
  const cardArea = document.getElementById('card-area')

  const imageUrl = document.querySelector('#url')
  const title = document.getElementById('title')
  const textArea = document.querySelector('textarea')
  const button = document.getElementById('cadastre')
  const nota = document.getElementById('nota')
  button.addEventListener('click', sendInformation)
  const savedData = []

  function clearFields() {
    textArea.value = ''
    title.value = ''
    imageUrl.value = ''
    nota.value = ''
  }

  function createCards(url, title, description, nota) {
    const divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.innerHTML = `
                <div class="col">
                <div class="card h-100">
                  <img src=${url} class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                  </div>
                  <div class="card-footer">
                    <a type="button" class="btn btn-danger">Nota: ${nota}</button></a>
                  </div>
                </div>
              </div> `

    cardArea.appendChild(divCard)
  }

  function sendInformation(event) {
    if (title.value != '' && textArea.value != '' && imageUrl.value != '') {
      let toSave = {
        name: title.value,
        description: textArea.value,
        url: imageUrl.value,
        nota: nota.value
      }
      savedData.push(toSave)
      createCards(toSave.url, toSave.name, toSave.description, toSave.nota)
      clearFields()
    }
    event.preventDefault()
  }
}
