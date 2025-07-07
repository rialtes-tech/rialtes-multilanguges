export default function unorderedList({ ulClassName, arrName, liClassName }) {
    return (
        <>
            <ul className={ulClassName}>
                {arrName.map((data, idx) => (
                    <li key={idx} className={liClassName}>
                        {data}
                    </li>
                ))}
            </ul>
        </>
    )
}