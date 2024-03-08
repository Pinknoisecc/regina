const menu = [
    {
        category: 'entradas',
        items: [
            { name: 'Con pica y cilantro', price: '$9.500', image: '../img/Fectuccine a la crema.png', description: 'Ceviche de pescado, sopa de ají amarillo y camote frito.' },
            { name: 'Tuna Verde', price: '$8.900', image: '../img/Fectuccine a la crema.png', description: 'Tártaro de atún y espárragos sobre crema de palta y cilantro acompañado de chips de papas.' },
            { name: 'Rotolino de berenjenas', price: '$7.900', image: '../img/Fectuccine a la crema.png', description: 'Láminas de berenjenas a la parrilla rellenas de ricotta casera y espinacas sobre salsa de tomates casera, rúcula, parmesano y aceite de oliva.' },
            { name: 'Ensalada de la casa', price: '$7.900', image: '../img/Fectuccine a la crema.png', description: 'Mix de hojas verdes, vegetales asados, papa, tomate y pepino. También puedes acompañarla de camarones al pil pil, pollo crocante o quesos con valor adicional.' }       
        ]
    },
    {
        category: 'compartir',
        items: [
            { name: 'Selección de empanadas', price: '$15.500', image: '../img/Fectuccine a la crema.png', description: 'Pulpo, ostiones, camarones, pino carne y quesos. Servidas con pebre de ají verde (10 unidades).' },
            { name: 'Pilpil y a la parmesana', price: '$15.500', image: '../img/Fectuccine a la crema.png', description: 'Camarones ecuatorianos cocinados con ajo, cacho de cabra, vino blanco y perejil. Ostiones a la parmesana con tostadas y salsas (Pil pil y verde).' },
            { name: 'Opción niños', price: '$6.800', image: '../img/Fectuccine a la crema.png', description: 'Solo quesos (6 unidades).' }
        ]
    },
    {
        category: 'carnes',
        items: [
            { name: 'Pastel de choclo (Solo fin de semana)', price: '$11.900', image: '../img/Fectuccine a la crema.png', description: 'acompañado de ensalada de tomate a la chilena.' },
            { name: 'Conejo escabechado', price: '$12.500', image: '../img/Fectuccine a la crema.png', description: 'servido con gratín de papas y espinacas.' },
            { name: 'Costillar de cerdo', price: '$12.500', image: '../img/Fectuccine a la crema.png', description: 'acompañado de puré de papas.' },
            { name: 'Reineta a la lata', price: '$12.900', image: '../img/Fectuccine a la crema.png', description: 'Acompañada de papas fritas.' },
            { name: 'Merluza austral', price: '$13.500', image: '../img/Fectuccine a la crema.png', description: 'en salsa mediterránea acompañado de spaghettis al azafrán.' },
            { name: 'Reineta a la plancha', price: '$12.900', image: '../img/Fectuccine a la crema.png', description: 'acompañada de vegetales asados.' },
            { name: 'El sureño', price: '$12.600', image: '../img/Fectuccine a la crema.png', description: 'Salmón en caldillo marino con costillas, chorizo ahumado y papas.' },
            { name: 'Braseado de osobuco', price: '$14.600', image: '../img/Fectuccine a la crema.png', description: 'Acompañado de gnocchis 4 quesos (Mantecoso, mozzarella, azul y parmesano).' },
            { name: 'Lomo a lo pobre', price: '$14.900', image: '../img/Fectuccine a la crema.png', description: 'Clásico lomo vetado acompañado de huevos fritos, papas fritas y cebolla caramelizada.' },
        ]
    },
    {
        category: 'pastas',
        items: [
            { name: 'Sorrentino de mozzarella quemada', price: '$9.500', image: '../img/Fectuccine a la crema.png', description: 'Tocino crocante, y tomates secos en salvia.' },
            { name: 'Canelones de setas y berenjenas ahumadas', price: '$9.800', image: '../img/Fectuccine a la crema.png', description: 'En salsa de tomates casera, bechamel y parmesano.' },
            { name: 'Lasagna clásica', price: '$9.800', image: '../img/Fectuccine a la crema.png', description: 'Boloñesa, queso y crema.' },
            { name: 'Lasagneta de vegetales a la parrilla', price: '$9.800', image: '../img/Fectuccine a la crema.png', description: 'Bechamel de puerros, mozzarella...' },
            { name: 'Tortelli de ricotta casera', price: '$9.800', image: '../img/Fectuccine a la crema.png', description: 'Zapallo camote asado, espinacas, y nueces tostadas in salsa...' },
            { name: 'Gnocchis de papas', price: '$9.800', image: '../img/Fectuccine a la crema.png', description: '...' },
            { name: 'Tortelloni de conejo', price: '$10.100', image: '../img/Fectuccine a la crema.png', description: '...' },
            { name: 'Pozuelo de jaiba', price: '$10.500', image: '../img/Fectuccine a la crema.png', description: 'En mantequilla de crustáceos y apio. (Camarones, machas y albaca)' },
            { name: 'Spaguetti', price: '$10.500', image: '../img/Fectuccine a la crema.png', description: 'Spaguetti...' },
            { name: 'Fetuccine al huevo', price: '$10.600', image: '../img/Fectuccine a la crema.png', description: 'Con camarones a la crema y espárragos y tomates confitados.' },
        ]
    },
    {
        category: 'postres',
        items: [
            { name: 'Panqueque celestino', price: '$3.500', image: '../img/Fectuccine a la crema.png', description: 'Con helado de vainilla.' },
            { name: 'Cheesecake de frutos rojos', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Base de galleta, capa de queso crema endulzado y cobertura de frutos rojos.' },
            { name: 'Torta de chocolate', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Delicioso bizcocho de chocolate, manjar y capa de chocolate crujiente.' },
            { name: 'Pannacotta de chirimoya con sopa de naranjas', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Crema de leche fresca y gelatina con sabor a chirimoya natural acompañada de sopa de naranjas frescas.' },
            { name: 'Suspiro limeño', price: '$4.500', image: '../img/Fectuccine a la crema.png', description: 'Capa de manjar blanco y merengue italiano espolvoreado con canela.' },
        ]
    },
    {
        category: 'cocteleria',
        items: [
            { name: 'Pisco sour', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Pisco, jugo de limón y azúcar.' },
            { name: 'Chardonnay Sour', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Vino blanco chardonnay, jugo de limón y azúcar.' },
            { name: 'Amaretto Sour', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Licor de almendras, jugo de limón y azúcar.' },
            { name: 'Vaina', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Vino dulce, coñac, yema de huevo y azúcar.' },
            { name: 'Espumante', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Copa de espumante brut, demi sec y rosé.' },
            { name: 'Mojito Cubano', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Ron blanco, limón, menta, azúcar y agua mineral.' },
            { name: 'Mojito Espumante', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Ron de manzana, limón, menta, agua mineral y espumante.' },
            { name: 'Aperol Spitz', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Licor Aperol, naranjas frescas y espumante.' },
            { name: 'Ramazotti Spitz', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Licor de Ramazotti, naranjas frescas y espumante.' },
            { name: 'Negroni', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Gin, Campari, vermut rojo, hielo y rodajas de naranja.' },
            { name: 'Tequila Margarita', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Tequila, Triple Sec y jugo de limón.' },
            { name: 'Clavo Oxidado', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Whisky, Drambuie y clavo de olor.' },
            { name: 'Campari', price: '$4.000', image: '../img/Fectuccine a la crema.png', description: 'Con jugo de...' },
        ]
    },
];