import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from "./hoc/auth";
// pages for this product
import LandingPage from './pages/LandingPage/landingPage.component';
import LoginPage from './pages/LoginPage/loginPage.component';
import RegisterPage from './pages/RegisterPage/registerPage.component';
import NavBar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
