import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Bs_button_Fun from './components/Bs_button_Fun';
import Bs_Button_Cl from './components/Bs_Button_Cl';
import PropsViewer from './components/PropsViewer';
import Into_param from './components/Into_param';
import Arrow_Fun from './components/Arrow_Fun';
import SetState from './components/SetState';
import If_Else_condition from './components/If_Else_condition';
import Ulternative_If_Else from './components/Ulternative_If_Else';
import Refresh from './components/Refresh';
import Find_ReactDom_ChangeImg from './components/Find_ReactDom_ChangeImg';
import Get_InputValue from './components/Get_InputValue';
// import SignUp from './components/SignUp';
import Countries from './components/Country_finder/Countries';

function App() {
  return (
    <div className='App'>
      <Bs_button_Fun />
      <Bs_Button_Cl />
      <PropsViewer />
      <Into_param />
      <Arrow_Fun />
      <SetState />
      <If_Else_condition />
      <Ulternative_If_Else />
      <Refresh />
      <Find_ReactDom_ChangeImg />
      <Get_InputValue />
      {/* <SignUp /> */}
      <Countries />
    </div>
  );
}

export default App;
