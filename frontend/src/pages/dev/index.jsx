import React from 'react'

function Dev() {

    return (
        <>
        <div className='h-screen w-full relative overflow-y-scroll' >
           <Section color={100}  index={1}/>
           <Section color={200}  index={2}/>
           <Section color={300}  index={3}/>
           <Section color={400}  index={4}/>
           <Section color={500}  index={5}/>
           <Section color={600}  index={6}/>
        </div>
        
        </>
    )
}

export default Dev

const Section = ({color,index}) => {

    
    return (
        <section className={`w-full h-full sticky top-0 bg-blue-${color} border  border-black flex justify-between p-5 `} >
            <div className="h-full w-[50%] border border-black">{index}</div>
            <div className={`h-full w-[30%] border border-black p-5 flex flex-col justify-center items-center gap-5`}>
                <div className="h-[50%] w-full bg-black"></div>
                <div className="h-[50%] w-full bg-black"></div>
            </div>

        </section>
    )
}