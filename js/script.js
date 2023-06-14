const listaPosts = [

    {
        titulo: "Lorem ipsum dolor sit amet.",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus turpis, gravida id orci et, tincidunt efficitur magna. Donec ornare tellus sapien, eget rutrum tortor tincidunt in. Fusce metus mauris, scelerisque ac tempor tincidunt, euismod a arcu. Donec placerat vel lacus euismod sagittis. Phasellus fermentum porta nibh, eu tristique massa.",
        imgURL: "./img/img6.jpg"
    },

    {
        titulo: "Lorem ipsum dolor sit amet.",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus turpis, gravida id orci et, tincidunt efficitur magna. Donec ornare tellus sapien, eget rutrum tortor tincidunt in. Fusce metus mauris, scelerisque ac tempor tincidunt, euismod a arcu. Donec placerat vel lacus euismod sagittis. Phasellus fermentum porta nibh, eu tristique massa.",
        imgURL: "./img/img2.jpg"
    },

    {
        titulo: "Lorem ipsum dolor sit amet.",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus turpis, gravida id orci et, tincidunt efficitur magna. Donec ornare tellus sapien, eget rutrum tortor tincidunt in. Fusce metus mauris, scelerisque ac tempor tincidunt, euismod a arcu. Donec placerat vel lacus euismod sagittis. Phasellus fermentum porta nibh, eu tristique massa.",
        imgURL: "./img/img3.jpg"
    },

    {
        titulo: "Lorem ipsum dolor sit amet.",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus turpis, gravida id orci et, tincidunt efficitur magna. Donec ornare tellus sapien, eget rutrum tortor tincidunt in. Fusce metus mauris, scelerisque ac tempor tincidunt, euismod a arcu. Donec placerat vel lacus euismod sagittis. Phasellus fermentum porta nibh, eu tristique massa.",
        imgURL: "./img/img4.jpg"
    },

    {
        titulo: "Lorem ipsum dolor sit amet.",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus turpis, gravida id orci et, tincidunt efficitur magna. Donec ornare tellus sapien, eget rutrum tortor tincidunt in. Fusce metus mauris, scelerisque ac tempor tincidunt, euismod a arcu. Donec placerat vel lacus euismod sagittis. Phasellus fermentum porta nibh, eu tristique massa.",
        imgURL: "./img/img5.jpg"
    },
];

let container = document.querySelector(".container");

const criacaoPosts = () => {
    listaPosts.forEach((post) => {
        let card =
        `
            <div class="card">
            <img class="card-img" src=${post.imgURL} />
            <h2 class="card-titulo"> ${post.titulo} <h2/>
            <p class="card-descricao"> ${post.descricao} </p>
            <button class="card-button">lorem ipsum</button>
            </div>
        `;
        container.innerHTML += card;
    });
};

window.onload = () => {
    criacaoPosts();
};