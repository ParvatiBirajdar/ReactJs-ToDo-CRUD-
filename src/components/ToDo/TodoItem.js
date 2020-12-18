import React from 'react';
import Button from '@material-ui/core/Button';


class ToDoItem extends React.Component{

    constructor(props)
    {
            super(props);
            this.markCompleted = this.markCompleted.bind(this);
            this.deleteItem = this.deleteItem.bind(this);
    }

    markCompleted(e)
    {
        this.props.onItemCompleted(this.props.id);
    }

    deleteItem(e)
    {
        this.props.onDeleteItem(this.props.id);
    }

    componentDidMount()
    {
        if(this._listItem)
        {
            this._listItem.classList.add("high");
            setTimeout((listItem) => {
                listItem.classList.remove('high');
            },500,this._listItem);
        }
    }

render()
{    
    let checkboxUi=
    (
        <input 
         type="checkbox"
         className='form-check-input' 
         onChange={this.markCompleted}/>
    );
    
    let DeleteDataUI=(
        <Button 
        type='button' 
        variant="contained" 
        color="secondary"
        className='ml-5'
        onClick={this.deleteItem}>X</Button>
    );

    return(
<table className="table">
  <tbody>
    <tr>
      <th className="w-25">{checkboxUi}</th>
      <th className="w-50">{this.props.text}</th>
      <th className="w-25">{DeleteDataUI}</th>
    </tr>
  </tbody>
</table>
     )
}


}

export default ToDoItem;