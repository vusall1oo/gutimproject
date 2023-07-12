import React from "react";
import "./BestAward.scss";
import bestAward from "../../../../../img/award.jpg"
function BestAward() {
  return (
    <>
      
        <section class="best-award best">
<div class="container">
<div class="row">
<div class="col-lg-8">
<div class="award-best">
<h2>Best gym award</h2>
<p>Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium sollicitudin,
nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate cursus a
amet.</p>
<p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero
sit amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam
semper libero sit amet.</p>
</div>
</div>
<div class="col-lg-4">
<img src={bestAward} alt=""/>
</div>
</div>
</div>
</section>
    </>
  );
}

export default BestAward;
