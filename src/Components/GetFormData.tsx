import {MouseEvent,useState,ChangeEvent} from "react";

const GetFormData = () => {
    const [name, setName] = useState("");
    const [fatherName, setFatherName] = useState("");

  function handleSubmit(event:MouseEvent<HTMLInputElement>) {
    event.preventDefault();
    console.log(`Name: ${name} Father Name: ${fatherName}`);
  }

  function handleChange(event:ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    setFatherName(event.target.value);
  }
 
  return (
    <div>
      {/* get data from form */}
      <form action="">
        <input type="text" name="name" onChange={handleChange} />
        <input type="text" name="fathername" onChange={handleChange} />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default GetFormData;
