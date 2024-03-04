import './Message.css';
import success_icon from '../../assets/images/icon-success.svg';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';

function Message() {
    return (
        <div className='full-message-container'>
            <div className='message-container'>
                <div className='message'>
                    <img src={success_icon} alt="success icon" />
                    <h1>Thanks for subscribing!</h1>
                    <p>A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.</p>
                </div>
                <Button text='Dismiss message' />
            </div>
            <Footer/>
        </div>
        
    );
}

export default Message;