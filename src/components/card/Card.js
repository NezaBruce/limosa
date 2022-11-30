import React from "react";
import CardInt from "./CardInt";

const Card = () => {
  return (
    <div className="grid grid-cols-4 gap-4 align-center mx-40">
     <CardInt imgurl="https://legendmotorsuae.com/uploads/vehicle/colors/007f05461948a4180a7c0914545427ee01.jpg"
     imgname="Wuling - Golf Cart"
     year="2010"
     />
     <CardInt imgurl="https://legendmotorsuae.com/uploads/vehicle/colors/018c40bccebecb4cd88a8d54c1c1e17b0f.jpg"
     imgname="Mercedes Benz - V250 - VIP"
     year="2013"
     />
     <CardInt imgurl="https://legendmotorsuae.com/uploads/vehicle/colors/019661078008e17a95047d7189ff7d2752.jpg"
     imgname="Mercedes - MayBach - 6.0L S680 AT"
     year="2022"
     />
     <CardInt imgurl="https://legendmotorsuae.com/uploads/vehicle/colors/0069d7bcacdf035d51fb2406df2d67c791.jpg"
     imgname="JETOUR - X70 - S"
     year="2022"
     />
    </div>
  );
};

export default Card;
