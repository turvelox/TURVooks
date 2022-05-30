import React, { useState, useEffect } from 'react'
import ConUser from '../components/ConUser'

export default function ConReaders() {
    
  let readers = "";

  const [readerList, setReaderList] = useState([]);

  useEffect(() => {
    readers = JSON.parse(localStorage.getItem("users"));
    setReaderList(prevReaderList => prevReaderList.concat(readers.slice(0, 6)));
  }, []);

    return (
      <ul className="con-box p-5 md:flex md:flex-wrap">
        {
          readerList.map((readerItem, index) => 
            <li className='md:flex-initial' key={index}>
              <ConUser img={readerItem.userImg} userId={readerItem.userId} />
            </li>
          )
        }
      </ul>
    );
}

