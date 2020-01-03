exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("routes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("routes").insert([
        {
          id: 1,
          grade: "V2",
          image: "BlueV2.jpg",
          description: "Slab with Blue Holds",
          location: "Armadillo Boulders"
        },
        {
          id: 2,
          grade: "V3",
          image: "BlueV3.jpg",
          description: "Blue Holds Overhang to Slab",
          location: "Armadillo Boulders"
        },
        {
          id: 3,
          grade: "V5",
          image: "YellowV5.jpg",
          description: "Yellow Holds Go Across, Up, and Back Across",
          location: "Armadillo Boulders"
        }
      ]);
    });
};
