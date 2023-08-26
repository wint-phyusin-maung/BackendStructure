import './App.css';

//. Keys help React identify which items have changed, been added, or been removed in a list

function App()
{
  const users = [
    {name: 'Khin', age: 21},
    {name: 'Thein', age: 25},
    {name: 'Jessica', age: 35}
  ]

  return (
    <div className='app'>
      {users.map((user,key) => {
        return <h1 key={key}>{user.name}{user.age}</h1>
      })}
    </div>
  )
}

export default App;