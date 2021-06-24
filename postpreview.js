const article = [
    {
        title: "Good Agriculture Practices: The future of farming",
        content: "With the increasing per capita income, consumers are becoming more and more conscious about their health. Production of safe food is not only important for consumer’s health but also for...",
        author: "By Ariati Joshi",
        publishDate: "Published: 08:50 am May 22, 2019",
        link: "./artikel1.html",
        image: "./img/artikel1.jpg"
    },
    {
        title: "Organic Farming and Good Agriculture Practices (Global GAP) to Achieve Food Safety for Crops",
        content: "Organic farming refers to agricultural production systems used to produce food and fiber. Organic farming management relies on developing biological diversity in...",
        author: "Authors Fawzy ZF, Li Yunsheng and Shaymaa I. Shedeed",
        publishDate: "Published Date: 26/02/2018",
        link: "./artikel2.html",
        image: "./img/artikel2.jpg"
    },
    {
        title: "5 Success Stories of Good Agricultural Practices from Malaysia",
        content: "Warisan Hikmat was awarded with the MyGAP certification and Fish Quality Certificate in 2009. It is the first farm in Sabah and among the earliest farms to receive these certifications in Malaysia, which allowed it to export prawn products to...",
        author: "By BIMP-EAG",
        publishDate: "Published on 17 June 2020",
        link: "./artikel3.html",
        image: "./img/article3.jpg"  
    }
]

$(document).ready(function(){
    console.log(article[0].title)
    for(let b=0; b < article.length; b++){
        const postPreviewTemplate = `<div class="card m-4 post-preview">
        <img src="${article[b].image}" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="card-text">
                <p class="card-title">${article[b].title}</p>
                <p class="text-muted mb-0">${article[b].author}</p>
                <small class="text-muted">${article[b].publishDate}</small>
                <p class="preview">${article[b].content}</p>
                <a href="${article[b].link}">Read More</a>
            </div>
        </div>
    </div>`;

        $(".content-article").append(postPreviewTemplate);
    }
})



