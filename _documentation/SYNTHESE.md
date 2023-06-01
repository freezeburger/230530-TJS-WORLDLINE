# ReactJS

| Un librairie JavaScript de cration de composant pour l'interface utilisateur WEB

* Laisse libre le choix de lorganisation du code.
* Incite à créer de multiples petits composants.

## Outils

* NodeJS + NPM
    * Vite (ou autre)
    * generate-react-cli

## JavaScript Developpment

| Les projets modernes utilisent souvent les modules javascript. *esm* (EcmaScript Module).

* Un module JavaScript est un fichier JavaScript chargé en tant que module *`type=module`*
* Un module posséde son propre *scope* (isolation de la visibilité du code)
* Les modules utilisent la mécanique *`import/export`*
* Un module peut avoir UN SEUL *`export default`*
* Un module peut avoir PLUSIEURS *`export`* NOMMÉS
* Un module est CHARGÉ UNE SEUL FOIS EN MÉMOIRE !!
* Un module exécute sont code au chagement.

```js

// Something est un alias de l'export par défaut
// import {default as Something } from 'react'
import Something from 'react'

// useState et useEffect sont des import *nommés* ( le nom de la clé exporté est cité)
import { useState, useEffect } from 'react'

// Import local au code source
import A from './local/path'
import B from '../local/path'


// Import (externe) dans le dossier "node_modules"
import React from 'react'
```

## ReactJS Developpement

* ReactJS utilise du JSX qui est alors *transpilé* ( compilé ) en JavaScript.
* ReactJS utilise un DOM Virtuel *Virtual DOM* - copie du DOM en mémoire incluant les composants.
    * Les composants ReactJS ne sont pas eux-mêmes rendus dans le DOM.

## ReactJS Componsants

| ReactJS propose deux façons de créer des composants.

* *class component*
* *functional component*

**Class Component**

```jsx

import React from 'react';

class MyComponent extends React.Compnent {

    constructopr (props){
        super(props);
    }

    render(){
        'Return the html output'
    }
}
```


**Functional Component**

```jsx

const MyComponent = props => {
    return 'the html output'
}
```


## ReactJS Hook

| Un *hook* permet de rattacher  un traitement ( du code ) à une étape logique clé ( d'un système ).

* Hook du cycle de vie.
* Hook du Render State
* Hook utilitaire.


```jsx

// Lifecycle

import React from 'react';

class MyComponent extends React.Compnent {

    // 1
    constructopr (props){
        super(props);
    }

    // 2
    componentDidMount(){} 

    //  3
    render(){
        'Return the html output'
    }
    // 4
    componentWillMount(){} 
}

const MyComponent = props => {
    // la fonction est déja les étapes 2 et 3 du cycle d vie

    const cleanup = () =>  console.log('Compoenent Unmounted')
    const initialize = () => {
        console.log('Component Mounted')
        return cleanup; // Can return what to do to clean up effects
    }

    useEffect(initialize, [/* conditions de redéclenchement */])

    return 'the html output'
}
```

## Componsants Props 

| Model de communication *parent>enfant*
| L'objet de valuers trnasmise aussi appelés *props* est *readonly*

**Props Particulières**
* `props.children` - Lorsque du contenu est transmis entre les balise.
* `props.key`      - Props à passé lors de la duplication d'un élément (optimisation React)


Il est possible d'affecter des validateurs via les `propTypes` et d'affecter par défaut via les `defaultProps`

## ReactJS Componsants et CSS

|On peut distinguer 3 facons d'intégrer les CSS

* Utiliser l'attribut `className` pour l'affectation de classes CSS
* Utiliser l'attribute `style` et un `objet` javascript de style *css-in-js*
* Uyiliser une libraire de *css-in-js* telle que `@emotion/styled` pour créer des **Styled Component**


##  `@emotion/styled`

| Propose un objet `styled` permettant d'inject du CSS

```jsx
import styled from '@emotion/styled'

const Button = styled.button`
  color: ${props => (props.primary ? 'hotpink' : 'turquoise')};
`

const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column'
}))

render(
  <Container column>
    <Button>This is a regular button.</Button>
    <Button primary>This is a primary button.</Button>
  </Container>
)
```


## ReactJS API

* `React.useRef` ou ( `React.createRef`)
* `React.useState` ou ( `this.state` et `this.setState` )
* `React.useEffect`

## Reacct JS :  Communication entre composant.

* Parent > Enefant - props
* Enfant > Parent - callback (reçue via les props)
* Non Sibling - Service de communication