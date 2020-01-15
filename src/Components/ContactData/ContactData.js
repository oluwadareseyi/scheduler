import React from 'react';
import "./ContactData.scss";
import Input from "../UI/Input/Input"

const ContactData = () => {
    return (
        <div className="contact-data">
            <div className="title-1">
                Enter your information
            </div>
            <div className="title-2">
                Personal data
            </div>
            <Input />
        </div>
    );
};

export default ContactData;