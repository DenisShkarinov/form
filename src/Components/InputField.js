

const InputField = (props) => {
   return ( 
      <div className="inputField">
         <label htmlFor={props.name}></label>
         <input 
            type={props.type} 
            placeholder={props.placeholder} 
            min={props.min} max={props.max} 
            required={props.required ? true : false} />
      </div>
   );
}
 
export default InputField;