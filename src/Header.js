import React, { Component } from 'react'

class Header extends Component {

    constructor(props) {
        super(props)
        this.handleHeaderClick = this.handleHeaderClick.bind(this)
    }

    handleHeaderClick() {
        alert(this.props.currentUser)
    }

    render() {
        let { currentUser, isLogin } = this.props
        currentUser = 'Log in as ' + currentUser

        return (
            <div onClick={this.handleHeaderClick}>Header {isLogin && currentUser}</div>
        )
    }
}

export default Header