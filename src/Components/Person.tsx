type personsProps = {
  personsList: {
    name: string;
    surnName: string;
  }[];
  name?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Person(props: personsProps) {
  return (
    <div>
      <h1>
        {props.personsList?.map((ele) => {
          return ele.name;
        })}
      </h1>
      <button onClick={props.handleClick}>click me</button>
    </div>
  );
}

export default Person;
