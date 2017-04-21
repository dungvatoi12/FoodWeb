var React = require('react');
var {Link} = require('react-router');
var {connect} = require('react-redux');
var actions = require('actions');


var Nav = React.createClass({
    componentWillReceiveProps: function(nextProps) {
        console.log(nextProps.button);
    },
    render: function() {
        var {button, dispatch, login} = this.props;
        var LoadChucNangDangNhap = () => {
            console.log('Login navbar: ', login.isLogin)
            if (login.isLogin === true) {
               return ( 
                <ul className="main-nav">
                    <li> <Link to="/" >Đăng xuất</Link></li>
                </ul> 
               )
            }
            if (button === 0) {
                return (
                    <ul className="main-nav">
                        <li onClick={() => {dispatch(actions.pressSignup())}}> <Link to="/signup" >Đăng kí</Link></li> 
                        <li onClick={() => {dispatch(actions.pressLogin())}}> <Link to="/login" >Đăng nhập</Link></li>
                    </ul>                  
                )
            } 
            if (button === 1) {
                return (
                   <ul className="main-nav">
                        <li onClick={() => {dispatch(actions.pressSignup())}}> <Link to="/signup" >Đăng ký</Link></li> 
                    </ul>  
                )
            }

            if (button === 2) {
                return (
                   <ul className="main-nav">
                        <li onClick={() => {dispatch(actions.pressLogin())}}> <Link to="/login" >Đăng nhập</Link></li>
                    </ul>  
                )

            }
        }
        return (
            <div className="row ">
                    <img src="resources/img/logo2.png" alt="logo" className="logo"/>  
                    {LoadChucNangDangNhap()}
                    <ul className="main-nav">              
                        <li onClick={() => {dispatch(actions.pressUpload())}}> <Link to="/uploadimage" >Đăng ảnh</Link></li>
                    </ul>
            </div>
        )
    }
})

module.exports = connect(
    (state) => {
        return state;
    }
)(Nav);