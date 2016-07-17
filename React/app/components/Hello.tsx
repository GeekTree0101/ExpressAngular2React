
import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    
    private value = 1;
    private timetask : any;
    
    
    getInitialState(){
        return {time : 0};  
    }
    
    componentDidMount(){
        
        console.log("did mount");
        this.timetask = setInterval(this.update,500);
    }
    
    componentWillUnmount(){
        
        clearInterval(this.timetask);
    }
    
    update(){
        
         this.value += 1;
        
        if(this.value >10){
            clearInterval(this.timetask);
        }
        
        this.setState({time : this.value});  
        console.log("update");
    }
    
    
    render() {
        return <div className="timetime" ><h1> Time : {this.value} </h1></div>;
    }
}