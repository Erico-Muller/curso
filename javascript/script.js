console.log('Test')

const caixa = document.querySelector('#caixa')

const input = document.querySelector('#caixa-texto')
const button = document.querySelector('#botao')
const lista = document.querySelector('ol')

const id = document.querySelector('#id')
const formulario = document.querySelector('form')

button.onclick = (event) => {
   const item = document.createElement('li')
   
   if (input.value == '') {
      alert('Caixa de texto vazia!')
      return
   }

   for (let item of lista.childNodes) {
      if (item.textContent == input.value) {
         alert('Esse item já existe!')
         return
      }
   }

   item.textContent = input.value

   if (lista.childElementCount == 0) {
      item.setAttribute('id', 'primeiro_item')
   }
   
   lista.appendChild(item)

   input.value = ''
}

caixa.onmouseenter = () => {
   caixa.style.background = 'yellow'
}

caixa.onmouseout = () => {
   caixa.style.background = 'cyan'
}

caixa.onmousemove = () => {
   console.log('moveu')
}

caixa.onmousedown = () => {
   caixa.style.background = 'orange'
}

caixa.onmouseup = () => {
   caixa.style.background = 'yellow'
}

caixa.onclick = () => {
   caixa.innerText = 'Clickou!'
}

formulario.onsubmit = async (event) => {
   event.preventDefault()

   const resposta = await fetch('https://reqres.in/api/users/' + id.value)
   const dados = await resposta.json()
   console.log(dados.data)
}
