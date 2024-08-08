import { useState } from "react";
import React, { useRef } from "react";
import "../../styles/Contact.css";
import "../../styles/global.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted");
      emailjs
        .sendForm(
          "service_m1t7pmo",
          "template_dhg1cdk",
          form.current,
          "MzjPpyVMBYVOizxZf"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Email Sent successfully!", {
              hideProgressBar: true,
            });
          },
          (error) => {
            console.log(error.text);
            toast.success("There is a problem in Sending Email", {
              hideProgressBar: true,
            });
          }
        );
      e.target.reset();

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const validate = () => {
    
    let nameError = "";
    let emailError = "";
    let messageError = "";
    let subjectError = "";

    if (!name) {
      nameError = "Name is required";
    }

    if (!email) {
      emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = "Email address is invalid";
    }

    if (!message) {
      messageError = "Message is required";
    }

    if (!subject) {
      subjectError = "Subject is required";
    }

    setNameError(nameError);
    setSubjectError(subjectError);
    setEmailError(emailError);
    setMessageError(messageError);

    return !(nameError || emailError || messageError);
  };

  return (
    <div className="web-max">
      <div className="contact-bg">
        <div className="contact-overlay">
          <div className="contact-sec1" data-aos="fade-right">
            <h1>GET IN TOUCH</h1>
            <p>
              <span>PHONE :</span>+1 (098) 765-4321
            </p>
            <p>
              <span>E-MAIL :</span> devrodies123@gmail.com
            </p>
            <p>
              <span>ADDRESS :</span> Northwest Edmonton Alberta
            </p>
          </div>

          <div className="contact-sec2" data-aos="fade-right">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex-form">
                <div className="field-box1">
                  <div className="field">
                    <input
                      type="text"
                      name="user_name"
                      value={name}
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div className="error">{nameError}</div>
                  </div>

                  <div className="field">
                    <input
                      id=" email"
                      value={email}
                      label="Email"
                      placeholder="Email"
                      name="user_email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="error">{emailError}</div>
                  </div>

                  <div className="field">
                    <input
                      id="subject"
                      value={subject}
                      name="user_subject"
                      label="subject"
                      placeholder="Subject"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <div className="error">{subjectError}</div>
                  </div>
                </div>

                <div className="field-box2">
                  <div className="field message">
                    <textarea
                      id="message"
                      value={message}
                      placeholder="Message"
                      name="message"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <div className="error">{messageError}</div>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
