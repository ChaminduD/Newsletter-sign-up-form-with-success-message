import './Form.css';
import mobile_image from '../../assets/images/illustration-sign-up-mobile.svg';
import desktop_image from '../../assets/images/illustration-sign-up-desktop.svg';
import Button from '../Button/Button.jsx';
import Footer from '../Footer/Footer.jsx';

function Form() {
    return (
        <div className='full-form-container'>
            <picture>
                <source media='(min-width: 600px)' srcSet={desktop_image} />
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
                        <span id='error'>Valid email required</span>
                        <input type="email" name="" id="email" placeholder='email@company.com' />
                        <Button text='Subscribe to monthly newsletter'/>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Form;