const GroupField = (props) => {
   return ( 
      <div className="groupField">
         <label htmlFor={props.name}></label>
         <input type="text" placeholder={props.placeholder} />
      </div>
   );
}
 
export default GroupField;