const Input = ({className, type, id, name, placeholder, onChange}) => {

  return (
    <input 
      className={`p-2 text-white bg-gray-700 outline-0  ${className}`}
      type={type} 
      id={id} 
      name={name} 
      placeholder={placeholder} 
      onChange={onChange}
      required
    />
  )


}

export default Input;