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

  return (
    <div className={`${style.wrapper} ${className} ${style.warning}`}>
      <input className={`${style.wrapper__input} ${style.warning}`} type={type} name={name} value={value}
            placeholder={placeholder} onChange={onChange} />
      <span className={`${style.wrapper__iconWarning} ${style.warning}`}></span>
      <p className={`${style.wrapper__warningMessage} ${style.warning}`}>First Name cannot be empty</p>
    </div>
  );
}

export default InputField;
