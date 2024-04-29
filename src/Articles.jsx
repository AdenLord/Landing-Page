const Articles = ({header,body,footer}) => {

  return (
        <article  className="article">
            <div className="art-header"><h2>{header}</h2></div>
            <div className="art-body"><p>{body}</p></div>
            <div className="art-footer"><p>{footer}</p></div>
        </article>
     );
}
 
export default Articles;