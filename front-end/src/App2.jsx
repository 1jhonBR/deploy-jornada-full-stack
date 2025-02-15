import React from 'react'

const App2 = () => {
  return (
    <div>App2</div>
  )
}

export default App2

// rafce

// Arrow Function
// const App2 = () => <h1>Olá, Mundo!</h1>;

// Nomeação de Componentes
// PascalCase

// Nomeação de Variavel, Função, etc...
// camelCase

// Export Default = Posso importar com qualquer nome e sem chaves
// Export "sem default" = Só posso importar entre chaves e com o nome exportado

// Self-closing tag
// <header />

// Nomeação de classes em CSS
// Metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
// header__link--small

// Tag vazia em REACT se chama FRAGMENT ou FRAGMENTO

// Componentes recebem "props"

// {items === 5 ? (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// ) : (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// )}

// Spread Operator
// ...

// Quando componentes se re-renderizam?
// Uma das ocasiões é quando uma variável de estado usada por esse componente é atualizada

// Hook - useState