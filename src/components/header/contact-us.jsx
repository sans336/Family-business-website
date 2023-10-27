import { useState } from "react";
import './Contact.css'

const Contact = () => {

//   const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    requirement:""
  });

   const [contactData, setContactData] = useState(
    JSON.parse(localStorage.getItem("Contact")) || []
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["name", "number", "email", "requirement"];
    const isEmptyField = requiredFields.some(field => !formData[field]);
  
    if (isEmptyField) {
      alert("please enter all the data ");
      return;
    }
    const newContact = {
      name: formData.name,
      email: formData.email,
      number: formData.number,
      requirement: formData.requirement
    }

     const existingContact =
      JSON.parse(localStorage.getItem("Contact")) || [];
    const updatedContact = [...existingContact, newContact];
    localStorage.setItem("Contact", JSON.stringify(updatedContact));

    setContactData(updatedContact);
    setFormData({
      name: "",
    email: "",
    number: "",
    requirement:""
    });

    // setShowSuccessMessage(true);
    // setTimeout(() => {
    //   setShowSuccessMessage(false);
    // }, 2000);


  }

    return (
      <div >
        <h1><strong>Supplier wants to know more about you</strong></h1>
        <form className="form-container" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <div className="input-element ">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="input-element">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter email"
              onChange={handleInputChange}
            />
            <small>Supplier will contact you on this email</small>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <div className="input-element">
            <input
              type="tel"
              name="number"
              value={formData.number}
              placeholder="Enter ur no."
              onChange={handleInputChange}
            />
          </div>
        </div>
          
        <div className="form-group">
          <small>Leave a Message, we will call you back!</small>
          <label htmlFor="requirement">Requirement</label>
          <div className="input-element">
            <input
              type="textarea"
              name="requirement"
              value={formData.requirement}
                placeholder="Requirement Details"
                rows="4"
                cols="10"
              onChange={handleInputChange}
            />
          </div>
        </div>
          <button type="submit" id="submitBtn" className="submitBtn">submit</button>
          
        </form>
        {/* {showSuccessMessage  && (
          <div >
            Form submitted successfully!
          </div>
        )} */}
        
      </div>
    );
  }
  export default Contact;