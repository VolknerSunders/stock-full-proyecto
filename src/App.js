import { Routes, Route } from "react-router-dom";
import {useEffect} from "react";
import Home from "./routes/home/home.-component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Register from "./routes/register/register.component";
import { checkUserSession } from './store/user/user.action';
import { useDispatch } from "react-redux";
import DirectoryMen from "./components/directory-men/directory-men.component";
import DirectoryWomen from "./components/directory-women/directory-women.component";
/* import { addCollectionAndDocuments } from "./utils/firebase/firebase.utils";
import SHOP_DATA from "./shop-data"; */

const App = () =>{
  const dispatch = useDispatch();

  /* useEffect(()=>{
    addCollectionAndDocuments('categories', SHOP_DATA);
  }) */
  
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />}/>
        <Route path='women/shop/*' element={<Shop />}/>
        <Route path='men/shop/*' element={<Shop />}/>
        <Route path='men' element={<DirectoryMen />}/>
        <Route path='women' element={<DirectoryWomen />}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='register' element={<Register />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
    </Routes>
  );
};

export default App;
