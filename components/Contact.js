import React from 'react'

function Contact(){
    return (
        <main>
            <img src="./images/profile-photo-2.png" className="main--photo"/>
            <h1 className="main--name">Riley Gregg</h1>
            
            <h3 className="main--job_title">Frontend Developer</h3>
            
            <p className="main--website">rileygregg.website</p>
            
            <button className="main--button">
                <img src="./images/email-icon" className="button--logo" />
                <h5 className="button--title">Email</h5>
            </button>        
        </main>
    )
}

export default Contact;