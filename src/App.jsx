import React from 'react'
import './App.css'

// import { default as ViewHome } from './app/view/ViewHome';

import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ViewSplash from './app/view/ViewSplash/ViewSplash.lazy';
import ViewInfos from './app/view/ViewInfos/ViewInfos.lazy';
import ViewHome from './app/view/ViewHome/ViewHome.lazy';

/* 
DOM UI Performance

Computing Cost
- HTTP Request
- CSS Computing, Layout Shifting
- Image Rastering

KPI
- TFP - 2s
- TTI - max 7s
- FPS - 60 (>30) ( Script <16.5ms )
- DOM - 7k < ( 7k - 15k) > 15k

*/

export function FunctionnalApp() {

  // hook - functional hook - se distingue par le prefix "use"
  /* 
    Redonne aux composants fonctinnels les capacité des class component
    - state
    - lifecycle
  */

  const [count /* accesseur */, setCount /* mutateur */] = React.useState(0);

  React.useEffect(() => {
    console.log('Initialisation');

    return () => { console.log('Destruction'); }
  }, [])

  console.log('Création et rendu !')

  return (
    <React.Fragment>
      <h1>Worldline</h1>
      <p>Innovate, grow, achieve more.</p>
      <button onClick={() => setCount(count + 1)}> {count} </button>
    </React.Fragment>

  )
}


export class ClassApp extends React.Component {

  /* 
  Herite :
  - "Render" State ( accesseur / mutateur,  dont le mutateur déclenche un " signal" de rendu )
  - Cycle de vie ( étape de création et rendu par React)
  */

  /* 
  Cycle de vie ( étape de création et rendu par React)
  - Conception
  - Initialisation ( dans le DOM )
  - Update
  - Desctruction

  1. constructor          ( comparaison NG - constructor )
  2. componentDidMount    ( comparaison NG - ngOnInit )
  3. render               ( comparaison NG - ngDoCheck )
  4. componentWilUnMount  ( comparaison NG - ngOnDestroy )
  */

  constructor() {
    super()
    console.log('1.constructor')
  }

  componentDidMount() {
    console.log('2.componentDidMount')
  }

  componentWilUnMount() {
    console.log('4.componentWilUnMount')
  }


  // count = 0;
  state = {
    count: 0,
    title: 'Worldline'
  }

  setCount(num = 1) {

    // this.count += num;
    this.setState({ count: this.state.count + num });

    console.log(this.state.count);
  }

  render() {
    console.log('3.render')
    return (
      <React.Fragment>
        <h1>{this.state.title}</h1>
        <p>Innovate, grow, achieve more.</p>
        {/* Programmation evenementielle */}
        <button onClick={() => this.setCount()}> {this.state.count} </button>
      </React.Fragment>
    )
  }
}


const router = createBrowserRouter([
  {
    path:"/",
    element: <ViewSplash />
  },
  {
    path:"/home",
    element: <ViewHome />
  },
  {
    path:"/infos",
    element: <ViewInfos />
  }
])

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

// Un seul export "default" par module (ficher .js carhgé en tant que module)
export default App
