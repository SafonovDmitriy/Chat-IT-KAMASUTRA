import React from 'react';
// import s from './ProfileStatus.module.css'


class ProfileStatus extends React.Component {


    state = {
        statusElement: React.createRef(),
        editMode: false,
        textStatus: this.props.status
    }
    activateEditMode = () => {
        this.setState({ editMode: true })

    }
    deactivateEditMode = (newStatus) => {
        this.setState({ editMode: false })
        debugger
        this.props.setStatusUser(newStatus)
    }
    updateStatus(newText) {
        this.setState({ textStatus: newText })

    }
    render() {
        return <>
            {
                !this.state.editMode ? <span onDoubleClick={() => this.activateEditMode()}>{!this.state.textStatus?"newStatus":this.state.textStatus}</span> :
                    <input ref={this.state.statusElement} autoFocus
                        value={this.state.textStatus} onChange={() => this.updateStatus(this.state.statusElement.current.value)} onBlur={() => this.deactivateEditMode(this.state.statusElement.current.value)} />

            }


        </>
    }

}


export default ProfileStatus