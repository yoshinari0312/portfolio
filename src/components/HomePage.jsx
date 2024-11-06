import { Box } from '@mui/material';
import { Header } from './Header/Header';
import { About } from './About/About';
import { Internship } from './Internship/Internship';
import { Works } from './Works/Works';
import { Skills } from './Skills/Skills';

export function HomePage() {
  return (
    <Box className="HomePage">
      <Header/>
      <About/>
      <Internship/>
      <Works/>
      <Skills/>
    </Box>
  );
}
