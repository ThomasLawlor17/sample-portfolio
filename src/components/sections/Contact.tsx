import { useState } from "react"
import { styled } from "styled-components"
import Icon from "../icons/Icon"
import Pattern from "../icons/Pattern"

const StyledSection = styled.section`
position: relative;
padding: 84px 11.5% 171px;
width: 100%;
background: var(--grey);

.container {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    max-width: 1110px;
    padding-bottom: 92px;
}
header {
    width: 445px;
    display: flex;
    flex-direction: column;
    gap: 36px;
}


.rings {
    position: absolute;
    bottom: 219px;
    left: -205px;
}

@media (max-width: 769px) {
    padding: 60px 0 102px 0;

    .container {
        max-width: 445px;
        margin: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 48px;
        text-align: center;
    }

    .rings {
        bottom: 130px;
        left: -368px;
    }
}
@media (max-width: 450px) {
    padding: 60px 16px 171px 16px;

    header {
        width: 100%;
    }
    .rings {
        bottom: 269px;
        left: -343px;
    }
}
`

const StyledForm = styled.form`
width: 100%;
max-width: 445px;
ul {
    display: flex;
    flex-direction: column;
    gap: 32px;
    li {
        ${({theme}) => theme.mixins.textField}

        &:last-of-type {
            height: 107px;

            textarea {
                min-height: 107px;
                font-family: 'Space Grotesk';
                resize: none;
            }
            label {
                &::before, &::after {
                    bottom: -1px;
                }
            }
        }
    }
}


button {
    ${({theme}) => theme.mixins.button}
    float: right;
    margin-top: 32px;
}

.cheers {
    display: block;
    height: 38px;
    margin-top: 32px;
}

@media (max-width: 769px) {
    .cheers {
        text-align: left;
        padding-left: 24px;
    }
}

`

export default function Contact() {
    const [message, setMessage] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [error, setError] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [sent, setSent] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMessage((message) => ({...message, [e.target.name]: e.target.value}))
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!message.name) {
            console.log('1')
            setError((error) => ({...error, name: 'Sorry, please enter a name'}));
        } if (!message.email) {
            setError(error => ({...error, email: 'Sorry, please enter an email'}))
        } if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(message.email) && message.email) {
            console.log(2)
            console.log(error)
			setError((error) => ({...error, email: 'Sorry, invalid format here'}));
            console.log(error)
		} if (!message.message) {
            console.log(3)
            setError((error) => ({...error, message: 'Sorry, please enter a message'}));
        } if (message.name && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(message.email) && message.message) {
			console.log(message);
            setSent(true)
            setError({
                name: '',
                email: '',
                message: '',
            })
            setMessage({
                name: '',
                email: '',
                message: ''
            })
		} else {
            console.log(error)
        }
    }


  return (
    <StyledSection id="contact">
        <div className="container">
        <header>
            <h1>Contact</h1>
            <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </header>
        <StyledForm onSubmit={handleSubmit} autoComplete="off" noValidate>
            <ul>
                <li className={error.name && !message.name ? 'error' : ''}>
                    <input id="name" type="text" placeholder="name" onChange={handleChange} value={message.name} name="name"/>
                    <label htmlFor="name"></label>
                    <span>{error.name}</span>
                    <Icon name="error"/>
                </li>
                <li className={(error.email && !message.email) || (error.email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(message.email)) ? 'error' : ''}>
                    <input id="email" type="email" placeholder="email" onChange={handleChange} value={message.email} name="email"/>
                    <label htmlFor="email"></label>
                    <span>{error.email}</span>
                    <Icon name="error"/>
                </li>
                <li className={error.message && !message.message ? 'error' : ''}>
                    <textarea id="message" placeholder="message" onChange={handleChange} value={message.message} name="message"/>
                    <label htmlFor="message"></label>
                    <span>{error.message}</span>
                    <Icon name="error"/>
                </li>
            </ul>
            <button onClick={handleSubmit}>send message</button>
            {sent ? <span className="cheers">Thanks for the message!</span> :''}
        </StyledForm>
        </div>
        <Pattern name="rings"/>
    </StyledSection>
  )
}
