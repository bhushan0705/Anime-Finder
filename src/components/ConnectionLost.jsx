

import React, { useEffect, useState } from 'react'

const ConnectionLost = () => {

    const [online , setOnline] = useState(true);

    useEffect(()=>{
        const updateOnlineStatus=()=>{
            setOnline(navigator.onLine)
        }
        window.addEventListener("online",updateOnlineStatus)
        window.removeEventListener("offline",updateOnlineStatus);

        return ()=>{
            window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
        }

    },[])


  return (
    <div>
        {
            !online && (
                <div className="fixed top-0 left-0 right-0 bg-red-500 text-white text-center p-3">
          <h3>Connection Lost! Please check your internet connection.</h3>
        </div>
            )
        }
    </div>
  )
}

export default ConnectionLost