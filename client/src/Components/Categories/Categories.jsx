import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
          <div className="row">
            <img src="../../../public/img/Products/roos.png" alt="" />
            <button>
              <Link className="link" to="./products/1">Sale</Link>
            </button>
          </div>
          <div className="row">
            <img src="../../../public/img/Products/roos.png" alt="" />
            <button>
              <Link className="link" to="./products/1">Woman</Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <img src="../../../public/img/Products/roos.png" alt="" />
            <button>
              <Link className="link" to="./products/1">Men</Link>
            </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                <img src="../../../public/img/Products/roos.png" alt="" />
                <button>
                  <Link className="link" to="./products/1">Sale</Link>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <img src="../../../public/img/Products/roos.png" alt="" />
                <button>
                  <Link className="link" to="./products/1">Sale</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <img src="../../../public/img/Products/roos.png" alt="" />
            <button>
              <Link className="link" to="./products/1">Sale</Link>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Categories