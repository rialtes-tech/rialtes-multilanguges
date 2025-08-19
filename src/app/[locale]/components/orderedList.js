export default function OrderedList({ olClassName, arrName, liClassName }) {
    return (
        <>
            <ol className={olClassName}>
                {arrName.map((data, idx) => (
                    <li key={idx} className={liClassName ? liClassName : ""}>
                        {data}
                    </li>
                ))}
            </ol>
        </>
    )
} 