const Header = (props) =>{
   console.log(props);
   return(
    <>
    <h1> Your name is {props.name}</h1>
    <h1> Your city is {props.city}</h1>
    <h1> Your country is {props.country}</h1>
    </>
   );

}
export default Header;