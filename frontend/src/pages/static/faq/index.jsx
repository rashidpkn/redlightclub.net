import React, { useState } from 'react'

function FAQ() {
    return (
        <div className=' w-full px-[10%] py-[5%] lg:px-10 text-white' style={{ backgroundImage: 'linear-gradient(to top, #ff0000, #c20023, #820327, #420f1d, #000000)' }}>
            <h1 className='font-medium text-2xl mt-16'>FAQ</h1>
            <Question
                question={'How Does Red Light Club Work?'}
                answer={'Red Light Club is a website to book escorts online. You can access the list of escorts available for free, browse through the different profiles, and book a date in minutes on the app.'}
            />
            <Question
                question={'How Many Escorts Are Registered On Red Light Club?'}
                answer={'As of 2022, over 30,000 escorts are registered on Red Light Club in over 30 cities across Asia, Europe, and Oceania.'}
            />
            <Question
                question={'How can I join?'}
                answer={'Joining  Red Light Club is easy. Complete the sign up form,And Then Create a Ads'}
            />
            <Question
                question={'How do I change my password?'}
                answer={'To change your password, go to Account settings, then click on Change password.'}
            />
            <Question
                question={'What browsers does our site support?'}
                answer={'We actively support the latest stable version of Chrome, Firefox, Safari and Edge. We also actively make sure that our site works well in iOS and Android.'}
            />
        </div>
    )
}

export default FAQ


function Question({ question, answer }) {
    const [show, setShow] = useState(false)
    return (
        <div className="w-full py-5 text-white  flex flex-col gap-3">
            <span className='cursor-pointer' onClick={() => setShow(!show)}>{question}</span>
            <p className={`px-5 text-sm ${show ? 'text-justify' : 'hidden'} `}>
                {answer}
            </p>
        </div>
    )
}