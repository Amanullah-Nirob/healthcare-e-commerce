
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/notFound/NotFound';
import ServiceDitles from './components/home/ServiceDitles';
import Footer from './components/footer/Footer';
import LoginOrRegister from './components/login/LoginOrRegister';
import Context from './context/Context';
import PrivateRoute from './priveteRoute/PrivateRoute';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import Simplelogin from './components/login/Simplelogin';
import Blogs from './components/blogs/Blogs';

function App() {
  return (
    <div className="App">
<Context>
<BrowserRouter>
<Header></Header>
<Switch>
  <Route exact path='/'>
    <Home></Home>
  </Route>

  <Route path='/home'>
    <Home></Home>
  </Route>

  <Route path='/blog'>
    <Blogs></Blogs>
  </Route>
  <Route path='/about'>
   <About />
  </Route>
  <Route path='/contact'>
<Contact></Contact>
  </Route>
  
  <Route path='/simplelogin'>
<Simplelogin></Simplelogin>
  </Route>
  
  <PrivateRoute path='/HomeService/:serviceId'>
   <ServiceDitles></ServiceDitles>
  </PrivateRoute>
  
  <Route path='/login'>
   <LoginOrRegister></LoginOrRegister>
  </Route>
  
  <Route path='*'>
    <NotFound></NotFound>
  </Route>

</Switch>
<Footer></Footer>
</BrowserRouter>
</Context>
    </div>
  );
}

export default App;
