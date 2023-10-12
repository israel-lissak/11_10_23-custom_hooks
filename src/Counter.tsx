import useButtonClickCounter from './ButtonClickCounter';

function Counter() {

  const { count: blueClicks, increment: incrementBlue } = useButtonClickCounter();
  const { count: greenClicks, increment: incrementGreen } = useButtonClickCounter();
  

  return (
    <div>
        <button style={{ backgroundColor: 'blue' }} onClick={incrementBlue}>
        Blue Button
        </button>
        <button style={{ backgroundColor: 'green' }} onClick={incrementGreen}>
        Green Button
        </button>
        <p>Blue Button Clicks: {blueClicks}</p>
        <p>Green Button Clicks: {greenClicks}</p>
    </div>
  )
}

export default Counter