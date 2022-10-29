import { useState } from 'react';
import Split from '../../Split';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    <div className="comments-from">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">
            <div className="text mb-60">
              <h4>Leave a comment</h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">
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
                    <input id="form_email" type="email" name="email" placeholder="Email" required="required" onChange={handleChange} value={formData.email} />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mb-30">
                    <textarea id="form_message" name="message" placeholder="Message" rows="4" required="required" onChange={handleChange} value={formData.message}></textarea>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="butn butn-md gr-purple-red-bg text-light radius-30" onClick={handleSubmit}>
                    <Split><span className="text" data-splitting>Post Comment</span></Split>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form