import '../Styles/Counter.scss'

const Counter = ({overall, stickersCollected}) => {
  return (
    <div className="counter">
        <h3>Overall: {overall}</h3>
        <h3>Collected: {stickersCollected}</h3>
        <h3>Missing: {overall - stickersCollected}</h3>
    </div>
  )
}

export default Counter