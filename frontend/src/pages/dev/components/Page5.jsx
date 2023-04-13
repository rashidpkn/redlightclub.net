import React, { useEffect, useState } from 'react'

function Page5({setDisable}) {
    const [agree, setAgree] = useState(false)
    useEffect(() => {
        agree && setDisable(false)
        // eslint-disable-next-line
      }, [agree])

    return (
        <div className='space-y-5 w-fullh-full'>
            <p className='text-sm font-bold'>Terms and Condition</p>
            <div className="w-full h-96 bg-[#F5F5F5] rounded-xl p-5 overflow-y-scroll">

                <p className='text-justify text-sm'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quisquam nam, cumque distinctio earum voluptates labore harum nisi rerum molestiae quis eligendi modi aliquam veniam ratione fuga ex repudiandae! Ullam.
                    At, doloremque maxime! Vel eaque esse velit mollitia, et praesentium incidunt voluptatem? Veniam cum ullam ratione assumenda. Architecto earum eligendi consequuntur magnam eius nobis eaque facere delectus est, voluptatem iure.
                    Autem at praesentium repudiandae amet, a iure optio beatae quas asperiores placeat aperiam sit aspernatur recusandae assumenda eius ut! Quod aliquid nam obcaecati incidunt numquam quibusdam. Quasi beatae et eligendi?
                    Veniam molestiae consequuntur distinctio nemo minus adipisci, labore voluptatem reprehenderit! Delectus temporibus ex autem enim. Excepturi, ullam nesciunt quas ipsa harum aperiam dolor officia, quibusdam, esse laudantium magnam temporibus sint!
                    Consequatur natus fugit atque quidem mollitia repudiandae ex unde quibusdam. Magni amet rerum illum molestiae architecto voluptatum et quidem blanditiis, vero veniam pariatur soluta quam aperiam rem? Incidunt, officiis molestias!
                    <br />
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, magni. Iusto, harum magnam dignissimos iste quis vero nihil laudantium aliquid dicta soluta? At natus eveniet sit quasi hic, dicta error.
                    Dolor vitae autem ad, totam facere, optio voluptatum quod numquam sint quaerat ut adipisci quisquam aliquam nostrum consequatur iste reiciendis recusandae! Deleniti nobis placeat iste! Quod, odio. Accusantium, nulla odit.
                    Omnis quae cum incidunt enim quis consectetur accusamus sunt neque quaerat sed nostrum, tempora doloremque unde beatae hic id numquam odit odio deleniti! Deserunt labore facilis eveniet dolores doloribus accusantium.
                    Facere ad accusamus, aperiam minus, sunt ipsam accusantium quia optio distinctio, minima et iste quam veritatis? Totam, dolor quae. Quos fuga labore iusto nam, soluta earum. Sunt voluptatum placeat numquam.
                    Optio veniam sequi nam quas blanditiis! Debitis architecto doloribus delectus, fugiat eligendi libero impedit labore error, laborum est nam? Quod, ullam. Labore laudantium a atque quae corrupti excepturi harum nisi?
                </p>
            </div>
            <div className="flex justify-center items-center gap-5">
                <input type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)} name="" id="" />
                <p>I Agree to the terms and condition</p>
            </div>
            
        </div>
    )
}

export default Page5