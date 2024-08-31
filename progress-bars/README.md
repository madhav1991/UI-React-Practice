https://www.greatfrontend.com/questions/user-interface/progress-bars

Mistakes

* To construct a rectagular box, border syntax
* Use setInterval pattern, similar to the interview way but split 2 seconds into 20*100 as 100 is width that is being incremented for every 20ms
* So identify what will vary and what will be fixed for given timeline
* CSS transition approach seems very easy

Possible solutions
* setInterval Solution: Regularly updates the width state, creating the animation.
* requestAnimationFrame Solution: Syncs animation with the browser's repaint cycle for smoother performance.

```

import { useState } from 'react';
import './App.css';

function ProgressBar() {
  const [width, setWidth] = useState(0);

  useState(() => {
    let start = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const newWidth = Math.min((progress / duration) * 100, 100);
      setWidth(newWidth);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, []);

  return (
    <div className="progress-bar">
      <div className="filled" style={{ width: `${width}%` }}></div>
    </div>
  );
}

export default function App() {
  const [bars, setBars] = useState([]);

  const addProgressBar = () => {
    setBars([...bars, <ProgressBar key={bars.length} />]);
  };

  return (
    <div>
      <button onClick={addProgressBar}>Add</button>
      {bars}
    </div>
  );
}

```


* CSS Animation Solution: Offloads the animation to CSS, making the JavaScript code simpler.
* Recursive setTimeout Solution: A recursive approach using setTimeout to manage the animation manually.
* Larger Increments with setTimeout Solution: Uses larger increments to achieve a similar effect with fewer updates.