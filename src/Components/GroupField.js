import InputField from "./InputField";

const GroupField = () => {
   return ( 
      <>
         <div className="groupField">
            <InputField type="text" placeholder="Your name" min="2" max="15" required="true" />
            <InputField type="text" placeholder="Your family" min="3" max="25" required="true" />
            <InputField type="text" placeholder="Your patronymic" min="3" max="25" />
         </div>
         <div className="groupField">
            <InputField type="date" min="1940-01-01" max="2003-12-31" required="true"></InputField>
            <InputField type="tel" />
         </div>
      </>
      
   );
}
 
export default GroupField;