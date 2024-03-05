import './Message.css';
import success_icon from '../../assets/images/icon-success.svg';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';

function Message({userEmail, setSubmitSuccess}) {

    function handleDismiss(){
        setSubmitSuccess(false);
    }

    return (
        <div className='full-message-container'>
            <div className='message-container'>
                <div className='message'>
                    <img src={success_icon} alt="success icon" />
                    <h1>Thanks for subscribing!</h1>
                    <p>A confirmation email has been sent to <b>{userEmail}</b>. Please open it and click the button inside to confirm your subscription.</p>
                </div>
                <Button text='Dismiss message' onClick={handleDismiss}/>
            </div>
            <Footer/>
        </div>
        
    );
}

Message.propTypes = {
    userEmail: PropTypes.string,
    setSubmitSuccess: PropTypes.func,
}

export default Message;