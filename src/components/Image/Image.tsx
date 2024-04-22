export interface IImage {
  url: string
}

export const Image = ({url}: IImage) => {
  return (
    <>
        <div className="card__img">
            <img className="img" src={url} alt="cap"/>
        </div>
    </>
  )
}
