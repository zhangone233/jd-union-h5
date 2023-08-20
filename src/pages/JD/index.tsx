import { useState } from 'react';
import styles from './index.module.scss';

console.log(styles, 'styles');


function App() {
  const [count] = useState(0);
  console.log(count);
  
  return (
    <div className={styles.container}>container</div>
  );
}

export default App;
