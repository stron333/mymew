import React, { Component } from 'react';


class FormatArticles extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: true
        }
        
    }
    render() {
        const body = this.state.isOpen && <section>{this.props.article.text}</section>
    return (
        <div >
            <h2>
                {this.props.article.title}
                <button onClick = {handleClick.bind(this)}>{this.state.isOpen?'close':'open'}</button>
            </h2>
            {body}
            <h3>creation date: {(new Date(this.props.article.date)).toDateString()}</h3>    
        </div>
      );
    }
  }


function handleClick() {
    console.log('---', 'clicked')
    this.setState(
        {
            isOpen: !this.state.isOpen
        }
    )
}



  export default FormatArticles 

