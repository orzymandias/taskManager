import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { ListItem, Checkbox, ListItemIcon, ListItemText, ListItemSecondaryAction,IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


class Taskitem extends Component {
    // getStyle =  () =>  {
    //     return {
    //         background: '#11111', 
    //         borderBottom: '1px #ccc dotted',
    //         textDecoration: this.props.tasks.completed ? 'line-through' : 'none',
    //         padding: '20px'
    //     }
    // }
    
    render() {
        const {id, title, status} = this.props.tasks
        return (
            <div className='taskItem'>
                <ListItem dense button onClick={this.props.markComplete.bind(this, id)}>
                        <ListItemIcon>
                            <Checkbox
                                edge='start'
                                checked={status}
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText id={id} primary={title} />
                        <ListItemSecondaryAction>
                        <IconButton edge="end" onClick={this.props.deleteTask.bind(this, id)}>
                            < DeleteIcon/>
                        </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
            </div>    
        );
    }

}

// Assert proptype
Taskitem.propTypes = {
    tasks: PropTypes.object.isRequired
}
export default Taskitem;