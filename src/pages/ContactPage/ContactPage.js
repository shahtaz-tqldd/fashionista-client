import React from 'react'
import useTitle from '../../hooks/useTitle'

const ContactPage = () => {
  useTitle('Contact Us')
  return (
    <React.Fragment>
      <h1 className='text-gradient font-bold text-5xl text-center mb-8'>Contact Us</h1>
      <section className='flex lg:flex-row gap-14 flex-col'>
        <div className='lg:w-[35%]'>

          <img src="https://img.freepik.com/free-vector/happy-man-online-dating-via-laptop_74855-7495.jpg" alt="" className='w-full rounded-2xl' />
        </div>
        <div className='lg:w-[65%]'>
          <form>
            <input type="text" placeholder="Your Name" className="input input-bordered w-full mb-2" />
            <input type="text" placeholder="Email" className="input input-bordered w-full mb-2" />
            <textarea className="textarea textarea-bordered w-full h-60" placeholder="Your Message"></textarea>
            <button className='btn btn-wide normal-case text-white mt-8 flex items-center gap-2'>
              Send Message
              <lord-icon
                target="button"
                src="https://cdn.lordicon.com/zmkotitn.json"
                trigger="hover"
                colors="primary:#ffffff"
                style={{ width: "20px", height: "20px" }}>
              </lord-icon>
            </button>
          </form>
        </div>

      </section>
    </React.Fragment>
  )
}

export default ContactPage