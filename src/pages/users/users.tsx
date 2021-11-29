import React, { Component } from "react";

const Users = () => {
  import("ramda").then((ramda) => {
    const result = ramda.map(ramda.identity, [1, 2, 6]);
    console.log("user page loaded", result);
  });

  return (
    <>
      <div>Users page</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
        sagittis orci, fermentum pharetra lacus hendrerit quis. Sed eu sem sed
        est tincidunt dignissim porttitor non velit. Proin ullamcorper a arcu id
        tristique. Phasellus tincidunt varius porttitor. Mauris malesuada ex
        lorem, quis feugiat nisl vestibulum ac. Integer ullamcorper, quam id
        dictum convallis, turpis justo dignissim turpis, vel egestas diam dui in
        metus. Nullam mi nibh, bibendum eu semper et, consequat at mauris. Morbi
        blandit tincidunt diam vel vulputate. Curabitur dui orci, pretium quis
        viverra et, tempor ut tellus. Sed ut velit egestas, porta metus eu,
        maximus ante. Sed auctor metus et venenatis interdum. Cras ac mauris eu
        nisi euismod egestas et vel risus. Vestibulum gravida mollis sapien, sit
        amet varius elit pharetra id. Duis vestibulum augue in est dictum
        gravida. Vivamus id bibendum lorem. Nulla euismod tristique erat a
        euismod. Vestibulum congue nisi vehicula pharetra blandit. Integer
        tristique felis id sem mattis, eget facilisis urna sodales. Curabitur in
        tincidunt dolor. In aliquet lectus malesuada nibh convallis porttitor
        nec et nulla. Mauris malesuada turpis sit amet mattis volutpat. Sed
        mattis, purus in tempor luctus, diam nunc auctor mauris, sit amet
        scelerisque lorem mauris eu lorem. Mauris ac accumsan turpis, auctor
        ornare odio. Vestibulum pulvinar vitae tellus id pellentesque. Praesent
        eget libero eu nisi tempus accumsan. Maecenas ipsum ante, luctus quis
        orci nec, tincidunt ultricies tortor. Maecenas tempus velit et velit
        gravida, sit amet suscipit dui ornare. Curabitur ac sem malesuada,
        posuere lacus id, sodales leo. Morbi dapibus quis lectus non
        consectetur. Ut ut sollicitudin quam. Nunc semper finibus turpis ut
        suscipit. Donec vitae augue scelerisque, placerat urna vel, feugiat
        sapien. Fusce purus tortor, consequat eu varius in, porttitor et tortor.
        Mauris ultrices nulla et turpis fringilla, eget pharetra nulla
        porttitor. Nam vel ex a ligula efficitur tempus. Donec feugiat magna
        urna, non placerat nulla posuere non. Cras vel dapibus dui, a convallis
        leo. Sed dictum dignissim arcu consectetur feugiat. Nullam non diam
        hendrerit augue condimentum scelerisque a quis dui. Quisque sed purus eu
        augue pulvinar blandit non sit amet dui. Aenean orci augue, consectetur
        eu odio nec, condimentum viverra nunc. Duis dolor nisl, sollicitudin eu
        dolor eget, dignissim suscipit nisl. Integer tincidunt blandit purus,
        nec maximus sem consequat in. Integer tempus a leo at rhoncus. Maecenas
        cursus augue elit, ut consectetur mi convallis auctor. Nam vulputate
        lorem luctus, scelerisque mi id, rhoncus ante. Generated 5 paragraphs,
        392 words, 2617 byte
      </div>
    </>
  );
};
export default Users;
