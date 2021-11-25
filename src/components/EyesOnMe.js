// Code EyesOnMe Component Here
function EyesOnMe() {
    function lookAtMe(event) {
        console.log(event);
    }
    return (
        <div>
    <button onBlur={(event) => {
        console.log('Hey! Eyes on me!')
    }}

    onFocus={(event) => {
        console.log('Good!')
    }}
   
    >Eyes on me</button>

        </div>
    )
}











export default EyesOnMe;