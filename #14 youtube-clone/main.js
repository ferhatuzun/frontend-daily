let videoContainer = document.querySelector(".videoContainer");
let menuIcon = document.querySelector(".menuIcon");
let menu = document.querySelector("#menu");
let container = document.querySelector("#container");
let videoList = [
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v1.png",
        channelImage: "images/User-Avatar-1.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v2.png",
        channelImage: "images/User-Avatar-2.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v3.png",
        channelImage: "images/User-Avatar-3.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v4.png",
        channelImage: "images/User-Avatar-4.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v5.png",
        channelImage: "images/User-Avatar-5.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v6.png",
        channelImage: "images/User-Avatar-6.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v7.png",
        channelImage: "images/User-Avatar-1.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v8.png",
        channelImage: "images/User-Avatar-2.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v1.png",
        channelImage: "images/User-Avatar-3.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v2.png",
        channelImage: "images/User-Avatar-4.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v3.png",
        channelImage: "images/User-Avatar-5.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v4.png",
        channelImage: "images/User-Avatar-6.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v5.png",
        channelImage: "images/User-Avatar-1.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v6.png",
        channelImage: "images/User-Avatar-2.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v7.png",
        channelImage: "images/User-Avatar-3.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v8.png",
        channelImage: "images/User-Avatar-4.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v1.png",
        channelImage: "images/User-Avatar-5.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v2.png",
        channelImage: "images/User-Avatar-6.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v3.png",
        channelImage: "images/User-Avatar-1.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v4.png",
        channelImage: "images/User-Avatar-2.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v5.png",
        channelImage: "images/User-Avatar-3.png",
        duration: "14:36"
    },
    {
        tite: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
        channelName: "Jorge James",
        views: "15K",
        uploadTime: "1 week ago",
        videoImage: "images/v6.png",
        channelImage: "images/User-Avatar-4.png",
        duration: "14:36"
    }
]



videoList.forEach((item) => {
    let cardItem = `
    <div class="card">
        <div class="cardTop">
            <img src="${item.videoImage}" class="cardImage" />
            <p class="cardDuration">${item.duration}</p>
            </div>
            <div class="cardBody">
            <img src="${item.channelImage}" class="channelProfile" />
            <div>
                <p class="videoTitle">${item.tite}</p>
                <a href="#" class="channelName">${item.channelName}</a>
                <p class="videoDetail">${item.views} views. ${item.uploadTime}</p>
            </div>
        </div>
    </div>
    
    `
    videoContainer.innerHTML += cardItem
})

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("menuFix");
    container.classList.toggle("containerFix");
})