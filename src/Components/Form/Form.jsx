import './Form.css';
import mobile_image from '../../assets/images/illustration-sign-up-mobile.svg';
import desktop_image from '../../assets/images/illustration-sign-up-desktop.svg';
import Button from '../Button/Button.jsx';
import Footer from '../Footer/Footer.jsx';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Form({setSubmitSuccess, onSubmit}) {

    const [inputEmail, setInputEmail] = useState('');
    const [color, setColor] = useState('black')
    const [bgColor, setBgColor] = useState('transparent');
    const [error, setError] = useState('');
    const [borderColor, setBorderColor] = useState('hsl(231, 7%, 60%)');
    const [buttonType, setButtonType] = useState('button');

    function handleChange(event){
        setInputEmail(event.target.value);

        if(event.target.value.length == 0){
            setError('Email cannot be empty');
            setBgColor('hsla(4, 100%, 67%, 0.15)');
            setBorderColor('hsl(4, 100%, 67%)');
            return false;
        }
        if(!event.target.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
            setColor('hsl(4, 100%, 67%)');
            setError('Valid email required');
            setBgColor('hsla(4, 100%, 67%, 0.15)');
            setBorderColor('hsl(4, 100%, 67%)');
            return false;
        }else{
            setColor('black');
            setError('');
            setBgColor('transparent');
            setBorderColor('hsl(231, 7%, 60%)');
            return true;
        }
        
    }

    function handleSubmit(){
        const event = { target: { value: inputEmail } };
        const isValid = handleChange(event);
        if(isValid){
            setButtonType('submit');
            setSubmitSuccess(true);
            onSubmit(inputEmail);
        }
    }

    return (
        <div className='full-form-container'>
            <picture>
                <source media='(min-width: 900px)' srcSet={desktop_image} />
                <source media='(min-width: 375px)' srcSet={mobile_image} />
                <img src={mobile_image} alt="illustration" />
            </picture>
            
            <div className='form-container'>
                <h1>Stay updated!</h1>
                <div>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul>
                        <li>Product discovery and building what matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                    </ul>
                    <form>
                        <label htmlFor="email">Email address</label>
                        <span id='error'>{error}</span>
                        <input type="email" name="email" id="email" placeholder='email@company.com' value={inputEmail} onChange={handleChange} style={{ color: color, backgroundColor: bgColor , borderColor: borderColor}}/>
                        <Button text='Subscribe to monthly newsletter' type={buttonType} onClick={handleSubmit}/>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

Form.propTypes = {
    setSubmitSuccess: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default Form;