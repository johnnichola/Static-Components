export default function Footer(data)
{
    return(
        <div style={{display: "flex", height: 50, flexDirection: "row", gap: 20, justifyContent: "center", alignItems: "center", backgroundColor: "grey", color: "white"}}>
            <p>{data.message}</p>
            <p>|</p>
            <p>Copyright © 2026 {data.websiteName}. All rights reserved.</p>
        </div>
    )
}