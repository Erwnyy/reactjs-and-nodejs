import Data from "../models/Product.js"
import path from "path";
import fs from "fs";

export const getProducts = async(req, res, next) => {
    try {
        const getAll = await Data.find();
        res.status(200).json(getAll)
    } catch (error) {
        next(error)
    }
}

export const getProductsById = async(req, res, next) => {
    try {
        const getById = await Data.findById(req.params.id)
        res.status(200).json(getById)
    } catch (error) {
        next(error)
    }
}

export const saveProducts = async(req, res, next) => {
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Data.create({name: name, img: fileName, url: url});
            res.status(201).json({msg: "Product Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const updateProducts = async(req, res, next) => {
    const product = await Data.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/images/${product.img}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    try {
        await Data.update({name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Product Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProducts = async(req, res, next) => {
    const product = await Data.findById(req.params.id);
    if(!product) return res.status(404).json({msg: "No Data Found"});
    console.log(product)

    try {
        const filepath = `./public/images/${product.img}`;
        fs.unlinkSync(filepath);
        await Data.findByIdAndRemove(req.params.id);
        res.status(200).json({msg: "Product Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }

    // try {
    //     const filepath = `./public/images/${product.image}`;
    //     fs.unlinkSync(filepath);
    //     const deleteProduct = await Data.remove(req.params.id);
    //     res.status(200).json({msg: "Data sukses dihapus"}, deleteProduct)
    // } catch (error) {
    //     console.log(error.message);
    // }
}
