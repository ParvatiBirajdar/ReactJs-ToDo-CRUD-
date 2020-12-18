import React from 'react';
import ToDoList from './ToDoList';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class ToDoApp extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            items:[],
            text:""
        };
        this.handleAddChange = this.handleAddChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.markItemCompleted = this.markItemCompleted.bind(this);
        this.handleDeleteChange = this.handleDeleteChange.bind(this);
    }

handleTextChange(e)
{
this.setState({
    text:e.target.value
})
}

handleAddChange(e)
    {
    e.preventDefault();
    var newItem=
    {
        id:Date.now(),
        text:this.state.text,
        done:false
    };

    this.setState((prevState) =>({
        items:prevState.items.concat(newItem),
        text:""
    }));
   }   


markItemCompleted(itemId)
{
    var updatedItems = this.state.items.map(item => {
        if(itemId === item.id)
        item.done = !item.done;
        return item;
    });

    this.setState({
        items:[].concat(updatedItems)
    });
}


handleDeleteChange(itemId)
{
var updatedItems = this.state.items.filter(item =>{
    return item.id !== itemId;
});

this.setState({
    items:[].concat(updatedItems)
});
}

render()
{
    return(
        <div className='container'>
        <div className='row'>
        <ToDoList
        items={this.state.items}
        onItemCompleted={this.markItemCompleted}
        onDeleteItem={this.handleDeleteChange}
        />
        </div>
        
        <div className='row'>
            <div className='col-lg-3 col-md-3 col-3'></div>
            <div className='col-lg-6 col-md-6 col-sm-12 col-6'>
        <form>
        {/* <input type='text' 
        className='form-control inputCss' 
        onChange={this.handleTextChange} 
        value={this.state.text}/> */}

         <TextField
          className='w-100'
          onChange={this.handleTextChange}
          value={this.state.text}
         />
        <Button
        variant="contained" 
        color={!this.state.text ? "default" :"primary"}
        className='mt-3'
        onClick={this.handleAddChange} 
        disabled={!this.state.text}>Add</Button>
        </form>
        </div>
        <div className='col-lg-3 col-md-3 col-3'></div>
        </div>
        </div>
    )
}
}

export default ToDoApp;