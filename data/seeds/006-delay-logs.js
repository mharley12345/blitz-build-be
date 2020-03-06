
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('delay_logs').del()

      // Inserts seed entries
      return knex('delay_logs').insert([
      	{
         
          "project_id": 1,
          "project_name": "Auburn",
          "user_id":'auth0|5de566843f7fc30e1a74c3fe',
          "reason": "inspector delay",
          "task_id": 7,
          "task_name": "Foundation and Sewer Hookup Inspection"
        },
        {
          
          "project_id": 2,
          "project_name": "Tacoma",
          "user_id":'auth0|5de566843f7fc30e1a74c3fe',
          "reason": "Buyers Rescheduled untill after New Years",
          "task_id": 9,
          "task_name": "Pre Construction Meeting With Buyers (Start Forming)"
        },
        {
        
          "project_id": 3,
          "project_name": "Seattle Eastside",
          "user_id":'auth0|5de566843f7fc30e1a74c3fe',
          "reason": "Plumber rescheduled untill Jan 4",
          "task_id": 19,
          "task_name": "Rough Plumbing"
        }
       
      ]);
    
};
