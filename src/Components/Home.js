import React from 'react'

function Home() {
  return (
    <div className=" container">
      <div className=" mb-3">
  <label for="exampleFormControlInput1" className="form-label">Product Name</label>
  <input type="text" className="form-control" id="name" placeholder="Enter Product Name"/>
</div>
<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Product Brand</label>
  <input type="text" className="form-control" id="name" placeholder="Enter Product Brand"/>
</div>
<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Product Price</label>
  <input type="number" className="form-control" id="name" placeholder="Enter Product Price"/>
</div>
<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Product Quentity</label>
  <input type="number" className="form-control" id="name" placeholder="Enter Product Quentity"/>
</div>
<div className="mb-3">

  <button> Submit</button>
</div>

    </div>
  )
}

export default Home