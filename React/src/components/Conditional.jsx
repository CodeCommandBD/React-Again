


const Conditional = () => {

    let status =  false;

  return (
    <div>
        {/* immedialtely invoked function */}
        
        <h1>page</h1>
        {(()=>{
           if(status){
            return <button>Login</button>
           } 
           else{
            return <button>Logout</button>
           }
        })()}
    </div>
  )
} 

export default Conditional