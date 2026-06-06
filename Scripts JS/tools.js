"use strict";

export let tools = [
    // Herramientas electricas
    {
        id: 1,
        title: "Taladro inalámbrico",
        description: "Ideal para perforar madera, metal y concreto.",
        price: 85,
        imgUrl: '../Recursos/Imagenes/Taladro_inalambrico.png',
        category: 'Herramientas electricas'
    },
    {
        id: 2,
        title: "Sierra circular",
        description: "Perfecta para cortes rápidos y precisos.",
        price: 120,
        imgUrl: '../Recursos/Imagenes/Sierra_circular.png',
        category: 'Herramientas electricas'
    },
    {
        id: 3,
        title: "Lijadora orbital",
        description: "Excelente para acabados suaves en madera.",
        price: 60,
        imgUrl: '../Recursos/Imagenes/Lijadora_orbital.png',
        category: 'Herramientas electricas'
    },
    {
        id: 4,
        title: "Amoladora angular",
        description: "Útil para cortar y pulir diferentes materiales.",
        price: 75,
        imgUrl: '../Recursos/Imagenes/Amoladora_angular.png',
        category: 'Herramientas electricas'
    },
    {
        id: 5,
        title: "Martillo demoledor",
        description: "Diseñado para trabajos pesados de demolición.",
        price: 210,
        imgUrl: '../Recursos/Imagenes/Martillo_demoledor.png',
        category: 'Herramientas electricas'
    },
    {
        id: 6,
        title: "Compresor de aire",
        description: "Ideal para herramientas neumáticas y pintura.",
        price: 180,
        imgUrl: '../Recursos/Imagenes/Compresor_de_aire.png',
        category: 'Herramientas electricas'
    },
    {
        id: 7,
        title: "Pistola de calor",
        description: "Perfecta para remover pintura y moldear plástico.",
        price: 40,
        imgUrl: '../Recursos/Imagenes/Pistola_de_calor.png',
        category: 'Herramientas electricas'
    },
    {
        id: 8,
        title: "Router eléctrico",
        description: "Herramienta precisa para trabajos en madera.",
        price: 95,
        imgUrl: '../Recursos/Imagenes/Router_electrico.png',
        category: 'Herramientas electricas'
    },
    {
        id: 9,
        title: "Soldador eléctrico",
        description: "Ideal para unir piezas metálicas.",
        price: 110,
        imgUrl: '../Recursos/Imagenes/Soldador_electrico.png',
        category: 'Herramientas electricas'
    },

    // Herramientas manuales
    {
        id: 10,
        title: "Martillo",
        description: "Herramienta básica para clavar y retirar clavos.",
        price: 15,
        imgUrl: '../Recursos/Imagenes/Martillo.png',
        category: 'Herramientas manuales'
    },
    {
        id: 11,
        title: "Destornillador",
        description: "Perfecto para ajustar tornillos fácilmente.",
        price: 8,
        imgUrl: '../Recursos/Imagenes/Destornillador.png',
        category: 'Herramientas manuales'
    },
    {
        id: 12,
        title: "Llave inglesa",
        description: "Ajustable para diferentes tamaños de tuercas.",
        price: 18,
        imgUrl: '../Recursos/Imagenes/Llave_inglesa.png',
        category: 'Herramientas manuales'
    },
    {
        id: 13,
        title: "Alicate",
        description: "Ideal para sujetar y cortar cables.",
        price: 12,
        imgUrl: '../Recursos/Imagenes/Alicate.png',
        category: 'Herramientas manuales'
    },
    {
        id: 14,
        title: "Cinta métrica",
        description: "Útil para medir con precisión.",
        price: 7,
        imgUrl: '../Recursos/Imagenes/Cinta_metrica.png',
        category: 'Herramientas manuales'
    },
    {
        id: 15,
        title: "Serrucho",
        description: "Perfecto para cortar madera manualmente.",
        price: 14,
        imgUrl: '../Recursos/Imagenes/Serrucho.png',
        category: 'Herramientas manuales'
    },
    {
        id: 16,
        title: "Nivel",
        description: "Ayuda a verificar superficies rectas.",
        price: 10,
        imgUrl: '../Recursos/Imagenes/Nivel.png',
        category: 'Herramientas manuales'
    },
    {
        id: 17,
        title: "Cincel",
        description: "Ideal para tallar y cortar materiales.",
        price: 9,
        imgUrl: '../Recursos/Imagenes/Cincel.png',
        category: 'Herramientas manuales'
    },
    {
        id: 18,
        title: "Llave de tubo",
        description: "Especial para trabajos de plomería.",
        price: 20,
        imgUrl: '../Recursos/Imagenes/Llave_de_tubo.png',
        category: 'Herramientas manuales'
    },

    // Pinturas y acabados
    {
        id: 19,
        title: "Pintura acrílica blanca",
        description: "Pintura resistente para interiores y exteriores.",
        price: 25,
        imgUrl: '../Recursos/Imagenes/Pintura_acrilica_blanca.png',
        category: 'Pinturas y acabados'
    },
    {
        id: 20,
        title: "Barniz brillante",
        description: "Protege y da brillo a la madera.",
        price: 18,
        imgUrl: '../Recursos/Imagenes/Barniz_brillante.png',
        category: 'Pinturas y acabados'
    },
    {
        id: 21,
        title: "Rodillo de pintura",
        description: "Ideal para pintar superficies grandes.",
        price: 9,
        imgUrl: '../Recursos/Imagenes/Rodillo_de_pintura.png',
        category: 'Pinturas y acabados'
    },
    {
        id: 22,
        title: "Brocha profesional",
        description: "Perfecta para acabados detallados.",
        price: 6,
        imgUrl: '../Recursos/Imagenes/Brocha_profesional.png',
        category: 'Pinturas y acabados'
    },
    {
        id: 23,
        title: "Sellador de paredes",
        description: "Prepara superficies antes de pintar.",
        price: 22,
        imgUrl: '../Recursos/Imagenes/Sellador_de_paredes.png',
        category: 'Pinturas y acabados'
    },
    {
        id: 24,
        title: "Esmalte azul",
        description: "Pintura durable para metal y madera.",
        price: 19,
        imgUrl: '../Recursos/Imagenes/Esmalte_azul.png',
        category: 'Pinturas y acabados'
    },
    {
        id: 25,
        title: "Thinner",
        description: "Ideal para diluir pinturas y limpiar herramientas.",
        price: 11,
        imgUrl: '../Recursos/Imagenes/Thinner.png',
        category: 'Pinturas y acabados'
    },
    {
        id: 26,
        title: "Espátula metálica",
        description: "Útil para aplicar masilla y remover pintura.",
        price: 5,
        imgUrl: '../Recursos/Imagenes/Espatula_metalica.png',
        category: 'Pinturas y acabados'
    },
    {
        id: 27,
        title: "Masilla para paredes",
        description: "Ayuda a reparar grietas y agujeros.",
        price: 13,
        imgUrl: '../Recursos/Imagenes/Masilla_para_paredes.png',
        category: 'Pinturas y acabados'
    },

    // Plomeria
    {
        id: 28,
        title: "Tubo PVC",
        description: "Ideal para instalaciones de agua.",
        price: 16,
        imgUrl: '../Recursos/Imagenes/Tubo_PVC.png',
        category: 'Plomeria'
    },
    {
        id: 29,
        title: "Llave de paso",
        description: "Controla el flujo de agua fácilmente.",
        price: 14,
        imgUrl: '../Recursos/Imagenes/Llave_de_paso.png',
        category: 'Plomeria'
    },
    {
        id: 30,
        title: "Grifo metálico",
        description: "Diseño resistente y moderno.",
        price: 35,
        imgUrl: '../Recursos/Imagenes/Grifo_metalico.png',
        category: 'Plomeria'
    },
    {
        id: 31,
        title: "Codo PVC",
        description: "Conector para cambios de dirección en tuberías.",
        price: 4,
        imgUrl: '../Recursos/Imagenes/Codo_PVC.png',
        category: 'Plomeria'
    },
    {
        id: 32,
        title: "Bomba de agua",
        description: "Ideal para sistemas hidráulicos domésticos.",
        price: 150,
        imgUrl: '../Recursos/Imagenes/Bomba_de_agua.png',
        category: 'Plomeria'
    },
    {
        id: 33,
        title: "Destapador de tuberías",
        description: "Ayuda a eliminar obstrucciones.",
        price: 12,
        imgUrl: '../Recursos/Imagenes/Destapador_de_tuberias.png',
        category: 'Plomeria'
    },
    {
        id: 34,
        title: "Manguera flexible",
        description: "Perfecta para conexiones de agua.",
        price: 10,
        imgUrl: '../Recursos/Imagenes/Manguera_flexible.png',
        category: 'Plomeria'
    },
    {
        id: 35,
        title: "Tanque de agua",
        description: "Almacena agua de manera segura.",
        price: 250,
        imgUrl: '../Recursos/Imagenes/Tanque_de_agua.png',
        category: 'Plomeria'
    },
    {
        id: 36,
        title: "Silicón sellador",
        description: "Ideal para evitar fugas.",
        price: 8,
        imgUrl: '../Recursos/Imagenes/Silicon_sellador.png',
        category: 'Plomeria'
    },

    // Electrico
    {
        id: 37,
        title: "Cable eléctrico",
        description: "Cable resistente para instalaciones eléctricas.",
        price: 20,
        imgUrl: '../Recursos/Imagenes/Cable_electrico.png',
        category: 'Electrico'
    },
    {
        id: 38,
        title: "Interruptor",
        description: "Controla el flujo eléctrico de forma segura.",
        price: 6,
        imgUrl: '../Recursos/Imagenes/Interruptor.png',
        category: 'Electrico'
    },
    {
        id: 39,
        title: "Tomacorriente",
        description: "Ideal para conexiones eléctricas domésticas.",
        price: 5,
        imgUrl: '../Recursos/Imagenes/Tomacorriente.png',
        category: 'Electrico'
    },
    {
        id: 40,
        title: "Bombillo LED",
        description: "Ahorra energía y ofrece gran iluminación.",
        price: 7,
        imgUrl: '../Recursos/Imagenes/Bombillo_LED.png',
        category: 'Electrico'
    },
    {
        id: 41,
        title: "Panel eléctrico",
        description: "Distribuye energía de manera segura.",
        price: 95,
        imgUrl: '../Recursos/Imagenes/Panel_electrico.png',
        category: 'Electrico'
    },
    {
        id: 42,
        title: "Breaker",
        description: "Protege contra sobrecargas eléctricas.",
        price: 18,
        imgUrl: '../Recursos/Imagenes/Breaker.png',
        category: 'Electrico'
    },
    {
        id: 43,
        title: "Extensión eléctrica",
        description: "Ideal para ampliar conexiones.",
        price: 15,
        imgUrl: '../Recursos/Imagenes/Extension_electrica.png',
        category: 'Electrico'
    },
    {
        id: 44,
        title: "Tester digital",
        description: "Herramienta para medir corriente y voltaje.",
        price: 28,
        imgUrl: '../Recursos/Imagenes/Tester_digital.png',
        category: 'Electrico'
    },
    {
        id: 45,
        title: "Cinta aislante",
        description: "Protege conexiones eléctricas.",
        price: 3,
        imgUrl: '../Recursos/Imagenes/Cinta_aislante.png',
        category: 'Electrico'
    },

    // Construccion
    {
        id: 46,
        title: "Cemento",
        description: "Material esencial para construcciones resistentes.",
        price: 12,
        imgUrl: '../Recursos/Imagenes/Cemento.png',
        category: 'Construccion'
    },
    {
        id: 47,
        title: "Bloque de concreto",
        description: "Ideal para levantar paredes.",
        price: 2,
        imgUrl: '../Recursos/Imagenes/Bloque_de_concreto.png',
        category: 'Construccion'
    },
    {
        id: 48,
        title: "Arena fina",
        description: "Perfecta para mezclas de construcción.",
        price: 9,
        imgUrl: '../Recursos/Imagenes/Arena_fina.png',
        category: 'Construccion'
    },
    {
        id: 49,
        title: "Varilla de acero",
        description: "Refuerza estructuras de concreto.",
        price: 14,
        imgUrl: '../Recursos/Imagenes/Varilla_de_acero.png',
        category: 'Construccion'
    },
    {
        id: 50,
        title: "Carretilla",
        description: "Facilita el transporte de materiales.",
        price: 55,
        imgUrl: '../Recursos/Imagenes/Carretilla.png',
        category: 'Construccion'
    },
    {
        id: 51,
        title: "Pala",
        description: "Ideal para mover tierra y mezcla.",
        price: 17,
        imgUrl: '../Recursos/Imagenes/Pala.png',
        category: 'Construccion'
    },
    {
        id: 52,
        title: "Mezcladora de cemento",
        description: "Mezcla materiales de construcción rápidamente.",
        price: 320,
        imgUrl: '../Recursos/Imagenes/Mezcladora_de_cemento.png',
        category: 'Construccion'
    },
    {
        id: 53,
        title: "Casco de seguridad",
        description: "Protección esencial en obras de construcción.",
        price: 11,
        imgUrl: '../Recursos/Imagenes/Casco_de_seguridad.png',
        category: 'Construccion'
    },
    {
        id: 54,
        title: "Escalera de aluminio",
        description: "Ligera y resistente para trabajos en altura.",
        price: 90,
        imgUrl: '../Recursos/Imagenes/Escalera_de_aluminio.png',
        category: 'Construccion'
    }
];