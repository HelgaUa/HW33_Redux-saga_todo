export function Button(props) {
    const { children, className, type, onClick, disabled } = props;
    return (
        <button className={`btn ${className}`} type={type} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}