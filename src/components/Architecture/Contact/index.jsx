import { useState } from 'react';
import contact from '../../../data/architecture/contact.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    number: "",
    message: ""
  });

  const [errMessage, setErrMessage] = useState(null);

  const validateForm = (formValues) => {
    if (!formValues.name || !formValues.email || !formValues.message) {
      setErrMessage('Please fill in all fields');
      return false;
    }
    if (formValues.name.length < 5) {
      setErrMessage('Name must be at least 5 characters');
      return false;
    }
    if (isNaN(Number(formValues.number)) || formValues.number.length < 11) {
      setErrMessage('Number is not valid');
      return false;
    }
    if (formValues.message.length < 10) {
      setErrMessage('Message must be at least 10 characters');
      return false;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
      setErrMessage('Email is invalid');
      return false;
    }
    return true;
  }

  const handleChange = (e) => {
    setFormData(prev => ({ 
      ...prev, 
      [e.target.name]: e.target.value 
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //= Validate Form
    if (!validateForm(formData)) return;

    //= Clear Error Message
    setErrMessage('');

    //= Sumbit The Form
    document.forms[0].submit();
  };

  return (
    <section className="contact sub-bg section-padding mt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="cont mb-100">
              <h6 className="sub-title fw-200 yellow-green-color mb-30">Get In Touch</h6>
              <h2>Want to make the interior of your home more extraordinary?</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="cont-info md-mb50">
              <h6 className="mb-30 fw-700">{ contact.title }</h6>
              <ul className="rest">
                <li className="mb-10">
                  <a href="#0">{ contact.address }</a>
                </li>
                <li className="mb-10 underline">
                  <a href="#0">{ contact.phone }</a>
                </li>
                <li>
                  <a href="#0">{ contact.email }</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <form id="contact-form" method="post" action="contact.php">
              {
                errMessage && <div className="messages">{ errMessage }</div>
              }

              <div className="controls row">

                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input id="form_name" type="text" name="name" placeholder="Name" required="required" onChange={handleChange} value={formData.name} />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input id="form_company" type="text" name="company" placeholder="Company (optional)" onChange={handleChange} value={formData.company} />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input id="form_email" type="email" name="email" placeholder="Email" required="required" onChange={handleChange} value={formData.email} />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input id="form_number" type="text" name="number" placeholder="Your Number" required="required" onChange={handleChange} value={formData.number} />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-30">
                    <textarea id="form_message" name="message" placeholder="Message" rows="4" required="required" onChange={handleChange} value={formData.message}></textarea>
                  </div>
                </div>

                <div className="col-12 text-center">
                  <button type="submit" className="butn-dots" onClick={handleSubmit}>
                    <span>Let&lsquo;s Talk</span>
                    <span className="bord-round"></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact