import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className='App'>
       <Job salary={90000} position="Senior SDE" company="Amazon"/>
       <Job salary={12000} position="Junior SDE"
       company="Google"/>
       <Job salary={10000} position="Project Manager"
       company="Netflix"/>
    </div>
  )
}


const Job = (props) => {
  return (
    <div className='job'>
      {props.salary}
      {props.position}
      {props.company}
    </div>
  )
}
export default App;
