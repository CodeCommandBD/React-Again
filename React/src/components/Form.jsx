

const Form = () => {

    const postData = (e) =>{
        e.preventDefault();
        alert('he')
    }

  return (
    <div>
        <form onSubmit={postData}>
            <input type="text" name="" id="" />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Form