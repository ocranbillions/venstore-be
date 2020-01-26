import { check, validationResult } from 'express-validator';

export const validateProduct = [
    check('name')
        .not()
        .isEmpty({ ignore_whitespace: true })
        .withMessage('Product name is required'),
    check('description')
        .not()
        .isEmpty({ ignore_whitespace: true })
        .withMessage('Please provide a description'),
    check('price')
        .not()
        .isEmpty({ ignore_whitespace: true })
        .withMessage('Please input an amount for the price'),
    check('category')
        .not()
        .isEmpty({ ignore_whitespace: true })
        .withMessage('Select a category'),
    check('color')
        .not()
        .isEmpty({ ignore_whitespace: true })
        .withMessage('Provide the color of the product'),
    (req, res, next) => {
        const errors = validationResult(req);
        const errorMessages = [];
        if (!errors.isEmpty()) {
            errors.array({ onlyFirstError: true }).forEach((error) => {
                errorMessages.push(error.msg)
            });
            return res.status(400).json({
                message: errorMessages
            });
        }
        return next();
    }
];