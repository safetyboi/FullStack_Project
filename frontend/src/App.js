import { LoginFormPage } from "./components/LoginFormPage/index";
import { SignupFormPage } from "./components/SignupFormPage";
import { Route, Switch } from 'react-router-dom';
import { Navigation } from "./components/Navigation";
import { DonutIndex } from "./components/Donuts/index/DonutIndex";
import { DonutShow } from  "./components/Donuts/show/DonutShow";
import { HomePage } from "./components/HomePage/HomePage";
import { CartItemIndex } from "./components/CartItems/CartItemIndex";
import { CheckOut } from "./components/CheckOut";
import { BackDrop } from "./components/CartItems/BackDrop";
import { useState } from "react";

function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setDrawerOpen(!drawerOpen)
  }

  const backdropClickHandler = () => {
    setDrawerOpen(false);
  }

  let backdrop;
      if(drawerOpen){
        backdrop = <BackDrop close={backdropClickHandler}/>;
       }
  
  return (
    <>
     
     <Navigation toggle={drawerToggleClickHandler}/>
     <CartItemIndex show={drawerOpen} toggle={drawerToggleClickHandler}/>
     {backdrop}
     <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
      <Route exact path="/donuts">
        <DonutIndex />
      </Route>
      <Route exact path="/donuts/:id" >
        <DonutShow toggle={drawerToggleClickHandler} />
      </Route >
      <Route exact path="/checkout">
        <CheckOut />
      </Route>
     </Switch>
    </>
   

  );
}

export default App;
