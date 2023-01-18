// arrays
const posts = [
  {
      "id": 1,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/300?image=171",
      "author": {
          "name": "Phil Mangione",
          "image": "https://unsplash.it/300/300?image=15"
      },
      "likes": 80,
      "created": "2021-06-25",
      "liked": false
  },
  {
      "id": 2,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=112",
      "author": {
          "name": "Sofia Perlari",
          "image": null
      },
      "likes": 120,
      "created": "2021-09-03",
      "liked": false
  },
  {
      "id": 3,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=234",
      "author": {
          "name": "Chiara Passaro",
          "image": "https://unsplash.it/300/300?image=20"
      },
      "likes": 78,
      "created": "2021-05-15",
      "liked": false
  },
  {
      "id": 4,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": null,
      "author": {
          "name": "Luca Formicola",
          "image": null
      },
      "likes": 56,
      "created": "2021-04-03",
      "liked": false
  },
  {
      "id": 5,
      "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
      "media": "https://unsplash.it/600/400?image=534",
      "author": {
          "name": "Alessandro Sainato",
          "image": "https://unsplash.it/300/300?image=29"
      },
      "likes": 95,
      "created": "2021-03-05",
      "liked": false
  }
];


// selectors
const container = document.getElementById("container");

// inserting objects on page
for (let post of posts){
  let socialPost = document.createElement("div")
  socialPost.className = 'post rounded'
  socialPost.innerHTML += 
    `      
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                     
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post.author.name}</div>
                <div class="post-meta__time">${post.created}</div>
            </div>                    
        </div>
    </div>

    <div class="post__text">${post.content}
    </div>

    <div class="post__image">
        <img src="${post.media}" alt="">
    </div>

    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button js-like-button" href="javascript:void(0)" data-postid="${post.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
            </div>
        </div> 
    </div>            
    `;
  container.appendChild(socialPost);
}

const buttons = document.querySelectorAll(".js-like-button");
const counters = document.querySelectorAll(".js-likes-counter");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', 
    function likePost(){
      if(!posts[i].liked){
        buttons[i].classList.add("like-button--liked");
        counters[i].textContent++
        posts[i].liked = true;
      } else{
        buttons[i].classList.remove("like-button--liked");
        counters[i].textContent--
        posts[i].liked = false;
      }
    }
  )};


// array with liked posts ids
const show = document.getElementById('show');
show.addEventListener('click', function(){
  const likedPostsIds = posts.filter(post => post.liked === true).map(post => post.id);
  console.log(likedPostsIds);
})
