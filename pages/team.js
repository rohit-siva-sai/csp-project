import Member from "@/components/team/member";
import TextAnime from "@/components/team/textAnime";
import SEO from "@bradgarropy/next-seo";
import React, { useState } from "react";


const Team = () => {
  return (
    <div>
      <SEO
        title="beware / Team"
        description="creating awarness fot not to use online loan apps and effects using them"
        keywords={["loan app","awarness","beware","beware-sigma"]}
        icon="/logo3.png"
       
      />
      <TextAnime/>
      <Member/>
    </div>
  );
};

export default Team;
