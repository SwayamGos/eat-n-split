export default function Button ({children, onAdd}) {
    return <button className='button' onClick={onAdd}>{children}</button>;
}