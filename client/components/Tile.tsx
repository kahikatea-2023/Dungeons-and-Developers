interface Props {
  outcome: {id: number, outcome: string}
  handleClick: (id : number) => void
}

function Tile(props: Props) {
  

  return (
    <>
      <div className="tile" onClick={() => {props.handleClick}}>
        <p >{props.id}</p>
      </div>
    </>
  )
}

export default Tile