const fs = require('fs');
const path = require('path');
const util = require('util');
const products = require('../../db/products/all-products.json');

const productFolder = path.resolve(__dirname, '../../../', 'db/products');

const findProducts = (items) => {
  return products.filter(product =>{
    return items.find(id => product.id === items.id);
  })
}




/*находим товары в <all-products.json>
создаем в папке с юзером папку orders
создаем в orders новый json с тем что пришло нам из запроса
отправляем json с готовым заказом
 {
  "status": "success", 
  "order": {
    "id": <orderId>,
    "user": <userId>, 
    "products": [<productId1>, <productId2>, <productId2>]
    "deliveryType": "delivery"
    "deliveryAdress": "<deliveryAdressText>"
   }
 }
если товара нет отправляем json с {'status': 'failed', 'order': null}
*/
const createOrder = (req, res) => {
  const order = req.body;
  console.log(order);cccc

 /* var bodyStr = '';
  req.on("data",function(chunk){
      bodyStr += chunk.toString();
  });
  req.on("end",function(){
      res.send(bodyStr);
  });*/

};


 module.exports = createOrder;