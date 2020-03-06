const moment = require('moment')
const date = "2019-12-30"
const createdAt = moment().format('LLL')
exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex("tasks")
  //   .del()
  //   .then(function() {
  //     // Inserts seed entries
  return knex("tasks").insert([

		{
			"due_date": date,
			"task_name": "Order Scrap Dumpster and Port-A-John",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 2,	"user_id":'auth0|5de566843f7fc30e1a74c3fe',
		
		},
		{
			"due_date": date,
			"task_name": "Pre Construction Meeting With Buyers (Start Forming)",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 2,	"user_id":'auth0|5de566843f7fc30e1a74c3fe',
		
		},
		{ 
			"due_date": date,
			"task_name": "Form Board Survey",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 2,	"user_id":'auth0|5de566843f7fc30e1a74c3fe',
		
		},
		{
			"due_date": date,
			"task_name": "Fill The Form Boards ",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 2,	"user_id":'auth0|5de566843f7fc30e1a74c3fe',
		
		},
		{
			"due_date": date,
			"task_name": "Rough Plumbing",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 2,	"user_id":'auth0|5de566843f7fc30e1a74c3fe',
		
		},
		{
			"due_date": date,
			"task_name": "Sewer Hookup / Order Windows",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 2,	"user_id":'auth0|5de566843f7fc30e1a74c3fe',
		
		},
		{

			"due_date": date,
			"task_name": "Foundation and Sewer Hookup Inspection *** must be approved before new tasks to be started ***",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 2,	"user_id":'auth0|5de566843f7fc30e1a74c3fe',
		
		},
		{
			"task_name": "Order Scrap Dumpster and Port-A-John",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 3,
			"user_id":'auth0|5de566843f7fc30e1a74c3fe',
	
		},
		{
			"due_date": date,
			"task_name": "Pre Construction Meeting With Buyers (Start Forming)",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 3,
			"user_id":'auth0|5de566843f7fc30e1a74c3fe',
		
		},
		{ 
			"due_date": date,
			"task_name": "Form Board Survey",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 3,
			"user_id":'auth0|5de566843f7fc30e1a74c3fe',
	
		},
		{
			"due_date": date,
			"task_name": "Fill The Form Boards ",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 3,
			"user_id":'auth0|5de566843f7fc30e1a74c3fe',
		
		},
		{
			"due_date": date,
			"task_name": "Rough Plumbing",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 3,
			"user_id":'auth0|5de566843f7fc30e1a74c3fe',
			
		},
		{
			"due_date": date,
			"task_name": "Sewer Hookup / Order Windows",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 3,
			"user_id":'auth0|5de566843f7fc30e1a74c3fe',
		
		},
		{
			"due_date": date,
			"task_name": "Foundation and Sewer Hookup Inspection *** must be approved before new tasks to be started ***",
			"isComplete": false,
			"createdAt": createdAt,
			"project_id": 3,
			"user_id":'auth0|5de566843f7fc30e1a74c3fe',
		
		}
  ]);
  // });
};
