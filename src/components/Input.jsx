import { useState } from "react";

useState

const Input = ({label, type, placeholder, onChange}) => {
    
    return ( 
    <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-grey-darker">{label}:</label>
        <input className="w-full px-3 py-2 border rounded text-grey-darker" type={type}
        name={label}  onChange={(e) => onChange(e)} placeholder={placeholder} />
    </div> 
);
}
 
export default Input;