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
                sizes: ["XS", "S", "M", "L", "XL", "XXL"],
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
                sizes: ["XS", "S", "M", "L", "XL", "XXL"],
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
            { name: "Grey", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO010/260120080145-BDO010.jpeg" },
            { name: "Cream", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO010/260120080211-BDO010.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL"],
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
            { name: "Broken White", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO010/260120080145-BDO010.jpeg" },
            { name: "Black", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO010/260120080211-BDO010.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL"],
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
            { name: "Beige", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO010/260120080145-BDO010.jpeg" },
            { name: "Light Olive", image: "https://nibras-web.sgp1.digitaloceanspaces.com/gudang-online-nibras-web/products/BDO010/260120080211-BDO010.jpeg" },
        ],
        groups: [
            {
                label: "Dewasa",
                models: ["Gamis", "Koko"],
                sizes: ["XS", "S", "M", "L", "XL", "XXL"],
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
