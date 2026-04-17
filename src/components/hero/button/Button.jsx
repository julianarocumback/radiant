export default function Button({texto, style, children}) {
    return (
        <button className={style} onClick={texto}>
            {texto}{children}
        </button>
    )
}