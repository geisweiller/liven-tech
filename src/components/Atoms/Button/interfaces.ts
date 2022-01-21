export interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  backgroundColor:
    | 'turquoise'
    | 'yellow'
    | 'red'
    | 'green'
    | 'orange'
    | 'clear'
    | 'grey'
    | 'lightGrey'
    | 'white'
    | 'black'
    | 'transparent';
  fontColor:
    | 'turquoise'
    | 'yellow'
    | 'red'
    | 'green'
    | 'orange'
    | 'clear'
    | 'grey'
    | 'lightGrey'
    | 'white'
    | 'black';
}
