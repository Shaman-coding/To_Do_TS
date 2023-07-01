import React from 'react'

function sum (a: number, b: number) {

}
export default function Cards() {

  return (
    <div>
        <div className="headers">
            <p className="title">Купить в магазине: </p>            
        </div>
        <ul className='ulWraps'>
            <li> <input type="checkbox" name="bayProduts" id="" /> Молоко </li>
            <li> <input type="checkbox" name="bayProduts" id="" /> Чай</li>
            <li> <input type="checkbox" name="bayProduts" id="" /> Курицу</li>
            <li> <input type="checkbox" name="bayProduts" id="" /> Яйца</li>
            <li> <input type="checkbox" name="bayProduts" id="" /> Сок</li>
        </ul>
    </div>
  )
}
