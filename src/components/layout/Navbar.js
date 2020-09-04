import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { modifyProduct } from "../redux/actions/product";
import { withRouter } from "react-router"
import "../css/navbar.css"
class Navbar extends Component {
    state = {
        sortBy: '',
        orderBy:'',
        name:'',
        category:'',
        page:''
    }
    searchProduct = (event) => {
        this.props.history.push(`?sortBy=${this.state.sortBy}&orderBy=${this.state.orderBy}&name=${event.target.value}&category=${this.props.category}&page=${this.state.page}`)

        this.props.dispatch(modifyProduct(this.state.sortBy, this.state.orderBy, event.target.value, this.state.category, this.state.page));
        }
    render(){
        const { onLogout } = this.props
        const Hidden = () => {
            if (localStorage.getItem('status') === '1') {
                return (
                    <Fragment>
                        <li class="nav-item dropdown">
                            <div class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{margin: 'auto', fontFamily: 'Source Sans Pro, sans-serif', fontWeight:600, fontSize:'20px', padding:'10px', color: 'white' }}>
                            Administrator
                            </div>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link class="dropdown-item" to='/adminproduct'>Product</Link>
                            <Link class="dropdown-item" to="/admincategory">Category</Link>
                            <Link class="dropdown-item" to="/adminuser">Cashier</Link>
                            </div>
                        </li>
                    </Fragment>
                )
            } else  {
                return(
                    <Fragment>
                            <li className='nav-item' >
                                <Link className='nav-link' to='/' style={{margin: 'auto', fontFamily: 'Source Sans Pro, sans-serif', fontWeight:600, fontSize:'20px', padding:'10px', color: 'white' }}>Cashier</Link>
                            </li>
                    </Fragment>
                )
            }
        }
    return (
        <nav className='navbar sticky-top navbar-expand-lg navbar-light' style={{ background: '#E91E63' }}>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div className='container'>
                  <div className='col-lg-10'>
                      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav mr-auto'>
                        <Hidden/>
                            <li className='nav-item' >
                                <Link className='nav-link' to='/history' style={{margin: 'auto', fontFamily: 'Source Sans Pro, sans-serif', fontWeight:600, fontSize:'20px', padding:'10px', color: 'white' }}>History</Link>
                            </li>
                        </ul>
                          <ul className='navbar-nav mr-auto' style={{margin:'auto'}}>
                              <li className='nav-item' >
                                  <Link className='nav-link' to='/' style={{margin: 'auto', fontFamily: 'Source Sans Pro, sans-serif', fontWeight:800, fontSize:'28px', padding:'10px', color: 'white' }}>The Mahardika FnB</Link>
                              </li>
                          </ul>
                          <form className='form-inline my-3 my-lg-0'>
                              <input className='form-control mr-sm-2' type='text' placeholder='Search Product' aria-label='Search' onChange={this.searchProduct} style={{borderRadius:'10px', fontFamily: 'Source Sans Pro, sans-serif', fontWeight:400, fontSize:'18px'}} />
                          </form>
                      </div>
                  </div>
                  <div className='col-lg-2' >
                      <ul className='navbar-nav mr-auto'>
                          <li className='nav-item' style={{margin:'auto'}}>
                              <Link className='nav-link' to='#'style={{margin: 'auto', fontFamily: 'Source Sans Pro, sans-serif', fontWeight:600, fontSize:'20px', padding:'10px', color:'white'}}>Cart</Link>
                          </li>
                      </ul>
                  </div>
                  <p style={{margin: 'auto', fontFamily: 'Source Sans Pro, sans-serif', fontWeight:600, fontSize:'18px', color:'white'}}>Hi, {localStorage.getItem('name')} <Link to="/login" onClick={onLogout.bind(this)} style={{color:'white'}}>Logout</Link></p>
              </div>
          </nav>
      )
    }
}
  
export default withRouter(connect()(Navbar))
