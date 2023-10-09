import './App.css'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Layout from './Layout';

function App() {

  return (
    <MantineProvider>
      <Layout />
    </MantineProvider>
  )
}

export default App
