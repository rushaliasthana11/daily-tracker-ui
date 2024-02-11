import { Button, Stack } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <Stack spacing={2} direction={'row'}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
}

export default App;
