var posts=["2025/02/16/hello-world/","2025/02/17/设计模式/","2025/03/02/java 容器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };