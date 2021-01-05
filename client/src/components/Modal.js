import React from 'react';
import ReactDOM from 'react-dom';

const Modal =(props)=>{

    const Styles={
        modal:{
            marginLeft:"23%",
            marginTop:"15%",
            textAlign:"center",
            width:'50%',
            height:"200px",
        }
    }
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e)=>e.stopPropagation()} style={Styles.modal} className="ui standard modal visible active">
    <div className="header"> {props.title}</div>
    <div className="content">{props.content}</div>
               <div className="actions">
                    { props.action }
               </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;