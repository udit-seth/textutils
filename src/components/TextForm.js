import React, { useState } from 'react'
//useState is a hook using array destructuring
export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to UpperCase", "success");
    }

    const handleLowClick = () => {
        //console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase", "success");
    }

    const handleClearClick = () => {
        //console.log("Uppercase was clicked");
        let newText = '';
        setText(newText);
        props.showAlert("text cleared", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra spaces removed", "success");
    }


    /*const words = () => {
        let wrd = text.trim.split(" ").length;
        if (wrd === 1 && text.split(" ")[0] === "") {
            wrd = 0;
            return wrd;
        }
        else {
            return wrd;
        }
    }*/



    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value)
    }





    const [text, setText] = useState('');
    /*text="new text";//wrong way
    setText="new text";//right way*/
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myText" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Spaces</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Text Summary</h2>
                <p>the text contains {text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes required to read the text</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something above to preview here"}</p>
            </div>
        </>
    )
}



//<p>the text contains {words} words</p>