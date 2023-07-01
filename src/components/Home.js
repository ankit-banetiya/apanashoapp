import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import Card from "../comman/card/Card"
import { addCart } from "../reduxdata/cartSlice"
function Home() {
  var total = 0;
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products")
      .then(res => {
        console.log(res.data)
        setCategories(res.data)
        setBrands(res.data)

        axios.get("/api/brand/list")
          .then(res => {
            // setBrands(res.data)

            axios.get("/api/product/list")
              .then(res => {
                setProducts(res.data)
                console.log(res.data)
              })
          })
      })
  }, [])


  const add = (event) => {
    event.preventDefault()
    var name = event.target.getAttribute('data-name')
    var price = event.target.getAttribute('data-price')
    var image = event.target.getAttribute('data-image')
    var id = event.target.getAttribute('data-id')

    var obj = {
      name,
      price,
      image,
      id

    }
    console.log(obj)
    dispatch(addCart(obj))

  }
  console.log("categories", categories)
  return <>
    <br /><br /><br /><br /><br />
    <section class="products_section">

      <div className="row">
        <div className="col-lg-2 col-md-2">

          <div>
            <h2 className="alert alert-danger">Category
              &nbsp;
              {categories.length == 0 ? <i class="spinner-grow text-secondary"></i> : ""}
            </h2>
            <hr />
            {/* <Card obData={categories}/> */}
            {categories.map((ob, index) => {
              return <>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={ob.category.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text">{ob.category.name}</p>
                  </div>
                </div>
              </>
            })}
            <div>
              <Card categories={categories} />
            </div>
          </div>
          <hr />
          <div>
            <h2 className="alert alert-danger">
              Brand
              &nbsp;
              {brands.length == 0 ? <i class="spinner-grow text-secondary"></i> : ""}
            </h2>
            <hr />
            {brands.map((ob, index) => {
              console.log("brands", ob)
              return <>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="checkbox" /> &nbsp;
                  <b>{ob.title}</b>
                  <b>{ob.price}</b>
                  <img src={ob.images[0]} height="50px" width="50px" />
                </div>
              </>
            })}
          </div>
        </div>
        <div className="col-lg-10 col-md-10">
          <div class="heading_container">
            <h2>
              New Products In Store
            </h2>
            <p>
              Featured Product Just Arrived
            </p>
          </div>
          <div class="container layout_padding">

            <div class="product_container">
              {products.map(ob => {
                return <>
                  <a href="">
                    <div class="product_box">
                      <div class="product_img-box">
                        <img src={"data:image/png;base64," + ob.prod_image} alt="" />
                        {/* <form>
                    <div type="button" onClick={()=> addToBuket(products)}>
                      Add to Cart
                    </div>
                    </form> */}
                        <span onClick={add}
                          data-name={ob.prod_name}
                          data-price={ob.prod_price}
                          data-image={ob.prod_image}
                          data-id={ob._id}>
                          Add to Cart
                        </span>
                      </div>
                      <div class="product_detail-box">
                        <span>
                          Rs. {ob.prod_price}
                        </span>
                        <h4 className="text-danger">
                          {ob.prod_name},

                        </h4>
                      </div>
                    </div>
                  </a>
                </>
              })}

            </div>
          </div>

        </div>
      </div>


    </section>

  </>
}

export default Home








