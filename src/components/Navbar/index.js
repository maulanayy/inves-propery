import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { images } from "../../config";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { slide as Menu } from 'react-burger-menu'
import { connect } from 'react-redux';
// const [scrolled, setScrolled] = useState(false);

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      isMenuOpened: false  
    }
    
    this.handleClick = this.handleClick.bind();
  }
  
  renderMenu() {
    return (
      <Menu isOpen={ true }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
 

  renderCanvas() {
    const user = this.props.user;
    
    return (
      <OffCanvas
        width={300}
        transitionduration={300}
        effect={"parallax"}
        isMenuOpened={this.state.isMenuOpened}
        position={"right"}
      >
        <OffCanvasBody
          className='bodyClass'
          style={{ fontSize: "30px" }}
        >
          <button id="userDropdown" className="btn dropdown-toggle" onClick={this.handleClick}>
            <img className="imgProfile rounded-circle border border-dark" src={user.picture || images.profileImg} />
          </button>          
        </OffCanvasBody>
        <div className={this.state.isMenuOpened ? "profileMenuOverlay" : ''} onClick={this.handleClick}></div>
        <OffCanvasMenu className='menuClass' isMenuOpened={this.state.isMenuOpened}>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <img className="imgProfile rounded-circle border border-dark" src={user.picture || images.profileImg} />
              </div>
              <div className="col-8">
                <div className="row">
                  <div className="col"><p className="menu-username">Ihlam Akbar</p></div>
                </div>
                <div className="row">
                  <div className="col"><p className="menu-email">98ilham.akbar@gmail.com</p></div>
                </div>
                <div className="row">
                  <div className="col"><a href="#" className="menu-email menu-Ubah-Password"><i className="fa fa-gear"></i> Ubah Password</a></div>
                </div>
              </div>
            </div>
            <div className="row">
                <ul className="list-unstyled sidebar-menu" >
                  <li>
                    <NavLink to="/dashboard" className="link"><i className="fa fa-columns"></i>Dashboard<br/>
                    {document.location.pathName === "/" ? <div className="sidebarActivePage"></div> : null}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/portofolio" className="link"><i className="fa fa-suitcase" ></i>Portofolio<br/>
                    {document.location.pathName === "/portofolio" ? <div className="sidebarActivePage"></div> : null}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profil" className="link"><i className="fa fa-user" ></i>Profil<br/>
                    {document.location.pathName === "/profil" ? <div className="sidebarActivePage"></div> : null}
                    </NavLink>
                  </li>
                </ul>

                <div className="sidebar-menu">
                  <h6 style={{fontWeight: 'bold'}}>Rekening Bank</h6>
                  <div className="roundGrey">
                    <div className="d-flex align-items-center justify-content-center" style={{height: '110px'}}>
                      <div className="p-2 bd-highlight text-center">:( <br />Belum ada rekening terdaftar</div>
                      <div className="plusIcon"><i className="fa fa-plus-circle"></i></div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-menu" style={{marginTop: 50}}>
                  <div className="roundHeavyGreen">
                  <div className="d-flex align-items-center justify-content-center" style={{height: '110px'}}>
                      <div className="p-2 bd-highlight text-center ml-2">
                        Masih bingung dengan tampilan Dashboard?
                        <br/>
                        <button type="button" className="btn btn-outline-light btn-sm ulangi-tutorial ml-3">Ulangi Tutorial</button>
                      </div>
                      <div className="bd-highlight text-center">
                        <img src={images.personWithQustionMark} className="personWithQustionMark" style={{marginTop: '-50px', height: '150px',float: 'right'}}></img>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>

                
            </div>
          </div>
          <ul className="list-unstyled sidebar-menu" >
                  <li>
                    <NavLink to="/logout" className="link logout-menu"><i className="fa fa-sign-out"></i>Keluar<br/>                    
                    </NavLink>
                  </li>                  
                </ul>
        </OffCanvasMenu>
      </OffCanvas>
    );
  }
 
  handleClick = () => {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }

  render() {    
    const user = this.props.user

    return(
      <header className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <div className="navbar-desktop">
            <div className="container d-flex ">
              <div className="logo mr-auto">
                <NavLink to="/">
                  <img src={images.Logo} className="img-fluid" />
                </NavLink>
              </div>

              <nav className="nav-menu d-none d-lg-block">
                <ul>
                  <li>
                    <NavLink to="/properti">Daftar Properti</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about-us">Tentang Kami</NavLink>
                  </li>
                  <li>
                    <NavLink to="/how-it-works">Cara Kerja</NavLink>
                  </li>
                  <li>
                    <a href="#pricing">Blog</a>
                  </li>
                  <li>
                    <NavLink to="/faq">FAQ</NavLink>
                  </li>

                  {
                    user && user.token  ? null :
                  <li className="login">
                    <NavLink to="/login">Masuk</NavLink>
                  </li>
                  }
                  {
                    user && user.token  ? null :
                  <li className="register">
                    <NavLink to="/register">Daftar</NavLink>
                  </li>
                  }

                  {
                    user && user.token  ?
                  <li >
                    <a className="nav-link dropdown-toggle mt-2" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img className="mr-2 img-profile rounded-circle" src={user.picture || images.profileImg} style={{width: 30}}/>
                  <span className="d-none d-lg-inline text-gray-600 small">{user.name}</span>                      
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                      <NavLink to="/dashboard" className="dropdown-item">Dashboard</NavLink>
                      <NavLink to="/Portofolio" className="dropdown-item">Portofolio</NavLink>
                      <NavLink to="/profile" className="dropdown-item">Profile</NavLink>
                      <div className="dropdown-divider"></div>
                      <NavLink to="/logout" className="dropdown-item logout ">Keluar</NavLink>
                    </div>
                  </li>
                  : null
                  }
                </ul>
              </nav>
            </div>    
          </div>
          <div className="navbar-mobile">
            <button id="sidebarToggleTop" className="btn d-md-none rounded-circle dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-bars"></i>
            </button>
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in menu-dropdown" aria-labelledby="sidebarToggleTop">                
              <a className="dropdown-item text-center small text-gray-500" href="#">Daftar Properti</a>
              <a className="dropdown-item text-center small text-gray-500" href="#">Tentang Kami</a>
              <a className="dropdown-item text-center small text-gray-500" href="#">Cara Kerja</a>
              <a className="dropdown-item text-center small text-gray-500" href="#">FAQ</a>
              <a className="dropdown-item text-center small text-gray-500" href="#">Blog</a>
            </div>
            
            <div className="logoTopbar text-center col-8">
              <img src={images.Logo} className="img-fluid" />
            </div>
    { user && user.token ? <button className="btn"><img src={images.bellIcon} className="bellIcon"/> </button> : null}
            <div className={ user && user.token  ? 'navbar-right' : 'navbar-right col-3'}>
              {
                 user && user.token  ? this.renderCanvas() : <nav className="nav-menu d-lg-block"><ul>
                
                  <li className="register" style={{marginRight: 5}}>
                    <NavLink to="/register">Daftar</NavLink>
                  </li>
                  <li className="login">
                    <NavLink to="/login">Masuk</NavLink>
                  </li>
                  
                </ul></nav>
              }
              
              

              
              
            </div>
          </div>
          
        </header>
    )

  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps,null)(Navbar);

