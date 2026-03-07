export interface ColorConfig {
    name: string;
    image: string; // URL or path like "/images/ayudia-taro.jpg"
}

export interface ModelGroup {
    label: string; // e.g. "Dewasa", "Anak Perempuan", "Anak Laki-laki"
    models: string[];
    sizes: string[];
}

export interface SarimbitSeries {
    name: string;
    colors: ColorConfig[];
    groups: ModelGroup[];
}

export const SARIMBIT_SERIES: SarimbitSeries[] = [
    {
        name: "Ayudia",
        colors: [
            { name: "Taro", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO001/250828080854-BDO001.jpeg" },
            { name: "Copper", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO001/250828080902-BDO001.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Beldia",
        colors: [
            { name: "Deep Blue", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO010/260120080145-BDO010.jpeg" },
            { name: "Dusty Rose", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO010/260120080211-BDO010.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Cladia",
        colors: [
            { name: "Grey", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO101/251030104750-BDO101.jpeg" },
            { name: "Cream", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO013/251030104941-BDO013.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Dandia",
        colors: [
            { name: "Broken White", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO063/251011102916-BDO063.jpeg" },
            { name: "Black", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BBJ009/251011101116-BBJ009.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Eldia",
        colors: [
            { name: "Lavender Mist", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO032/251003102830-BDO032.jpeg" },
            { name: "Light Olive", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO032/251003103552-BDO032.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Fardia",
        colors: [
            { name: "Beige", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO021/260108040505-BDO021.jpeg" },
            { name: "Dusty Lavender", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO021/260108040520-BDO021.jpeg" },
            { name: "Ice Blue", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO068/260108040736-BDO068.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Ghadia",
        colors: [
            { name: "Cinnamon", image: "http://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO025/251129115538-BDO025.jpeg" },
            { name: "Green Tint", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO025/251129115544-BDO025.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Hildia",
        colors: [
            { name: "Khaki", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO040/251008093324-BDO040.jpeg" },
            { name: "Pale Mauve", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO039/250930022156-BDO039.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Izadia",
        colors: [
            { name: "Mauve", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO027/251205074355-BDO027.jpeg" },
            { name: "Lavender", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO027/251205074329-BDO027.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Jodia",
        colors: [
            { name: "Plum", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO073/251121105313-BDO073.jpeg" },
            { name: "Grey Lilac", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO073/251121105322-BDO073.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Kaldia",
        colors: [
            { name: "Blue", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO047/251125090426-BDO047.jpeg" },
            { name: "Purple", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO047/251125090432-BDO047.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Lydia",
        colors: [
            { name: "Teal", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO045/251226110344-BDO045.jpeg" },
            { name: "Maroon", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO072/260128024051-BDO072.jpeg" },
            { name: "Brown", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO045/251226110414-BDO045.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Maudia",
        colors: [
            { name: "Lilac", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO042/251203014533-BDO042.jpeg" },
            { name: "Light Olive", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO042/251203014636-BDO042.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Nindia",
        colors: [
            { name: "Black", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO059/251231095443-BDO059.jpeg" },
            { name: "Air Blue", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO059/251231095408-BDO059.jpeg" },
            { name: "Burgundy", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO059/251231095458-BDO059.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Osadia",
        colors: [
            { name: "Blue", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BAE194/260220090334-BAE194.jpeg" },
            { name: "Maroon", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BAE194/260220090331-BAE194.jpeg" },
            { name: "Mocca", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BAE194/260220090328-BAE194.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Prisdia",
        colors: [
            { name: "Bronze", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BAA927/260211080833-BAA927.jpeg" },
            { name: "Burgundy", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BAA927/260211080811-BAA927.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Ashaku",
        colors: [
            { name: "Lilac", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO051/260108025059-BDO051.jpeg" },
            { name: "Dusty Mauve", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO051/260108025031-BDO051-DUSTY%20MAUVE.jpeg" },
            { name: "Vanilla", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO054/260128030943-BDO054.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Bhinarku",
        colors: [
            { name: "Blue", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO078/251215102132-BDO078.jpeg" },
            { name: "Vanilla", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO078/251215102150-BDO078.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Chitaku",
        colors: [
            { name: "Mint", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO086/260129015326-BDO086.jpeg" },
            { name: "Rose Gold", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO085/260211085607-BDO085.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Dhyaku",
        colors: [
            { name: "Broken White", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO097/260204015558-BDO097.jpeg" },
            { name: "Violet", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO097/260204015553-BDO097.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
    {
        name: "Fanaku",
        colors: [
            { name: "Dusty Blue", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO089/260228111651-BDO089.jpeg" },
            { name: "Dusty Brown", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO093/260228111941-BDO093.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
            },
            {
                label: "Anak Perempuan",
                models: ["Gamis Anak"],
                sizes: ["P0", "P0+", "P1", "P3", "P5", "P7", "P9", "P11"],
            },
            {
                label: "Anak Laki-laki",
                models: ["Koko Anak"],
                sizes: ["L0", "L0+", "L2", "L4", "L6", "L8", "L10", "L12"],
            },
        ],
    },
];
