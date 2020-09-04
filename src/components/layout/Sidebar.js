import React, { Component, Fragment } from 'react'
import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {  modifyProduct } from '../redux/actions/product';
import {getAllCategory} from '../redux/actions/category'
import { connect } from "react-redux";
import AddProduct from '../administrator/Product/AddProduct'
import AddCategory from '../administrator/Category/AddCategory'
import AddUser from '../administrator/User/AddUser'
import { withRouter } from "react-router"
import "../css/sidenav.css"
class Sidebar extends Component {
state = {
    sortBy: '',
    orderBy:'',
    name:'',
    category:'',
    page:'',
    showAddProduct: false,
    showAddCategory: false,
    showAddUser: false
    }

    onShowAddProduct = () => {
    this.setState({
      showAddProduct: true
        })
    }

    onCloseAddProduct = () => {
    this.setState({
      showAddProduct: false
        })
    }

    onShowAddCategory = () => {
        this.setState({
          showAddCategory: true
        })
    }
    
    onCloseAddCategory = () => {
    this.setState({
      showAddCategory: false
        })
    }

    onShowAddUser = () => {
      this.setState({
        showAddUser: true
      })
    }
    
    onCloseAddUser = () => {
    this.setState({
      showAddUser: false
        })
    }

    filterProduct = (event) => {
      this.setState({
        category: event
      })
      this.props.history.push(`/?sortBy=${this.state.sortBy}&orderBy=${this.state.orderBy}&name=${this.state.name}&category=${event}&page=${this.state.page}`)
      this.props.dispatch(modifyProduct( this.state.sortBy, this.state.orderBy, this.state.name, event, this.state.page));
    }

    sortProduct = (event) => {
      this.setState({
        sortBy: event.target.value,
      })
      this.props.history.push(`/?sortBy=${event.target.value}&orderBy=${this.state.orderBy}&name=${this.state.name}&category=${this.props.category}&page=${this.state.page}`)

      this.props.dispatch(modifyProduct(event.target.value, this.state.orderBy, this.state.name, this.state.category, this.state.page));
    }
    orderProduct = (event) => {
      this.setState({
        orderBy: event.target.value,
      })
      this.props.history.push(`/?sortBy=${this.state.sortBy}&orderBy=${event.target.value}&name=${this.state.name}&category=${this.props.category}&page=${this.state.page}`)

      this.props.dispatch(modifyProduct(this.state.sortBy, event.target.value, this.state.name, this.state.category, this.state.page));
    }
    componentDidMount () {
      this.props.dispatch(getAllCategory())
  }

  render(){
    const { categories } = this.props
    const Hidden = () => {
      if (localStorage.getItem('status') === '1') { 
        return (
          <Fragment>
            <div class='btn-group dropright' style={{display: 'block',marginTop:"10px", marginLeft:"2px"}}>
                <button type='button' className='fa fa-fw fa-plus' style={{ fontSize: '1.75em', color: '#e91e63', display: 'block', border: 'none', backgroundColor: 'transparent', padding: '10px' }}  data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'/>
                <div class='dropdown-menu'>
                <button onClick={this.onShowAddProduct} class='dropdown-item'>Add Product</button>
                <button onClick={this.onShowAddCategory} class='dropdown-item'>Add Category</button>
                <button onClick={this.onShowAddUser} class='dropdown-item'>Add User</button>
                </div>
                </div>
          </Fragment>
        )
      } else {
        return(
        <Fragment/>
        )
      }
    }
  return (
    <div className="sidebar">
      Ini Sidebar
    </div>
      // <SideNav style={{ backgroundColor: 'transparent', marginTop:'20px' }}>
      //   <SideNav.Nav>
      //     <NavItem>
      //       <NavIcon style={{ backgroundColor: 'white' }}>
      //         <div className='col' >
      //           <div className='p-3'>
      //           <div class='btn-group dropright' style={{display: 'block'}}>
      //             <button type='button' className='fa fa-fw fa-filter' style={{ fontSize: '1.75em', color: '#e91e63', display: 'block', border: 'none', backgroundColor: 'transparent', marginTop: '80px', padding: '10px'}} data-target='#sort' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' />
      //             <div class='dropdown-menu'>
      //             <button onClick={() => this.filterProduct('')} class='dropdown-item'>All</button>
      //             {categories.map((category,index) => 
      //             <button onClick={() => this.filterProduct(category.id)} class='dropdown-item' key={index} value={category.id}>{category.name}</button>
      //             )}
      //             </div>
      //           </div>
      //           <div class='btn-group dropright' style={{display: 'block', marginTop:"-70px", marginLeft:"5px"}}>
      //             <button type='button' className='fa fa-fw fa-sort' style={{ fontSize: '1.75em', color: '#e91e63', display: 'block', border: 'none', backgroundColor: 'transparent', marginTop: '80px', padding: '10px' }} data-target='#sort' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' />
      //             <div class='dropdown-menu'>
      //               <button onClick={this.sortProduct} class='dropdown-item' value={'price'} >Price</button>
      //             </div>
      //           </div>
      //           <div class='btn-group dropright' style={{display: 'block', marginTop:"-70px", marginLeft:"5px"}}>
      //             <button type='button' className='fa fa-fw fa-sort' style={{ fontSize: '1.75em', color: '#e91e63', display: 'block', border: 'none', backgroundColor: 'transparent', marginTop: '80px', padding: '10px' }} data-target='#sort' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' />
      //             <div class='dropdown-menu'>
      //               <button onClick={this.orderProduct} class='dropdown-item' value={'ASC'} >Ascending</button>
      //               <button onClick={this.orderProduct} class='dropdown-item' value={'DESC'} >Descending</button>
      //             </div>
      //           </div>

      //           {/* Add Product */}
      //           <Hidden/>
      //           <AddProduct show={this.state.showAddProduct} onHide={this.onCloseAddProduct}/>
      //           <AddCategory show={this.state.showAddCategory} onHide={this.onCloseAddCategory}/>
      //           <AddUser show={this.state.showAddUser} onHide={this.onCloseAddUser}/>
      //           </div>
      //         </div>
      //       </NavIcon>
      //     </NavItem>
      //   </SideNav.Nav>
      // </SideNav>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.category.categories
  }
}
export default withRouter(connect(mapStateToProps)(Sidebar))

