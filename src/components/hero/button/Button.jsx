export default function Button({texto, icone, style, children}) {
    return (
        <button className={style} onClick={texto}>
            {texto}{icone}{children}
        </button>
    )
}