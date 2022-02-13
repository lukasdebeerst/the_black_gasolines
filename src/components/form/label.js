const Label = ({className, forValue, content}) => {

  return (
    <label 
      htmlFor={forValue}
      className={`pb-2 lowercase font-title ${className}`}
    >
      {content}
    </label>
  )

}

export default Label;