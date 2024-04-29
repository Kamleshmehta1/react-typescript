import Person from './Components/Person';
import Heading from './HOC/Heading';
import Oscar from './HOC/Oscar';

function App() {
  const personsList = [{ name: 'k', surnName: 'm' }];

  function handleClick() {}

  return (
    <div>
      <Person
        personsList={personsList}
        name="kamlesh"
        handleClick={handleClick}
      />
      <Oscar>
        <Heading>Welcome to the page</Heading>
      </Oscar>
    </div>
  );
}

export default App;
