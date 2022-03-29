//import React, { useState } from 'react'

export default function About(props) {

    //const [myStyle, setMyStyle] = useState({
    //    color: 'black',
    //    backgroundColor: 'white'

    //})
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? ' #41647f' : 'white'
    }


    //const [btnText, setBtnText] = useState('Enable Dark Mode')


    return (
        <div className='container' >
            <h2 className='my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextAnalyzer gives ypu a way to analyze your text quickly and efficiently.Be it word count or character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextAnalyzer is a free character counter tool that provides instant character count and word count statistics for a given text.TextAnalyzer reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compaitible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter works in any web browser such as Chrome, Firefox, Microsoft edge, Safari, Opera. It suits to count character in Facebook, blogs, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="container my-2"></div>
            <button onClick={toggleStyle} type="button" className="btn btn-success">{btnText}</button>*/}
        </div>
    )
}





//    const toggleStyle = () => {
//        if (myStyle.color === 'black') {
//            setMyStyle({
//                color: 'white',
//                backgroundColor: 'black',
//                border: '1px solid white'
//            })
//            setBtnText('Enable Light Mode')
//        }
//        else {
//            setMyStyle({
//                color: 'black',
//                backgroundColor: 'white'
//            })
//            setBtnText('Enable Dark Mode')
//        }
    //}
