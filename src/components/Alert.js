import React from 'react'

function Alert(props) {
    // props.alert &&--> this happens because all the jsx will be converted to javascript calls
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {capitalize(props.alert.msg)}

        </div >
    )
}

export default Alert


//{<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>}