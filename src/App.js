import './App.css';

//. Keys help React identify which items have changed, been added, or been removed in a list

function App()
{
  const names = ['Khin','Moe','Kyaw','Thein','Maung'];

  return (
    <div className='app'>
        {names.map((name,key) => {
            return <h1 key={key}>{name}</h1>
        })}
    </div>
  )
}

export default App;