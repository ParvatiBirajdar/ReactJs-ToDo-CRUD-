import React from 'react';
import ListItem from './listItemIcon';

class ListBody extends React.Component {

  displayTasks() {
    const props = this.props 

    return this.props.tasks.map((task, index) =>
      <ListItem 
      key={index} 
      index={index} {...task} {...props} />
    );
  }

  render() {
    return (
      <div>
        <table className="table">
<thead>
  <tr>
    <th>Task</th>
    <th>Action</th>
  </tr>
</thead>
</table>
        {this.displayTasks()}
      </div>
    )
  }
}

export default ListBody;