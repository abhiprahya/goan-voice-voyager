
export type PlaceType = {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  category: string;
  location: string;
  translations: Record<string, {
    name: string;
    description: string;
    shortDescription: string;
  }>;
};

export const places: PlaceType[] = [
  {
    id: "1",
    name: "Calangute Beach",
    description: "Known as the 'Queen of Beaches', Calangute is Goa's largest and most popular beach. With its golden sands and vibrant atmosphere, it offers water sports, beachfront restaurants, and lively nightlife.",
    shortDescription: "Goa's largest and most popular beach with golden sands.",
    imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop",
    category: "beaches",
    location: "North Goa",
    translations: {
      fr: {
        name: "Plage de Calangute",
        description: "Connue comme la «Reine des plages», Calangute est la plus grande et la plus populaire plage de Goa. Avec son sable doré et son atmosphère vibrante, elle offre des sports nautiques, des restaurants en bord de mer et une vie nocturne animée.",
        shortDescription: "La plus grande et populaire plage de Goa avec sable doré."
      },
      es: {
        name: "Playa Calangute",
        description: "Conocida como la 'Reina de las Playas', Calangute es la playa más grande y popular de Goa. Con sus arenas doradas y ambiente vibrante, ofrece deportes acuáticos, restaurantes frente al mar y vida nocturna animada.",
        shortDescription: "La playa más grande y popular de Goa con arenas doradas."
      },
      ru: {
        name: "Пляж Калангут",
        description: "Известный как 'Королева пляжей', Калангут - самый большой и популярный пляж Гоа. С золотистым песком и яркой атмосферой, он предлагает водные виды спорта, рестораны на пляже и оживленную ночную жизнь.",
        shortDescription: "Самый большой и популярный пляж Гоа с золотистым песком."
      }
    }
  },
  {
    id: "2",
    name: "Anjuna Flea Market",
    description: "Every Wednesday, Anjuna Beach transforms into a vibrant marketplace. Explore handcrafted jewelry, bohemian clothing, spices, and souvenirs from across India.",
    shortDescription: "Weekly market with handcrafts, clothing, and souvenirs.",
    imageUrl: "https://images.unsplash.com/photo-1612958668841-359fae674510?q=80&w=2070&auto=format&fit=crop",
    category: "markets",
    location: "North Goa",
    translations: {
      fr: {
        name: "Marché aux puces d'Anjuna",
        description: "Chaque mercredi, la plage d'Anjuna se transforme en un marché animé. Explorez des bijoux artisanaux, des vêtements bohèmes, des épices et des souvenirs de toute l'Inde.",
        shortDescription: "Marché hebdomadaire avec artisanat, vêtements et souvenirs."
      },
      es: {
        name: "Mercado de Anjuna",
        description: "Cada miércoles, la playa de Anjuna se transforma en un vibrante mercado. Explore joyas artesanales, ropa bohemia, especias y recuerdos de toda la India.",
        shortDescription: "Mercado semanal con artesanías, ropa y recuerdos."
      },
      ru: {
        name: "Блошиный рынок Анжуны",
        description: "Каждую среду пляж Анжуна превращается в яркий рынок. Исследуйте изделия ручной работы, богемную одежду, специи и сувениры со всей Индии.",
        shortDescription: "Еженедельный рынок с изделиями ручной работы, одеждой и сувенирами."
      }
    }
  },
  {
    id: "3",
    name: "Basilica of Bom Jesus",
    description: "A UNESCO World Heritage site, this 16th-century baroque church houses the mortal remains of St. Francis Xavier and exemplifies Goa's rich Portuguese colonial heritage.",
    shortDescription: "UNESCO site housing the remains of St. Francis Xavier.",
    imageUrl: "https://images.unsplash.com/photo-1629460124583-1ef78e8eb89a?q=80&w=2070&auto=format&fit=crop",
    category: "culture",
    location: "Old Goa",
    translations: {
      fr: {
        name: "Basilique de Bom Jesus",
        description: "Site du patrimoine mondial de l'UNESCO, cette église baroque du XVIe siècle abrite les restes mortels de Saint François-Xavier et illustre le riche héritage colonial portugais de Goa.",
        shortDescription: "Site UNESCO abritant les restes de Saint François-Xavier."
      },
      es: {
        name: "Basílica de Bom Jesús",
        description: "Un sitio del Patrimonio Mundial de la UNESCO, esta iglesia barroca del siglo XVI alberga los restos mortales de San Francisco Javier y ejemplifica el rico patrimonio colonial portugués de Goa.",
        shortDescription: "Sitio UNESCO que alberga los restos de San Francisco Javier."
      },
      ru: {
        name: "Базилика Бом-Хесус",
        description: "Объект Всемирного наследия ЮНЕСКО, эта церковь в стиле барокко XVI века хранит останки св. Франциска Ксаверия и является примером богатого португальского колониального наследия Гоа.",
        shortDescription: "Объект ЮНЕСКО, где хранятся останки св. Франциска Ксаверия."
      }
    }
  },
  {
    id: "4",
    name: "Dudhsagar Falls",
    description: "One of India's tallest waterfalls, cascading from 310 meters. Located in the Bhagwan Mahavir Wildlife Sanctuary, it offers breathtaking views and swimming opportunities in its natural pool.",
    shortDescription: "Spectacular 310-meter tall waterfall in a wildlife sanctuary.",
    imageUrl: "https://images.unsplash.com/photo-1618291738706-72923531f63c?q=80&w=987&auto=format&fit=crop",
    category: "nature",
    location: "Eastern Goa",
    translations: {
      fr: {
        name: "Chutes de Dudhsagar",
        description: "L'une des plus hautes chutes d'eau de l'Inde, cascadant de 310 mètres. Située dans le sanctuaire de faune de Bhagwan Mahavir, elle offre des vues à couper le souffle et des possibilités de baignade dans sa piscine naturelle.",
        shortDescription: "Chute d'eau spectaculaire de 310 mètres dans une réserve naturelle."
      },
      es: {
        name: "Cataratas Dudhsagar",
        description: "Una de las cascadas más altas de la India, que cae desde 310 metros. Ubicada en el Santuario de Vida Silvestre Bhagwan Mahavir, ofrece vistas impresionantes y oportunidades para nadar en su piscina natural.",
        shortDescription: "Espectacular cascada de 310 metros en un santuario de vida silvestre."
      },
      ru: {
        name: "Водопад Дудхсагар",
        description: "Один из самых высоких водопадов Индии, падающий с высоты 310 метров. Расположенный в заповеднике дикой природы Бхагван Махавир, он предлагает захватывающие виды и возможность купания в естественном бассейне.",
        shortDescription: "Впечатляющий водопад высотой 310 метров в заповеднике дикой природы."
      }
    }
  },
  {
    id: "5",
    name: "Fontainhas",
    description: "Goa's Latin Quarter features narrow streets lined with colorful Portuguese-style houses. This charming neighborhood showcases Indo-Portuguese architecture and culture.",
    shortDescription: "Charming Latin Quarter with colorful Portuguese architecture.",
    imageUrl: "https://images.unsplash.com/photo-1564509027875-28cdb3840829?q=80&w=2070&auto=format&fit=crop",
    category: "culture",
    location: "Panjim",
    translations: {
      fr: {
        name: "Fontainhas",
        description: "Le Quartier Latin de Goa présente des rues étroites bordées de maisons colorées de style portugais. Ce quartier charmant met en valeur l'architecture et la culture indo-portugaises.",
        shortDescription: "Charmant quartier latin avec architecture portugaise colorée."
      },
      es: {
        name: "Fontainhas",
        description: "El Barrio Latino de Goa presenta calles estrechas bordeadas de casas de estilo portugués coloridas. Este encantador vecindario muestra la arquitectura y cultura indo-portuguesa.",
        shortDescription: "Encantador Barrio Latino con colorida arquitectura portuguesa."
      },
      ru: {
        name: "Фонтейнас",
        description: "Латинский квартал Гоа представляет собой узкие улочки с разноцветными домами в португальском стиле. Этот очаровательный район демонстрирует индо-португальскую архитектуру и культуру.",
        shortDescription: "Очаровательный Латинский квартал с красочной португальской архитектурой."
      }
    }
  },
  {
    id: "6",
    name: "Aguada Fort",
    description: "Built in 1612, this well-preserved Portuguese fort offers panoramic views of the Arabian Sea. Its lighthouse, the oldest in Asia, was a crucial landmark for sailors.",
    shortDescription: "17th century Portuguese fort with panoramic sea views.",
    imageUrl: "https://images.unsplash.com/photo-1625128605762-92249ebafce4?q=80&w=2071&auto=format&fit=crop",
    category: "history",
    location: "Candolim",
    translations: {
      fr: {
        name: "Fort Aguada",
        description: "Construit en 1612, ce fort portugais bien conservé offre des vues panoramiques sur la mer d'Arabie. Son phare, le plus ancien d'Asie, était un point de repère crucial pour les marins.",
        shortDescription: "Fort portugais du 17e siècle avec vues panoramiques sur la mer."
      },
      es: {
        name: "Fuerte Aguada",
        description: "Construido en 1612, este fuerte portugués bien conservado ofrece vistas panorámicas del Mar Arábigo. Su faro, el más antiguo de Asia, fue un punto de referencia crucial para los marineros.",
        shortDescription: "Fuerte portugués del siglo XVII con vistas panorámicas al mar."
      },
      ru: {
        name: "Форт Агуада",
        description: "Построенный в 1612 году, этот хорошо сохранившийся португальский форт предлагает панорамные виды на Аравийское море. Его маяк, самый старый в Азии, был важным ориентиром для моряков.",
        shortDescription: "Португальский форт 17 века с панорамным видом на море."
      }
    }
  }
];

export const categories = [
  { id: "beaches", name: "Beaches", icon: "waves" },
  { id: "culture", name: "Culture", icon: "landmark" },
  { id: "food", name: "Food", icon: "utensils" },
  { id: "history", name: "History", icon: "scroll" },
  { id: "markets", name: "Markets", icon: "shopping-bag" },
  { id: "nature", name: "Nature", icon: "palmtree" }
];
