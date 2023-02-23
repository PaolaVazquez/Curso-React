import "./ProductCard.css"
export const ProductCard = ({title, price =0, isRed}) => {
    //console.log(props)
    //let {title, price} = props //desestructuración de objetos
  return (
    <div>
        <h1 className={ isRed ? "red" : "blue"}>{title}</h1>
        <h1>{price}</h1>

    </div>
  )
}
