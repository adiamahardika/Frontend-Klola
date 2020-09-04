// import React, {Component} from 'react'
// import { Link } from 'react-router-dom'

// import { connect } from "react-redux";
// import { modifyProduct } from "../redux/actions/product";
// import { withRouter } from "react-router"
// class AdminNavbar extends Component {
//     state = {
//         sortBy: '',
//         orderBy:'',
//         name:'',
//         category:'',
//         page:''
//     }
//     onLogout(){
//         localStorage.removeItem('user-id');
//         localStorage.removeItem('token');
//         localStorage.removeItem('isAuth');
//         this.props.history.push('/login');
//     }

//     searchProduct = (event) => {

//     this.props.history.push(`?sortBy=${this.state.sortBy}&orderBy=${this.state.orderBy}&name=${event.target.value}&category=${this.props.category}&page=${this.state.page}`)
    
//     this.props.dispatch(modifyProduct(this.state.sortBy, this.state.orderBy, event.target.value, this.state.category, this.state.page));
//     }
//     render(){
//     return (
//         <nav className='navbar sticky-top navbar-expand-lg navbar-light' style={{ background: '#4285f4' }}>
//               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                   <span class="navbar-toggler-icon"></span>
//               </button>
              
//               <div className='container'>
//                   <div className='col-lg-12'>
//                       <div className='collapse navbar-collapse' id='navbarSupportedContent'>
//                       <ul class="navbar-nav mr-auto">
//                         <li class="nav-item dropdown">
//                             <div class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontFamily: 'Source Sans Pro, sans-serif', fontWeight:600, fontSize:'20px', padding:'10px', color: 'white' }}>
//                             Administrator
//                             </div>
//                             <div class="dropdown-menu" aria-labelledby="navbarDropdown" style={{fontFamily: 'Source Sans Pro, sans-serif', fontWeight:600}}>
//                             <Link class="dropdown-item" to='/adminproduct'>Product</Link>
//                             <Link class="dropdown-item" to="/admincategory">Category</Link>
//                             <Link class="dropdown-item" to="/adminuser">Cashier</Link>
//                             </div>
//                         </li>
//                         <li className='nav-item' >
//                                 <Link className='nav-link' to='/history' style={{margin: 'auto', fontFamily: 'Source Sans Pro, sans-serif', fontWeight:600, fontSize:'20px', padding:'10px', color: 'white' }}>History</Link>
//                             </li>
//                         </ul>
//                           <ul className='navbar-nav mr-auto' style={{margin:'auto'}}>
//                               <li className='nav-item' >
//                                   <Link className='nav-link' to='/' style={{margin: 'auto', fontFamily: 'Source Sans Pro, sans-serif', fontWeight:800, fontSize:'28px', padding:'10px', color: 'white' }}>The Mahardika FnB</Link>
//                               </li>
//                           </ul>
//                           <form className='form-inline my-3 my-lg-0'>
//                               <input className='form-control mr-sm-2' type='text' placeholder='Search Name' aria-label='Search' onChange={this.searchProduct} style={{borderRadius:'10px', fontFamily: 'Source Sans Pro, sans-serif', fontWeight:400, fontSize:'18px'}}/>
//                           </form>
//                       </div>
//                   </div>
//                   <p style={{margin: 'auto', fontFamily: 'Source Sans Pro, sans-serif', fontWeight:600, fontSize:'18px', color:'white'}}>Hi, {localStorage.getItem('name')} <Link to="/login" onClick={this.onLogout.bind(this)} style={{color:'white'}}>Logout</Link></p>
//               </div>
//           </nav>
//       )
//     }
// }

// export default withRouter(connect()(AdminNavbar))
