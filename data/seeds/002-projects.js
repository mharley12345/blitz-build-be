exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex("projects")
  //   .del()
  //   .then(function() {
  //     // Inserts seed entries
  return knex("projects").insert([
    {
      project_name: "Auburn",
      baths: 3,
      beds: 4,
      city: "Auburn",
      imageURL: "",
      square_ft: 3200,
      state: "WA",
      status: "on time",
      street_address: "212 Auburn Wa",
      zip_code: 98001,
      user_id:'auth0|5de566843f7fc30e1a74c3fe',

  
    },
    {
      project_name: "Tacoma",
      baths: 4,
      beds: 6,
      city: "Tacoma",
      imageURL: "",
      square_ft: 3350,
      state: "WA",
      status: "on time",
      street_address: "2552 Tacoma Way",
      zip_code: 98402,
      user_id:'auth0|5de566843f7fc30e1a74c3fe',
  
    },
    {
      project_name: "Seattle Eastside",
      baths: 3.5,
      beds: 5,
      city: "Seattle",
      imageURL: "",
      square_ft: 3800,
      state: "WA",
      status: "on time",
      street_address: "5792 Eastside St",
      zip_code: 98101,
      user_id:'auth0|5de566843f7fc30e1a74c3fe',
  
    }
  ]);
  // });
};
