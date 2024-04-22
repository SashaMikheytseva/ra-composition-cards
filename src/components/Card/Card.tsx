export interface ICard {
    children?: React.ReactNode,
    title: string,
    content: string, 
    btnText: string,
    url?: string
}

export const Card = ({children, title, content, btnText}: ICard) => {
  return (
    <div className="card" style={{width: '18rem'}}>
        {children}
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
            <a href="#" className="btn btn-primary">{
            btnText}</a>
        </div>
    </div>
  )
}
