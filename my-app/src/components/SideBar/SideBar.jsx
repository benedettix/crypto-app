import React, { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import  './SideBar.scss'
import { Link, NavLink, useLocation } from "react-router-dom";
import LeftArrow from "../../img/left-arrow.png"
import Home from "../../img/home.png"
import Threadors from "../../img/threadors.png"
import WatchList from "../../img/watch-list.png"
import Tweets from "../../img/tweets.png"
import Projects from "../../img/projects.png"
import Support from "../../img/support.png"
import Setting from "../../img/settings.png"
import Avatar from "../../img/Avatar.png"
function SideBar() {
    const [show, setShow] = useState(false);
    const { pathname } = useLocation();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
      setShow(false)
    }, [pathname])

    const sidebarData = [
        {img: Home  ,title: 'Home', url: '/home', soon: false},
        {img: Tweets ,title: 'Tweets', url: '/tweets', soon: false},
        {img: Projects  ,title: 'Projects', url: '/projects', soon: false},
        {img: WatchList ,title: 'Narratives', url: '/narratives', soon: true},
        {img: Threadors ,title: 'Threadors', url: '/threadors', soon: false},
        {img: WatchList ,title: 'Watchlist', url: '/watchlist', soon: true},
    ]
  
    return (
      <>
  
      <div className="sidebar__button"  onClick={handleShow}>
     
          <img className='sidebar__button__arrow-left' src={LeftArrow} alt="" />
          <img className='sidebar__button__arrow-right' src={LeftArrow} alt="" />
        </div>
 
    
  
        <Offcanvas className='sidebar' show={show} onHide={handleClose}>
        <Offcanvas.Body >
          <Offcanvas.Header >
            <div className='d-flex justify-content-center align-items-center'>
            <div className="sidebar__logo"></div>
            <h4 className='sidebar__h4'>Logo</h4>
            </div>
           
          <div className="sidebar__innerbutton"  onClick={handleClose}>
     
     <img className='sidebar__innerbutton__arrow-left' src={LeftArrow} alt="" />
     <img className='sidebar__innerbutton__arrow-right' src={LeftArrow} alt="" />
   </div>
          </Offcanvas.Header>
        
            <div className="sidebar__itemwrapper">
              <div>
                {sidebarData.map((bar,key) => {
                    if (bar.soon) {
                        return        <NavLink key={key}to={bar.url} className="d-flex  align-items-center sidebar__itemwrapper__item  sidebar__itemwrapper__soon">
                        <img src={bar.img } alt="" className='sidebar__itemwrapper__item__icon'/>
                        <div className="sidebar__itemwrapper__item__h4 d-flex">{bar.title} <div className="sidebar__itemwrapper__item__h4__soon px-2">soon</div></div>
                    </NavLink>
                    } else {
                        return   <NavLink key={key} to={bar.url} className="d-flex  align-items-center sidebar__itemwrapper__item">
                        <img src={bar.img } alt="" className='sidebar__itemwrapper__item__icon'/>
                        <div className="sidebar__itemwrapper__item__h4">{bar.title}</div>
                    </NavLink>
                    }
            
                })}
          </div>
          <div className='sidebar__itemwrapper__downitems'>     <NavLink to={'/'} className="d-flex  align-items-center sidebar__itemwrapper__item">
                        <img src={Support } alt="" className='sidebar__itemwrapper__item__icon'/>
                        <div className="sidebar__itemwrapper__item__h4 d-flex">Support </div>
                    </NavLink>
                       <NavLink to={'/'} className="d-flex  align-items-center sidebar__itemwrapper__item">
                        <img src={Setting } alt="" className='sidebar__itemwrapper__item__icon'/>
                        <div className="sidebar__itemwrapper__item__h4 d-flex">Settings </div>
                    </NavLink>
               
                    </div>
     
            </div>
            <div className="sidebar__userwrapper">
              <div className="sidebar__userwrapper__holder">
              <img src={Avatar} alt="avtar" />
              <div className="sidebar__userwrapper__holder__info">
                <h3 className='sidebar__userwrapper__holder__info__name'>Marks Taskhent</h3>
                <h3 className='sidebar__userwrapper__holder__info__email'>marks@taskhent.com</h3>
              </div>
              </div>
              
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}

export default SideBar