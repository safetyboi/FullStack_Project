import { LoginFormPage } from "./components/LoginFormPage/index";
import { SignupFormPage } from "./components/SignupFormPage";
import { Route, Switch } from 'react-router-dom';
import { Navigation } from "./components/Navigation";
import { DonutIndex } from "./components/Donuts/index/DonutIndex";
import { DonutShow } from  "./components/Donuts/show/DonutShow";
import { HomePage } from "./components/HomePage/HomePage";
import { CartItemIndex } from "./components/CartItems/CartItemIndex";

function App() {
  return (
    <>
     
     
     <Navigation />
     {/* <CartItemIndex /> */}
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
        <DonutShow />
      </Route>
     </Switch>
    </>
   

  );
}

export default App;
