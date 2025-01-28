import {createContext, useState} from 'react';
import {IntlProvider} from 'react-intl';
import English from '../assets/translations/en.json'
import Bengali from '../assets/translations/bn.json'
export const Context = createContext()
const local = navigator.language;

let lang;
if (local==="bn") {
   lang = Bengali;
} else {
  lang = English;
}
const Wrapper = (props) => {
   const [locale, setLocale] = useState(local);
   const [messages, setMessages] = useState(lang);
   function selectLanguage(e) {
       const newLocale = e.target.value;
       setLocale(newLocale);
       if (newLocale === 'bn') {
           setMessages(Bengali);
       } else {
          setMessages(English)
       }
   }
   return (
       <Context.Provider value = {{locale, selectLanguage}}>
           <IntlProvider messages={messages} locale={locale}>
               {props.children}
           </IntlProvider>
       </Context.Provider>
   );
}
export default Wrapper;