import React, { useState } from 'react'
import ConUser from '../components/ConUser'

export default function ConReaders() {
    
    return (
      <div className="con-box p-5">
        <ConUser userId={`heritage_boy`} />
        <ConUser userId={`turvelox`} />
        <ConUser userId={`helltowin`} />
        <ConUser userId={`ririana`} />
        <ConUser userId={`cos_me_towk`} />
      </div>
    );
}

