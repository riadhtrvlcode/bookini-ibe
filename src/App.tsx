import React, { useState } from 'react'

import { Button } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
    </div>
  )
}

export default App
