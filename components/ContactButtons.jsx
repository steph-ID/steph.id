import * as React from 'react';

export default function ContactButtons() {
    return (
        <div className="contact-buttons">
            <ul>
                <a href="mailto:connect@steph.id">
                    <li className="button left">
                        <i className="fa-solid fa-envelope fa-fw"></i>
                        Email
                    </li>
                </a>
                <a href="https://www.linkedin.com/in/stephanie-bledsoe-34799026/">
                    <li className="button right">
                        <i className="fa-brands fa-linkedin fa-fw"></i>
                        LinkedIn
                    </li>
                </a>
            </ul>
        </div>
    )
}