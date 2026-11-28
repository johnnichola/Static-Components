export default function Card(data)
{
    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "column", width: "fit-content", padding: 20, backgroundColor: "white", borderRadius: 10}}>
                <h2 style={{color: "#0F172A", margin: "0 0 4px 0"}}>{data.title}</h2>
                <h3 style={{color: "#4F46E5", margin: "0 0 12px 0", fontSize: "0.95rem"}}>{data.subtitle}</h3>
                <p style={{color: "#475569", margin: "0 0 16px 0", lineHeight: 1.5}}>{data.content}</p>
                <img 
                    src={data.image} alt="Card Image"
                    style={{width: 300, height: "auto", borderRadius: 6}}></img>
            </div>
        </div>
    )
}