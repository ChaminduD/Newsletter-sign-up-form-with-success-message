import Form from './Components/Form/Form.jsx';
import Message from './Components/Message/Message.jsx';
import './App.css';
import { useState } from 'react';

function App() {

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState(null);

  function handleFormSubmit(data){
    setSubmitSuccess(true);
    setSubmittedEmail(data);
  }
  
  return (
    <>
      {submitSuccess ?
        <Message userEmail={submittedEmail} setSubmitSuccess={setSubmitSuccess}/>
        :
        <Form setSubmitSuccess={setSubmitSuccess} onSubmit={handleFormSubmit} />
      }
    </>
  )
}

export default App
