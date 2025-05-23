const Navbar = () => {

    let mark = 80;
  return (
    <div>
        <h1>Navbar</h1>

        {/* inline if else  */}
        
        {
            mark >= 80 ? 

            <h1>good</h1>
            :
            <h1>bad</h1>
        }
    </div>
  )
}

export default Navbar