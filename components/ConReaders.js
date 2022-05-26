import React, { useState } from 'react'
import ConUser from '../components/ConUser'

export default function ConReaders() {
    
    return (
      <ul className="con-box p-5 md:flex md:flex-wrap">
        <li className='md:flex-initial'><ConUser userId={`heritage_boy`} /></li>
        <li className='md:flex-initial'><ConUser userId={`heritage_boy`} /></li>
        <li className='md:flex-initial'><ConUser userId={`heritage_boy`} /></li>
        <li className='md:flex-initial'><ConUser userId={`heritage_boy`} /></li>
        <li className='md:flex-initial'><ConUser userId={`heritage_boy`} /></li>
        <li className='md:flex-initial'><ConUser userId={`turvelox`} /></li>
      </ul>
    );
}

