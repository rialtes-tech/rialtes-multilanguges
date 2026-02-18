export default function OrderedList({ ulClassName, arrName, liClassName }) {
    return (
        <>
            <ol className={ulClassName}>
                {arrName.map((data, idx) => (
                    <li key={idx} className={liClassName} dangerouslySetInnerHTML={{ __html: data }} />
                ))}
            </ol>
        </>
    )
}