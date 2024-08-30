import {useState,useEffect} from 'react';


export default function ProgressBar(){
    /* Using css transition approach
    // const [animate, setAnimate] = useState(false);
    // useEffect(() => {
    //     setAnimate(true);
    //   }, []);
    */
    const [width,setWidth] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setWidth((prevWidth) => {
            if (prevWidth >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prevWidth + 1;
          });
        }, 20); // 100 increments over 2000ms
    
        return () => clearInterval(interval);
      }, []);

    // Using css transition approach
    //   <div className={`filled ${animate ? 'animate' : ''}`}></div>

    return (
            <div className="progress-bar">
            <div className="filled" style={{ width: `${width}%` }}></div> 
              
            </div>
       
    )
}

