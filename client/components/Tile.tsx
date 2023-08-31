interface Props {
  outcome: {id: number, outcome: string}
  handleClick: (outcome: string) => void
}

function Tile(props: Props) {
  

  return (
    <>
      <div id="outcomeList" onClick={() => {props.handleClick(props.outcome.outcome)}}>
        <p >{props.outcome.id}</p>
      </div>
    </>
  )
}

export default Tile