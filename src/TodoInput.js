import React, { Component } from 'react'

class TodoInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newTodo: ""
        }
        this.addClick = this.addClick.bind(this)
    }

    addClick() {
        let { onAddTodo } = this.props
        onAddTodo(this.state.newTodo)
        this.setState({
            newTodo: ""
        })

    }

    render() {
        let { newTodo } = this.state
        return (
            <div>
                <input value={newTodo} onChange={(e) => this.setState({ newTodo: e.target.value })} />
                <button onClick={this.addClick}>Add</button>
            </div>
        )
    }
}

export default TodoInput