import React from 'react'
import "../Css/contact.css";
import ct from "../../assets/file/contact.png"


function Contact() {


    return (
        <div id='contact'>
            <div className="leftcontact">
                <img src={ct} alt="" />
            </div>
            <div className="rightcontact">


                <form
                    action="https://formspree.io/f/xyzypvyb"
                    method="POST"
                >

                    <input type="text" name="name" placeholder='Name' required />
                    <input type="email" name="email" placeholder='Email' />
                    <input type="tel" id="phone" name="phone" placeholder='Mobile No' required />



                    <textarea name="message" placeholder='Text Area' required></textarea>

                    {/* <!-- your other form fields go here --> */}
                    <button type="submit">Send</button>
                </form>

            </div>
        </div>
    )
}

export default Contact
