import useButtonClickCounter from './ButtonClickCounter';

function Mouse() {
  const { count: mouseEnterCount, increment: incrementMouseEnter } = useButtonClickCounter();

  return (
    <div
      style={{ border: '3px solid gray', padding: '10px', backgroundColor: 'lightgray', borderRadius: '5px'}}
      onMouseEnter={incrementMouseEnter}
    >
      <p>Mouse Enter Count: {mouseEnterCount}</p>
    </div>  )
}

export default Mouse