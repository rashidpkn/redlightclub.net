import React from 'react'
import { useSelector } from 'react-redux'
import LeftSide from './components/LeftSide'
import Q1 from './question/Q1'
import Q2 from './question/Q2'
import Q3 from './question/Q3'
import Q4 from './question/Q4'
import Q5 from './question/Q5'
import Q6 from './question/Q6'
import Q7 from './question/Q7'
import RightSide from './components/RightSide'
import Q8 from './question/Q8'
import Q9 from './question/Q9'
import Q10 from './question/Q10'

function NewAds() {
    const { qno } = useSelector(state => state.util.newAds)
    return (
        <div className='flex justify-center w-full h-screen'>
            <LeftSide />
            <RightSide >
                {qno === 1 && <Q1 />}
                {qno === 2 && <Q2 />}
                {qno === 3 && <Q3 />}
                {qno === 4 && <Q4 />}
                {qno === 5 && <Q5 />}
                {qno === 6 && <Q6 />}
                {qno === 7 && <Q7 />}
                {qno === 8 && <Q8 />}
                {qno === 9 && <Q9 />}
                {qno === 10 && <Q10 />}
            </RightSide>
        </div>
    )
}

export default NewAds