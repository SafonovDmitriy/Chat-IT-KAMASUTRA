import React from 'react';
import s from './DialogList.module.css'
import DialogItem from './DialogItem/DialogItem';

const DialogList = (props) => {
    let DialogData =
        [
            { id: 1, name: "Dima" },
            { id: 2, name: "Diana" },
            { id: 3, name: "name" },
            { id: 4, name: "name2" },
            { id: 5, name: "name3" }
        ]
    let SetDialogs = DialogData.map(Human => <DialogItem name={Human.name} />)
    return <div className={s.wrapper}>
        {SetDialogs}
    </div>
}
export default DialogList;