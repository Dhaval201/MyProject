import React, { Component } from 'react';
import { Button } from '@mui/material';
import Img from './Img';





export default class Class_state_comp extends Component {

    constructor() {
        super();
        this.state = {
            MyName: 'Dhaval',
            MyAge: 29,
            number: 1,
            isImg:false
        };

        
    }

    
    plus = () => {
            
            this.setState({ number: this.state.number+1});

    };
    
    minus = () => {
            
        this.setState({number: this.state.number-1});

    };
    
    ChangeState = () => {
        this.setState({MyName: "Dhaval Shah", MyAge: "30"})
    }



    render() {
        return (
            <>
            <div>
                    <Button onClick={() => this.ChangeState()}>Change State</Button>
                    <h1>My Name is {this.state.MyName} and my age is {this.state.MyAge}</h1>
                    <Button onClick={() => this.plus()}>+</Button>
                    <h1>{this.state.number}</h1>
                    <Button onClick={this.minus}>-</Button>
                    <hr />


                    <Button onClick={() => this.setState({ isImg:true })}>Show</Button><Button onClick={() => this.setState({ isImg:false })}>Hide</Button>
                    {

                        this.state.isImg ? <Img /> :null
                    }


                
            </div>
                </>
        )
    }
}
