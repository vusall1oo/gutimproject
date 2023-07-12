import React from "react";
import "./Blog.scss"
import Blog1 from "../../../../../img/blog/blog-1.jpg";
import Blog2 from "../../../../../img/blog/blog-2.jpg";
import Blog3 from "../../../../../img/blog/blog-3.jpg";

function Blog() {
  return (
    <>
  <section class="latest-blog-section spad">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="section-title">
<h2>Latest Blog</h2>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-4 col-md-6">
<div class="single-blog-item">
<img src={Blog1} alt=""/>
<div class="blog-widget">
<div class="bw-date">February 17, 2019</div>
<a href="blog-single" class="tag">#Gym</a>
</div>
<h4><a href="blog-single">10 States At Risk of Rural Hospital Closures</a></h4>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="single-blog-item">
<img src={Blog2} alt=""/>
<div class="blog-widget">
<div class="bw-date">February 17, 2019</div>
<a href="blog-single" class="tag">#Sport</a>
</div>
<h4><a href="blog-single">Diver who helped save Thai soccer team</a></h4>
</div>
</div>
<div class="col-lg-4 col-md-6">
<div class="single-blog-item">
<img src={Blog3} alt=""/>
<div class="blog-widget">
<div class="bw-date">February 17, 2019</div>
<a href="blog-single" class="tag">#Body</a>
</div>
<h4><a href="blog-single">Man gets life in prison for stabbing</a></h4>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}

export default Blog;
