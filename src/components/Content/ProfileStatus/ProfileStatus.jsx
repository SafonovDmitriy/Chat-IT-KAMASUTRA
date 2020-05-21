import React from 'react';
// import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        textStatus: this.props.status

    }

    componentDidUpdate(prevProps,prevState) {
        console.log(prevState)
    }
    activateEditMode = () => {
        if (this.props.activeIDUser === this.props.userId) {
            this.setState({ editMode: true })
        }

    }
    deactivateEditMode = (e) => {
        if (e.currentTarget.value !== this.state.textStatus) {
            this.props.setStatusUser(e.currentTarget.value)
        }

        this.setState({ editMode: false })
    }
    updateStatus = (e) => {
        this.setState({ textStatus: e.currentTarget.value })
    }
    render() {

        return <>

            {
                !this.state.editMode ? <span onDoubleClick={() => this.activateEditMode()}>{this.props.status ? this.state.textStatus : "newStatus"}</span> :
                    <input ref={this.state.statusElement} autoFocus
                        value={this.state.textStatus} onChange={this.updateStatus} onBlur={this.deactivateEditMode} />

            }


        </>
    }

}


export default ProfileStatus