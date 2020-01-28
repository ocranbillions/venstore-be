'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Products', 
            [
                {
                    name: 'Laptop fan',
                    description: 'Cool off your laptop with this amazing fan',
                    price: 19.9,
                    category: 'computing',
                    color: 'black',
                    image: 'http://res.cloudinary.com/dvlc1vacp/image/upload/v1580208306/venstore/jqt7nzq8j2o5nqxb6fxa.jpg'
                },
                {
                    name: '1TB Hard-Drive',
                    description: 'Built for 24/7, always-on, high-definition security systems. With a supported workload rate of up to 180 TB/yr and support for up to 64 cameras, WD Purple drives are optimized for surveillance systems.',
                    price: 20.0,
                    category: 'computing',
                    color: 'black',
                    image: 'http://res.cloudinary.com/dvlc1vacp/image/upload/v1580208577/venstore/ed8vupipxzusugtjdsmk.jpg'
                },
                {
                    name: 'Tecno Spark 4 Air',
                    description: 'SPARK 4 Air adopts 6.1”Dot Notch Screen design, the full view display and higher resolution offer you better visual experience.',
                    price: 80,
                    category: 'computing',
                    color: 'blue',
                    image: 'http://res.cloudinary.com/dvlc1vacp/image/upload/v1580209027/venstore/e1xcyurb4xaflgwfkxkj.jpg'
                },
                {
                    name: 'Casual Loafers',
                    description: 'Whether formally dressed or in casuals, style should never be compromised.',
                    price: 20.0,
                    category: 'fashion',
                    color: 'brown',
                    image: 'http://res.cloudinary.com/dvlc1vacp/image/upload/v1580209326/venstore/wxm9vhbevpezjezb48vk.jpg'
                },
                {
                    name: 'Black T-shirt',
                    description: 'A black T-shirt is a basic piece that every wardrobe should have. Revamp your style with this quality, crew-neck 100% cotton black T-shirt',
                    price: 5.0,
                    category: 'fashion',
                    color: 'black',
                    image: 'http://res.cloudinary.com/dvlc1vacp/image/upload/v1580209536/venstore/gwo29sgydcxtel0pw1io.jpg'
                },
                {
                    name: 'Executive Chair',
                    description: 'Sturdy, dependable and Economically priced, Zodiac office chairs are Specially designed for demanding working conditions',
                    price: 100.0,
                    category: 'home-office',
                    color: 'brown',
                    image: 'http://res.cloudinary.com/dvlc1vacp/image/upload/v1580209722/venstore/qcxqc1p3fx0ycwjbhrtf.jpg'
                },
                {
                    name: 'Polystar Double-Door Fridge',
                    description: 'Polystar refrigerators come in a nice variety of different sizes and designs and are a perfect blend of aesthetics and performance',
                    price: 200.0,
                    category: 'home-office',
                    color: 'grey',
                    image: 'http://res.cloudinary.com/dvlc1vacp/image/upload/v1580209927/venstore/x9nvhykpu1mappd5htrc.jpg'
                },
                {
                    name: 'Beard Oil',
                    description: 'Beard Oil is a 100% natural organic oil that Grows, Softens and Stops Itching of your beard. It is made from Vitamin E oil, Zingiber officinale root oil, Juniperus virginiana oil, Rosmarinus officinalis leaf oil, Almond Oil, Chamomile Oil and Jojoba oil.',
                    price: 5.0,
                    category: 'health-beauty',
                    color: 'black',
                    image: 'http://res.cloudinary.com/dvlc1vacp/image/upload/v1580210439/venstore/rf9u0b4fqnade52rnrfu.jpg'
                },
                
            ],
             {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Products', null, {});
    }
};
