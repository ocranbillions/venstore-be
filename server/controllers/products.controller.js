import { Product } from '../database/models';

export const createProduct = async (req, res, next) => {
    try {
        const {
            name,
            description,
            price,
            category,
            color,
        } = req.body;

        // const image = req.file.url;
        const image = "image_url";

        const product = await Product.create({
            name,
            description,
            price,
            category,
            image,
            color
        });

        return res.status(201).json({
            data: { product }
        });

    } catch (error) { next(error); }
};


export const fetchAllProducts = async (req, res, next) => {
    try {
        const products = await Product.findAll({
            attributes: [
                'id',
                'name',
                'price',
            ],
            order: [['createdAt', 'DESC']]
        });
      
        return res.status(200).json({
            data: { products }
        });

    } catch (error) { next(error); }
};



export const fetchSingleProduct = async (req, res, next) => {
    try {
        const id = req.params.id;

        const product = await Product.findOne({
            where: { id },
            attributes: [
                'id',
                'name',
                'description',
                'price',
                'category',
                'image',
                'color'
            ],
        });
      
        if (!product) {
            return res.status(404).json({
                message: 'The product with the given Id was not found.'
            });
        }

        return res.status(200).json({
            data: { product }
        });

    } catch (error) { next(error); }
};



export const updateProduct = async (req, res, next) => {
    try {
        const {
            name,
            description,
            price,
            category,
            image,
            color,
        } = req.body;
        const id = req.params.id;

        const products = await Product.update(
            { 
                name,
                description,
                price,
                category,
                image,
                color,
            },
            {
                returning: true,
                where: { id }
            }
        );
      
        if (products[0] === 0) {
            return res.status(404).json({
                message: 'The product with the given Id was not found.'
            });
        }

        const product = products[1][0].dataValues;
        return res.status(200).json({
            data: { product }
        });

    } catch (error) { next(error); }
};



export const deleteProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await Product.destroy({ where: { id } });
        if (!product) {
            return res.status(404).json({
                message: 'The product with the given Id was not found.'
            });
        }
        
        return res.status(200).json({
            message: 'The product was deleted successfully'
        });

    } catch (error) { next(error); }
};

