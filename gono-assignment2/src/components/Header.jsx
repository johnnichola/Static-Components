export default function Header(data)
{
    return(
        <div style={{display: "flex", justifyContent: "start", flexDirection: "column", backgroundColor: "#333"}}>
            <h1>{data.title}</h1>
            <p>{data.message}</p>
        </div>
    );
}