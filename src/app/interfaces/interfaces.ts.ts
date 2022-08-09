interface Category{
    category_id: Number,
    name: String,
    nicename: String
}

interface Book{
    ID: String,
    title: String,
    author: String,
    cover: String,
    pages: String
}
interface Pagination{
    num_items:String
}

export { Category, Book, Pagination }
