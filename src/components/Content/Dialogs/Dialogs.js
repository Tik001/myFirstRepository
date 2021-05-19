import React from 'react'
import s from './Dialog.module.css'

const Dialogs = ( props ) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    Viktor
                </div>
                <div className={s.dialog}>
                    Artyom
                </div>
                <div className={s.dialog}>
                    Tigran
                </div>
                <div className={s.dialog}>
                    EsimOv
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi Hi</div>
                <div className={s.message}>Hi Hi Hi</div>
            </div>
        </div >
    )
}
export default Dialogs;