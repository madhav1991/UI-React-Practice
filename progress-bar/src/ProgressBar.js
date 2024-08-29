export default function ProgressBar({completed}) {
    const MIN=0;
    const MAX= 100;
    const limitValue = Math.min(Math.max(completed, MIN), MAX);
    return (
    <div className="progress">
        <div className="filled" style={{width: `${limitValue}%`}}>
            {limitValue}%
        </div>
    </div>
    )
  }
  