import { Link, useParams } from 'react-router-dom'
const Menu = ({ Icon, title, url }) => {
    const { menu } = useParams()
    return (
        <Link to={`/dashboard/${url}`} title={title}>
            <div className={`${menu === url || ((title==='Home' || title==='Manage Advets') && menu === undefined) ? 'text-white bg-[#E11700]' : 'text-[#a5a5a5]'} h-12 flex lg:pl-5 justify-center lg:justify-between items-center lg:rounded-r-md`}>
                <div className="w-5 h-5">
                    <Icon fill={menu === url || ((title==='Home' || title==='Manage Advets') && menu === undefined)? '#fff' : '#A5A5A5'} />
                </div>
                <p className='hidden lg:inline-block w-[calc(80%-4px)] font-semibold text-sm'>{title}</p>
                
            </div>
        </Link>
    )
}

export default Menu