import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class ListItem extends React.Component {
  state = {
    editing: false,
    expanded: null,
  }
  
 
  // Will put task on the screen depending on editing mode
  renderTasks() {
    // Formatting for prop passing - shortening
    const { name} = this.props;

   
    // if is editing - show text input box
    if (this.state.editing) {
      return (
        <div key={name}>
          <form onSubmit={this.handleSave.bind(this)}>
            <input name={name}
            className="p-1 m-1 rounded" 
            type="text"
            defaultValue={name} 
            ref="editInput"/>
          </form>
        </div>
      )
    }

    // if not editing - just show text
    return (
      <Typography key={name}>
        {name}
      </Typography>
      
    )
  }


  // Will put buttons on screen depending on editing mode
  renderButtons() {
    // if editing - show these buttons (Cancel, Delete, Save)
    if (this.state.editing) {
      return (
        <div className='d-flex flex-direction-row justify-content-space' id="btnCustomCss">
          <Button 
           variant="contained" 
           onClick={this.handleToggleEdit.bind(this)}>Cancel</Button>
          <Button 
            variant="contained" 
            color="secondary"
            onClick={this.handleDelete.bind(this)}>Delete</Button>
          <Button 
            variant="contained" 
            color="primary"
            onClick={this.handleSave.bind(this)}>Save</Button>
        </div>
      )
    }

    // if not editing - only show Edit button
    return (
      <div>
        <Button 
        variant="contained" 
        color="primary"
        onClick={this.handleToggleEdit.bind(this)}>Edit</Button>
      </div>
    )
  }

  // Overall output to screen
  render() {
    const { index } = this.props;
    return (
           <div>
  <table className="table" key={index}>
<thead></thead>
  <tbody key={index}>
    <tr>
      <th>{this.renderTasks()}</th>
      <th>{this.renderButtons()}</th>
    </tr>
  </tbody>
</table>
         </div>
  )
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  //Change title colour on click
  handleToggleComplete() {
    const taskToToggle = this.props;
    this.props.toggleTask(taskToToggle);
  }

  // Will trigger deleteTask() in app.js
  handleDelete() {
    const taskToDelete = this.props.name;
    this.props.deleteTask(taskToDelete);
    // need to re-toggle edit when deleting to stop editmode being applied to next in line
    this.handleToggleEdit();
  }

  // Will trigger saveTask() in app.js
  handleSave(event) {
    event.preventDefault();

    const oldTask = this.props.name;
    const newTask = this.refs.editInput.value;    
    this.props.saveTask(oldTask, newTask);

    // Set editing mode back to false
    this.setState({editing: false});
  }

  // Triggers edit locally
  handleToggleEdit() {
    this.setState(prevState => ({ editing: !prevState.editing}));
  }
}

export default ListItem;