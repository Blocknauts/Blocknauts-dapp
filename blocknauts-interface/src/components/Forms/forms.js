import React, {useState} from 'react'
import './forms.css'
import FontPicker from "font-picker-react";

function Forms() {
    const [font, setNextFont] = useState("Open Sans")
  return (
    <div>
        <div className="forms__container">
            <span className="forms__button">
                <div className="forms__cookies">
                    <p>Cookie Preferences</p>
                    <select name="select">
                        <option value="value1">Yes</option>
                        <option value="value2" selected>No</option>
                    </select>
                </div>
                <div className="forms__highlightcolor">
                    <p>Highlight Color</p>
                    <input type="color" id="colorpicker" value="#0000ff"></input>
                </div>
                <div className="forms__fontcolor">
                    <p>Font Color</p>
                    <input type="color" id="colorpicker" placeholder="Select Color" value="#0000ff"></input>
                </div>
                <div className="forms__font">
                    <p>Font</p>
                    <FontPicker apiKey='AIzaSyCTtR89twV3uThtcKhEv-DC17FDLOSqM3c' activeFontFamily={font} onChange={(nextFont) => setNextFont(nextFont.family)}/>
                </div>
                <div className="forms__dark">
                    <p>Dark</p>
                    <select name="select">
                        <option value="value1">True</option>
                        <option value="value2" selected>False</option>
                    </select>
                </div>
            </span>
        </div>
    </div>
  )
}

export default Forms