import ProductModel from "../Models/Product.model.js"

export const getAllProducts = async(req,res)=>{
 try {
    const products =await ProductModel.find({}).select("-createdAt -updatedAt -__v");;
    if(products.length){
        return res.status(200).json({success:true,message:"Products Found",products:products})
    }
    return res.status(404).json({sucess:false,message:"Products not found"}) 
    
 } catch (error) {
    return res.status(500).json({sucess:false,message:error.message}) 
 }
}
export const getSingleProduct = async(req,res)=>{
try {
   const {productId}=req.body;
   const product=await ProductModel.findById(productId).select("-createdAt -updatedAt -__v");
   if(!productId){
    return res.status(404).json({success:false, message:"Product Id Not Found!"})
   }
if(product){
    return res.status(200).json({success:true,message:"Prodct Found !", product:product})
}
return res.status(404).json({success:false, message:"Product Not Found!"})
} catch (error) {
    return res.status(500).json({sucess:false,message:error.message}) 
}
}
export const addProduct=async(req,res)=>{
//    console.log('hi')
    try {
        const{name,price,image,category ,id}=req.body;
        
        if(!name || !price || !image || !category ||!id){
            return res.status(401).json({
                success:false,message:"please fill all fields"
            })}
            const product=new ProductModel({
                name,price,image,category,id
            })
            await product.save()
            return res.status(200).json({success:true,message:"Product added!"})
        
    } catch (error) {
       return res.status(500).json({sucess:false,message:error.message}) 
    }
}
// fillter,sorting,pagination
// export const fillterProdcuts =async(req,res)=>{
//    try {
//     const {skip,page=1,query,sort}=req.body;
//     const updatedQuery= { category:query}
// const name=sort.replace(/^-/,"");
// const order= sort[0]=="-"?"-":"";
//     const updatedSort={[name]:`${order}1`}
//     console.log(updatedQuery,)
//     const products= await ProductModel.find(updatedQuery).skip(skip*3).limit(page).sort(updatedSort)
//     // console.log(products,"Hiiiiiii")
//     return res.status(200).json({success:true,message:"Prodcts Found!",products})
//    } catch (error) {
//     return res.status(500).json({sucess:false,message:error.message}) 
//    } 
// }
export const fillterProdcuts=async(req,res)=>{
    try {
        const {query}=req.body;
        if(!query){
            return res.status(401).json({success:false,message:"Please Provide the category"})
        }
        const updatedQuery={category:query};;
        const products=await ProductModel.find(updatedQuery)
        if(products.length ===0)return res.status(404).json({success:false,message:"No products found!"})
        return res.status(200).json({success:true,message:"Products Found",products})
    } catch (error) {
        return res.status(500).json({sucess:false,message:error.message}) 
    }
}
export const paginatedProducts = async(req,res)=>{
    try {
        const{skip,page=10}=req.body;
        if(!skip) return res.status(401).json({success:false,message:"Please provide Pagination"})
        const products=await ProductModel.find({}).skip(skip).limit(page);
    if(products.length===0)return res.status(404).json({success:false,message:"No products found!"})
        return res.status(200).json({success:true,message:"Products Found",products})
        
    } catch (error) {
        return res.status(500).json({sucess:false,message:error.message}) 
    }
}

export const sortedProducts=async(req,res)=>{
    try {
        const {sort}=req.body;
        if(!sort)return res.status(401).json({success:false,message:"Please provide the sorting order"})
        
        const updatedSort={price:sort}
        const products=await ProductModel.find({}).sort(updatedSort)
        if(products.length===0)return res.status(404).json({success:false,message:"No products found!"})
        return res.status(200).json({success:true,message:"Products Found!",products})
    } catch (error) {
        return res.status(500).json({sucess:false,message:error.message}) 
    }
}