import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
    // 매순간 setState를 호출할 때 마다 react가 새로운 state와 함께 render function을 호출한다.
    constructor(props){
        // constructor be called before render method();
        super(props)
        console.log("abcd")
    }
    state ={
        count: 0
    }
    add = () =>{
        this.setState(current => ({count : current.count + 1}))
    }
    minus = () => {
        this.setState(current => ({count : current.count - 1}))
    }
    // component가 렌더링 되고 난 이후에 시작됨. // 밑에 것들은 컴포넌트 라이프 사이클이라고 보면됨
    componentDidMount(){
        console.log("compenent rendered")
    }
    //
    componentDidUpdate(){
        console.log("component updated")
    }
    componentWillUnmount(){
        console.log("component unmonut")
    }
    
    render(){

        console.log("rendering!!")
    return (
           
                <div>
                    <h1> The number is {this.state.count}</h1>
                    <button onClick={this.add}>Add</button>
                    <button onClick={this.minus}>Minus</button>
                </div>
        
        )
    }
}

export default App;
