export const projects = [
    {
        name: "Portfolio",
        date: "13JAN2020",
        links: ["https://ctlachance.com", "https://github.com/CTLaChance/Portfolio"],
        summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        media_folder: "/assets/projects/portfolio",
        media: require.context('../../public/assets/projects/portfolio', false, /\.jpg|png/).keys(),
        card: "/assets/projects/portfolio/card.png",
    },
    {
        name: "ARE Website",
        date: "24DEC2016",
        links: ["https://areducators.com", "https://github.com/CTLaChance/AREWebsite"],
        summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        media_folder: "/assets/projects/arewebsite",
        media: require.context('../../public/assets/projects/arewebsite', false, /\.jpg|png/).keys(),
        card: "/assets/projects/arewebsite/card.png"
    },
    {
        name: "Pharaoh Sun",
        date: "01MAR2018",
        links: ["https://playags.com/portfolio/pharaoh-sun/"],
        summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        media_folder: "/assets/projects/pharaohsun",
        media: require.context('../../public/assets/projects/pharaohsun', false, /\.jpg|png/).keys(),
        card: "/assets/projects/pharaohsun/card.jpg"
    },
    {
        name: "Wild Tiki",
        date: "01OCT2018",
        links: ["https://playags.com/portfolio/wild-tiki/"],
        summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        media_folder: "/assets/projects/wildtiki",
        media: require.context('../../public/assets/projects/wildtiki', false, /\.jpg|png/).keys(),
        card: "/assets/projects/wildtiki/card.jpg"
    }
];