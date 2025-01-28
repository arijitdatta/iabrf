import './App.css'
import { FormattedMessage } from 'react-intl';
import {Context} from "./components/Wrapper";
import { useContext } from 'react';

function App() {
  const context = useContext(Context);

  return (
    <div className="App">
      <header className="App-header">
        <select value={context.locale} onChange={context.selectLanguage}>
        <option value= 'en'>English</option>
        <option value= 'bn'>Bengali</option>
         
        
      
       </select>
      <FormattedMessage
         id = "app.welcome"
         defaultMessage="Edit the files and save to reload"
       />
      </header>
    </div>
  );
}

export default App
