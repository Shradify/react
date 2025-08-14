import React,{useId} from 'react'

function Select({
    options = [],
    label,
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label
            className='inline-block mb-1 pl-1'
            htmlFor={id}>
            {/* actuallno label but bts me id rkhne ke liye use kring */}
            </label>}
            <select 
            {...props}
            id = {id}
            ref = {ref}
            className={`${className}w-full px-3 py-2 rounded-3xl bg-white text-black outline-none focus:bg-gray-200 duration-200 border border-gray-100`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)
