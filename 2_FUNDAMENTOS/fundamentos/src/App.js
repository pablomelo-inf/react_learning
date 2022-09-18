import FirstComponent from './components/FirstComponent';

import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/Mycomponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
