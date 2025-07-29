import puppy from "../../assets/puppy.png"

export default function PageDNE() {
    return (
        <div style={{margin: "auto", padding: "5rem"}}>
            <h2>Uh Oh! Seems like this page doesn't exist...</h2>
            <p>Here's a puppy instead :)</p>
            <img src={puppy} alt="A cute puppy" style={{height: "auto", maxWidth: "50%", borderRadius: 10}}/>
        </div>
    )
}