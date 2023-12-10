
import './App.css';
import Card from './componets/card';

function App() {
  let myarr=[1,2,3,5]
  const obj={
    'username':"Vaibhav",
    age:21

    //<Card channel="vaibhav" arr={myarr} someobj={obj} />

  }
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl '>vaibhav</h1>
    <Card username='vaibhav' btntext='check it'/>    
    <Card username="sam"/>

    </>
  );
}

export default App;
