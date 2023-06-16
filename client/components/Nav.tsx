interface Props {
  handleClick: () => {path: string}
}

function Nav(props: Props) {



  return (
    <>
      <div onClick={() => {props.handleClick('form')}}>Form</div>
      <div onClick={() => {props.handleClick('game')}}>Game</div>
    </>
  )
}

export default Nav