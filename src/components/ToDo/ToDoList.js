import React from 'react';
import ToDoItem from './TodoItem';

class ToDoList extends React.Component{
    
render(){
    let itemData=this.props.items;
    let lengthData=itemData.length;
    return(
        <>
        <div className='col-lg-3 col-md-3 col-3'></div>
        <div className='col-lg-6 col-md-6 col-sm-12 col-6'>
            {lengthData !== 0 &&
<table className="table">
<thead>
  <tr>
      <th className="w-25">#</th>
      <th className="w-50">Details</th>
      <th className="w-25">Action</th>
</tr>
</thead>
</table>
}
        <ul>
    {
     this.props.items.map(item => (
    <ToDoItem 
    key={item.id}
    id={item.id}
    text={item.text}
    completed={item.done}
    onItemCompleted={this.props.onItemCompleted}
    onDeleteItem={this.props.onDeleteItem}
    />
))
 }
        </ul>
        </div>
        <div className='col-lg-3 col-md-3 col-3'></div>
        </>
    )
}
}

export default ToDoList;