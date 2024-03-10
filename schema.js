 const mongoose =require('mongoose');

 const productSchema = new mongoose.Schema({
    name: {
      type: varchar
    },
    desc:{
        type: text
    },
    SKU:{
        type: varchar
    },
    category_id:{
        type: int
    },
    inventory_id:{
        type: int
    },
    price:{
        required:[true, 'price must be provided'],
        type: decimal
    },
    discount_id:{
        type: int
    },
    created_at:{
        type: timestamp
    },
    modified_at:{
        type: timestamp
    },
    deleted_at:{
        type: timestamp
    }
 })

 module.exports = mongoose.model('Product', productSchema);