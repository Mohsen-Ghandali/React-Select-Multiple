import Person from "../Persons/Person";

const App = () => {
const selectCourse=(e)=>{
const selectedMultiple=[...e.target.selectedOptions].map(data=>data.value); //.map((data)=>{return data.value});
console.log(selectedMultiple);
}
  return (
    <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2">
      <Person selectCourse={selectCourse}/>
    </div>
  );
};

export default App;
