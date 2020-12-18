import React from 'react';
import ListBody from './list-body';

class List extends React.Component {
render() {

    const props = this.props;
  
    return (
      <div className="mt-5">
        <ListBody tasks={this.props.taskList} {...props}/>
      </div>
    )
  }
}

export default List;