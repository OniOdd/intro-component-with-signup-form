import style from './InputField.module.css';

type InputFieldProps = {
  className: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputField(props: InputFieldProps) {
  const { className, type, name, value, placeholder, onChange } = props;
  const classes = `${className} ${style.input}`;

  return (
    <input className={classes} type={type} name={name} value={value}
           placeholder={placeholder} onChange={onChange} />
  );
}

export default InputField;
