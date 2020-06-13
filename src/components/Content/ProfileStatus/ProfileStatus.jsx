import React, { useState, useEffect } from 'react';
// import s from './ProfileStatus.module.css'

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if (props.activeIDUser === props.userId) {
            setEditMode(true)
        }
    }
    const deactivateEditMode = (e) => {

        props.setStatusUser(e.currentTarget.value)


        setEditMode(false)
    }
    const updateStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <>

        {
            !editMode ? <span onDoubleClick={() => activateEditMode()}>{props.status ? status : " newStatus"}</span> :
                <input autoFocus
                    value={status} onChange={updateStatus} onBlur={deactivateEditMode} />

        }


    </>


}


export default ProfileStatus