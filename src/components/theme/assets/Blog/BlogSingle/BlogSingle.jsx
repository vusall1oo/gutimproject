import React from "react";
import "./BlogSingle.scss";
import img1 from "../../../../../img/blog-sec/bd-1.jpg"
import img2 from "../../../../../img/blog-sec/bd-2.jpg"
import blogTemp from "../../../../../img/blog-sec/blog-posted.jpg"
function BlogSingle() {
  return (
    <>
      <header className="bg-image">
        <div className="center-text">
          <span>Camera</span>
          <h3>10 States At Risk of Rural Hospital Closures</h3>
        </div>
      </header>
      <section className="blog-details spad">
<div className="container">
<div className="row">
<div className="col-lg-10 offset-lg-1">
<div className="blogs-text">
<div className="blogs-text-title">
<p>Your clients would like to see optimal results for minimal work. For this reason, it can
be difficult to convince them that a website redesign enhances SEO strategies. However,
if you try to redesign a site without taking SEO into account, you are going to face
bigger problems down the road.</p>
<p>Start off by explaining to clients what will happen if you ignore SEO in your redesign.
Explain to them how a website redesign enhances SEO strategies across the board. A
redesign is essential and should be part of your client’s budget. There are a couple of
risks to point out.</p>
</div>
<div className="blogs-pic">
<div className="row">
<div className="col-lg-6">
 <img src={img1} alt=""/>
</div>
<div className="col-lg-6">
<img src={img2} alt=""/>
</div>
</div>
</div>
<div className="blogs-more-text">
<div className="blogs-text-item">
<h4>1. You May Have to Redo All Your Content</h4>
<p>It is impossible to create effective content without taking SEO into consideration.
If you create content without thinking about SEO, you may need to go back and redo
all the new content you made for your website when you start your SEO strategy.
There are a few reasons for this.</p>
<p>First, you’ll be unsure as to what keyword terms you want to rank for. If you write
content that doesn’t include appropriate keywords, it will be difficult to go back
and include the terms naturally. Second, you may be unclear as to who makes up your
target audience. The content you write for the wrong audience is useless and will
need replacing.</p>
</div>
<div className="blogs-text-item">
<h4>2. You May Have Technical Mistakes</h4>
<p>Technical mistakes may mean you require a site migration in the near future. This is
a huge waste of time. Taking the technical side of SEO into account now will allow
you to decide on</p>
</div>
</div>
<div className="blogs-div">
<samp>"</samp>
<p>“We need to stop interrupting what people are interested in and be what people are
interested in.”</p>
<div className="div-author">
<h5>Steven Jobs</h5>
<span>CEO-DeerCreative</span>
</div>
</div>
<div className="blogs-last-para">
<p>All the above assumes that a client is willing to create a website in the first place.
Some clients may believe that they can forgo a website entirely. However, without a
website, it is impossible for a business to grow. You need to explain why having an
SEO-optimized website is necessary for being found online. Of course, businesses can
find customers using other means, such as through social media, but these methods are
slower. Plus, users will still expect the business to have a website — to obtain more
information about products, services, and the brand as a whole.</p>
</div>
<div className="tag-network">
<div className="tags">
<a href="#">Camera</a>
<a href="#">Photography</a>
<a href="#">Tips</a>
</div>
<div className="social-network">
<span>Share:</span>
<a href="#"><i className="fa fa-facebook"></i></a>
<a href="#"><i className="fa fa-twitter"></i></a>
<a href="#"><i className="fa fa-google-plus"></i></a>
 <a href="#"><i className="fa fa-instagram"></i></a>
<a href="#"><i className="fa fa-youtube-play"></i></a>
</div>
</div>
<div className="blog-rec-img">
<div className="row">
<div className="col-lg-3">
<div className="ba-pic">
<img src={blogTemp} alt=""/>
</div>
</div>
<div className="col-lg-9">
<div className="ba-text">
<h5>Shane Lynch</h5>
<p>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum bore et dolore magna aliqua. </p>
<div className="bt-social">
<a href="#"><i className="fa fa-facebook"></i></a>
<a href="#"><i className="fa fa-twitter"></i></a>
<a href="#"><i className="fa fa-google-plus"></i></a>
<a href="#"><i className="fa fa-instagram"></i></a>
</div>
</div>
</div>
</div>
</div>
<div className="leave-comment">
<h3>Leave A Comment</h3>
<form action="#">
<div className="row">
<div className="col-lg-6">
<input type="text" placeholder="Name"/>
</div>
<div className="col-lg-6">
<input type="text" placeholder="Email"/>
</div>
<div className="col-lg-12">
<textarea placeholder="Messages"></textarea>
<button type="submit">Send Message</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}

export default BlogSingle;
