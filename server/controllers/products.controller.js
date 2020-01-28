import { Product } from '../database/models';

// Adds new product
export const createProduct = async (req, res, next) => {
    try {
        const {
            name,
            description,
            price,
            category,
            color,
        } = req.body;

        // Set default image if error on image upload
        let image;
        if(req.file) {
            image = req.file.url;
        } else {
            image = 'https://placeimg.com/640/480/people?t=1580135902349';
        }

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


// Fetch all products, returning minimal information on each
export const fetchAllProducts = async (req, res, next) => {
    try {
        const products = await Product.findAll({
            attributes: [
                'id',
                'name',
                'price',
                'image',
            ],
            order: [['createdAt', 'DESC']]
        });
      
        return res.status(200).json({
            data: { products }
        });

    } catch (error) { next(error); }
};


// Fetch a product and return full details
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


// Search db for product with the given Id and update it
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
      
        // Product.update returns an array of productS with given id
        // Index 0 is the count of all products with given id
        if (products[0] === 0) {
            return res.status(404).json({
                message: 'The product with the given Id was not found.'
            });
        }

        // Index 1 is the only product found, since IDs are unique
        const product = products[1][0].dataValues;
        return res.status(200).json({
            data: { product }
        });

    } catch (error) { next(error); }
};


// Deletes a product from the database
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

// Fetch products by category
export const fetchProductsByCategory = async (req, res, next) => {
    try {
        const category = req.params.category;

        const products = await Product.findAll({
            where: { category },
            attributes: [
                'id',
                'name',
                'price',
                'image',
            ],
        });

        return res.status(200).json({
            data: { products }
        });

    } catch (error) { next(error); }
};
