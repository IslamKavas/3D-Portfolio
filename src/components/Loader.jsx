import {HTML, useProgress} from '@react-three/drei'

const Loader = () => {
  const {progress} = useProgress();
  return (
  <HTML>
    <span className='canvas-load '></span>
    <p
      style={{
        fontSize: 14,
        color: '#f1f1f1',
        fontWeight: 800,
        marginTop: 40
      }}
    >

    </p>
    <p>{progress.toFixed(2)}%</p>
  </HTML>
  )
}

export default Loader