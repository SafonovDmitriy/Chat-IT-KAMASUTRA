import React from 'react';
// import s from './ProfileStatus.module.css'


class ProfileStatus extends React.Component {


    state = {
        statusElement: React.createRef(),
        editMode: false,
        textStatus: this.props.status
    }
    activateEditMode = () => {
        this.setState({ editMode: !this.state.editMode })

    }
    updateStatus(newText) {
        this.setState({ textStatus: newText })
    }
    render() {
        return <>
            {
                !this.state.editMode ? <span onDoubleClick={() => this.activateEditMode()}>{this.state.textStatus}</span> :
                    <input ref={this.state.statusElement} autoFocus
                        value={this.state.textStatus} onChange={() => this.updateStatus(this.state.statusElement.current.value)} onBlur={() => this.activateEditMode()} />

            }


        </>
    }

}


export default ProfileStatus