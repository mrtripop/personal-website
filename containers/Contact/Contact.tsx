import { ChangeEvent, useState } from 'react'
import { AppWrap, MotionWrap } from '@components/Wrapper'
import { FormDataType } from '@types'
import { images } from '@assets'

import './Contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState<FormDataType>({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const { name, email, message } = formData

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (): void => {
    // setLoading(true)
    // const contact = {
    //   _type: 'contacts',
    //   name: formData.name,
    //   email: email,
    //   message: message,
    // }
    // client.create(contact).then(() => {
    //   setLoading(false)
    //   setIsFormSubmitted(true)
    // })
  }

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          {/* <img src={images.email} alt='email' /> */}
          <a href='mailto:tripop.chai12@gmail.com' className='p-text'>
            tripop.chai12@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          {/* <img src={images.mobile} alt='phone' /> */}
          <a href='tel:+1 (123) 456-7890' className='p-text'>
            +1 (123) 456-7890
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type={'text'}
              placeholder='Your Name'
              name='name'
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type={'email'}
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              name='message'
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(MotionWrap(Contact, 'app__footer'), 'contact', 'app__primarybg')
