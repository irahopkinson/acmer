// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { Route, Routes } from 'react-router-dom';
import { Hero } from '@acmer/ui';

export function App() {
  return (
    <>
      <h1>Home</h1>
      <Hero
        title="Welcome to our Demo"
        subtitle="Build something amazing today"
        cta="Get Started"
      />
    </>
  );
}

export default App;
