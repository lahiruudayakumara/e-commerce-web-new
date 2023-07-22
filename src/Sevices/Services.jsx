import React from 'react'
import './ser.css'

import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';

import serviceData from '../assets/data/serviceData'

const Services = () => {
  return (
    <section className='Servicess'>
        <div className='container mt-2'>
            <div className='row'>
                {serviceData.map((item, index)=> (
                    <div className='service__item' style={{backgroundColor: `${item.bg}`}} key={index}>
                        <span>
                            <i>{getIconByName(item.icon)}</i>
                        </span>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div>
                    </div>
                    )
                )}
            </div>
        </div>
    </section>
  )
}

export default Services

const getIconByName = (iconName) => {
    switch (iconName) {
      case 'local_shipping':
        return <LocalShippingOutlinedIcon />;
      case 'doller':
        return <AttachMoneyOutlinedIcon />;
      case 'secure':
        return <ShieldOutlinedIcon />
    case 'return':
        return <AssignmentReturnOutlinedIcon />
      default:
        return null;
    }
};