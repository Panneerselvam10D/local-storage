
const Model = (props)=>{
  const displayTer = ()=>{
    alert( props.displayModel? 'hello' :'bye')
  }
    return(
        <>
             {displayTer}   
        </>
    )
}
export default Model;