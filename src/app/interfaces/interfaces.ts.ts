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

interface Detail{
    cover:string,
    title:string,
    author:string,
    publisher:string,
    publisher_date:string,
    pages:string,
    language:string,
    content:string,
    categories:categoriesOrTags[],
    tags:categoriesOrTags[]
}

interface categoriesOrTags{
    category_id:number,
    name:String,
    nicename:String
}

export { Category, Book, Pagination, Detail }
