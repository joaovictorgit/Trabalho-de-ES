import {BsHouseFill} from '@react-icons/all-files/bs/BsHouseFill'
import {BsFillCalendarFill} from '@react-icons/all-files/bs/BsFillCalendarFill'
import {FaUserMd} from '@react-icons/all-files/fa/FaUserMd'
import {FaUserInjured} from '@react-icons/all-files/fa/FaUserInjured'
import {RiShieldCrossFill} from '@react-icons/all-files/ri/RiShieldCrossFill'

const items = [
    {
        name: 'Início',
        icon: <BsHouseFill/>,
        link: '/'
    },
    {
        name: 'Agendamento',
        icon: <BsFillCalendarFill/>,
        link: '/scheduling'
    },
    {
        name: 'Médicos',
        icon: <FaUserMd/>,
        link: '/doctor'
    },
    {
        name: 'Pacientes',
        icon: <FaUserInjured/>,
        link: '/patient'
    },
    {
        name: 'Convênio',
        icon: <RiShieldCrossFill/>,
        link: '/insurance'
    }
]

export default items;