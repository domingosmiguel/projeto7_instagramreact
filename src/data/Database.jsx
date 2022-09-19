const postsData = [
    {
        profileImgSrc: "./images/IMG_20220502_023813_962.jpg",
        profileImgAlt: "owner-pic",
        user: "migueldspido",
        postType: "image",
        postSrc: "./images/foto1.PNG",
        postAlt: "post",
        likeCount: "101.523",
        likes: [
            {
                userImgSrc: "./images/anitta.PNG",
                username: "anitta",
            },
            {
                userImgSrc: "./images/cristiano.PNG",
                username: "cristiano",
            },
            {
                userImgSrc: "./images/travisscott.PNG",
                username: "travisscott",
            },
        ],
        commentCount: 945,
        comments: [
            { username: "britneyspears", userComment: "womanizer 😍", like: true },
            { username: "neymarjr", userComment: "voa mlk", like: true },
            { username: "dualipa", userComment: "call me when u get to NY 😘", like: true },
        ],
        timer: "5 HORAS ATRÁS",
        like: false,
        save: false,
    },
    {
        profileImgSrc: "./images/britneyspears.PNG",
        profileImgAlt: "owner-pic",
        user: "britneyspears",
        postType: "image",
        postSrc: "./images/gato-telefone 1.png",
        postAlt: "post",
        likeCount: "152.985",
        likes: [
            {
                userImgSrc: "./images/arianagrande.PNG",
                username: "arianagrande",
            },
            {
                userImgSrc: "./images/dojacat.PNG",
                username: "dojacat",
            },
        ],
        commentCount: 683,
        comments: [{ username: "dojacat", userComment: "so cute ❤", like: true }],
        timer: "19 HORAS ATRÁS",
        like: true,
        save: true,
    },
    {
        profileImgSrc: "./images/travisscott.PNG",
        profileImgAlt: "owner-pic",
        user: "travisscott",
        postType: "video",
        postSrc: { mp4: "./images/video.mp4", ogv: "./images/video.ogv" },
        postAlt: "post",
        likeCount: "4.624",
        likes: [
            {
                userImgSrc: "./images/postmalone.PNG",
                username: "postmalone",
            },
        ],
        commentCount: 153,
        comments: [
            { username: "migueldspido", userComment: "UR the highest in the room", like: false },
        ],
        timer: "3 HORAS ATRÁS",
        like: true,
        save: false,
    },
];

const suggestionsData = [
    { suggestion: "drake", sugImgSrc: "./images/drake.PNG", details: "Segue você" },
    { suggestion: "50cent", sugImgSrc: "./images/50cent.PNG", details: "Sugerido para você" },
    {
        suggestion: "juliobalestrinoficial",
        sugImgSrc: "./images/juliobalestrinoficial.PNG",
        details: "Seguido por paulomuzy + 3 pessoas",
    },
    {
        suggestion: "thenewclassic",
        sugImgSrc: "./images/thenewclassic.PNG",
        details: "Sugerido para você",
    },
    {
        suggestion: "tzdacoronel",
        sugImgSrc: "./images/tzdacoronel.PNG",
        details: "Seguido por filiperet + 2 pessoas",
    },
];

const storiesData = [
    {
        userImgSrc: "./images/IMG_20220502_023813_962.jpg",
        username: "Seu story",
    },
    {
        userImgSrc: "./images/winderssonunesc.PNG",
        username: "winderssonunesc",
    },
    {
        userImgSrc: "./images/dualipa.PNG",
        username: "dualipa",
    },
    {
        userImgSrc: "./images/travisscott.PNG",
        username: "travisscott",
    },
    {
        userImgSrc: "./images/matue.PNG",
        username: "matue",
    },
    {
        userImgSrc: "./images/neymarjr.PNG",
        username: "neymarjr",
    },
    {
        userImgSrc: "./images/anitta.PNG",
        username: "anitta",
    },
    {
        userImgSrc: "./images/arianagrande.PNG",
        username: "arianagrande",
    },
    {
        userImgSrc: "./images/cristiano.PNG",
        username: "cristiano",
    },
    {
        userImgSrc: "./images/postmalone.PNG",
        username: "postmalone",
    },
    {
        userImgSrc: "./images/dojacat.PNG",
        username: "dojacat",
    },
    {
        userImgSrc: "./images/paulomuzy.PNG",
        username: "paulomuzy",
    },
    {
        userImgSrc: "./images/filiperet.PNG",
        username: "filiperet",
    },
];

const userData = {
    userImgSrc: "./images/IMG_20220502_023813_962.jpg",
    username: "migueldspido",
    name: "Miguel Domingos",
};

export { postsData, suggestionsData, storiesData, userData };
