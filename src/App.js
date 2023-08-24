import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Cart from './pages/Cart'

import Navigation from './components/Navigation'

// The functional component should have same name as file name and start with capital letter

//We can also use Arrow function
// const App = () => {}
function App(){

    //We need to wrap it inside a div and return it as a single element instead of several elements which gives error
    
    /*
    return (
        <div>
            <h1>Hello</h1>; 
            <p>This is a paragraph</p>;
        </div>
    )
    */

    //React fragments instead of div
/*
    return (
        <>
            <h1>Hello</h1>
            <p>This is a paragraph</p>
        </>
    )
*/

//Using Router 
// path is a prop
    return (
        <>
            <Router>
                <Navigation/>
                <Routes>
                    <Route path='/' element = {<Home/>}/>
                    <Route path='/about' element = {<About/>}/>   
                    <Route path='/products' element = {<Products/>}/>    
                    <Route path='/cart' element = {<Cart/>}/>        
                </Routes>
            </Router>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        </>
    )

    // return <h1>Hello</h1>; // Looks like JS but it is JSX
    // <p>This is a paragraph</p>; //This line will give error as it creates another element to render 
    // You cannot return 2 elements at once

}


export default App;