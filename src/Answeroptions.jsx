function Answeroptions({option,isSelected,onSelect}){
  return(
    <button
    onClick={ ()=>onSelect(option)}
    className={isSelected ? 'selected' : ''}
    >
      {option}
    </button>   
  )
}
export default Answeroptions;