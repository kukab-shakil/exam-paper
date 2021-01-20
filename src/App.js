import './App.css';
import QuestionLists from './component/questionList';
import Header from './component/header';
import { CssBaseline } from '@material-ui/core';



function App() {
  
  return (
    <div >
      
      <CssBaseline/>
       <Header/>
      <QuestionLists/>
     
    </div>
  );
}

export default App;
