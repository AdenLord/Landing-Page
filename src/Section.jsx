import Articles from "./Articles";

const articles =[
    {title: "Earth", text: "Earth is our home plante", tags : "#earth"},
    {title: "Mars", text: "Mars is red", tags : "#moon"},
    {title: "Moon", text: " Moon is good", tags : "#mars"}
]

const Section = () => {
    return ( 
        <section className="section">
            {articles.map((index) => 
                (<Articles 
                    header = {index.title}
                    body = {index.text}
                    footer = {index.tags}
                />)
                )
            }
        </section>
     );
}
 
export default Section;
