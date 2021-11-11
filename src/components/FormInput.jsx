import './style.css';

const FormInput = ({ title, value, type, onChange }) => {
    return (

        <div className='FormGroupInput'>
            <label className='FromGroupLabel' htmlFor={title}>{title}</label>
            <input
                type={type}
                value={value}
                onChange={onChange} />
        </div>

    )
}

export default FormInput;