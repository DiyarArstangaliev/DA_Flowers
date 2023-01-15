import './App.css';
import './adaptive.css';
import React from "react";
import Header from "./components/header";
import NavBar from "./components/navBar";
import Profile from "./components/Profile/profile";
import Messages from "./components/Message/message";
import {Routes, Route} from "react-router-dom";
import Bouquets from "./components/Bouquets/bouquets";
import Order from "./components/Order/order";
import Mono from "./components/Bouquets/Mono/mono";
import Contact from "./components/Contact/contact";
import Composite from "./components/Bouquets/composite/composite";
import Acces from "./components/Bouquets/accessuor/acces";
import Questions from "./components/Questions/questions";


function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-content'>
                <Routes>
                    <Route path='profile'
                           element={<Profile/>}/>
                    <Route path='message'
                           element={<Messages messagesData={props.appState.messagesData}
                                              dialogsData={props.appState.dialogsData}
                                              addMessage={props.addMessage}
                                              newMessageText={props.appState.newMessageText}
                                              updateNewMessageText={props.updateNewMessageText}/>}/>
                    <Route path='bouquets' element={<Bouquets/>}/>
                    <Route path='order' element={<Order/>}/>
                    <Route path='mono' element={<Mono/>}/>
                    <Route path='composie' element={<Composite/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='acces' element={<Acces/>}/>
                    <Route path='questions' element={<Questions accordionData={props.appState.accordion}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
