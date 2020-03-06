const moment = require('moment')
const date = moment().add(90,'days').calendar("l")
const createdAt = moment().calendar('l')
exports.up = function(knex) {
  return (
    knex.schema
    //PROJECTS
.createTable("projects", tbl => {
        tbl.increments();

        tbl
          .string("project_name")
          .notNullable();
        tbl.float("baths");
        tbl.float("beds");
        tbl.string("city");
 
        tbl.string("imageURL");
        tbl.integer("square_ft");
        tbl.string("state");
        tbl.string("status");
        tbl.string("street_address");
        tbl.integer("zip_code").notNullable();
        tbl.float("longitude")
        tbl.float("latitude")
        tbl.string("start_date")
        tbl.string("createdAt").defaultsTo(createdAt)
        tbl.string("due_date").defaultsTo(date)
        tbl.string('user_id').notNullable();
      })

     
      .createTable("templates", tbl => {
        tbl.increments();
        tbl.string("template_name")
        tbl.string('user_id')
        })
     

// //       // TASKS
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("user_id").notNullable();
        tbl.string("task_name").notNullable();
        tbl.string("task_description", 1000);
        tbl.string("due_date")
        tbl.string("start_date").defaultsTo(null)
        tbl.string("template_name")
        tbl.date("createdAt").defaultsTo(createdAt)
        tbl.boolean("isComplete").defaultsTo(false)
        tbl.integer("project_id")
           .unsigned()
           .references('id')
           .inTable('projects')
           .onDelete('CASCADE')
           .onUpdate('CASCADE')
        tbl.integer('template_id')
           .unsigned()
           .references('id')
           .inTable('templates')
           .onDelete('CASCADE')
           .onUpdate('CASCADE')
 

     })
        //Delay_Logs
   
      .createTable("delay_logs",tbl =>{
        tbl.increments()
        tbl.integer("project_id")
           .unsigned()
           .references("id")
           .inTable("projects")
           .onDelete("CASCADE")
           .onUpdate("CASCADE")
        tbl.string("createdAt")

        tbl.string("reason").notNullable()
        tbl.integer("task_id")
        .unsigned()
        .references("id")
        .inTable("tasks")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")

       tbl.string("updatedAt")
          tbl.string("user_id").notNullable();

      })
        .createTable("90_day",tbl=>{
          tbl.integer("id")
          tbl.string('due_date')
          tbl.string('task_name')
          tbl.string('task_description')
          tbl.boolean('isComplete').defaultsTo(false)
          tbl.string('project_id')
          tbl.string('template_name')
          tbl.string('start_date').defaultsTo(null)
          
        })
 
  
        
      // MANY-TO-MANY TABLE WITH PROJECTS AND TASKS
      .createTable("templates_tasks", tbl => {
        tbl.increments();
           
        tbl
          .integer("template_id")
          .unsigned()
          .references("id")
          .inTable("templates")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
      })
    
         


  
  
     
        .createTable("docs_url",tbl =>{
        tbl.increments()
        tbl.string("file_name",2000);
        tbl.string("doc_url",2000);
        tbl.string("user_id")
        tbl.string("project_id")
        tbl.string("project_name")
        tbl.string("createdAt").defaultsTo(createdAt)
        tbl.string("file_type")
        
      })
  )}

    

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("projects")
  .dropTableIfExists("docs_url")
  .dropTableIfExists("90_day")
 
    .dropTableIfExists("delay_logs")
    .dropTableIfExists("templates")
    .dropTableIfExists("tasks")
     
}





 



  // .dropTableIfExists("projects_tasks")
  
 

 
  // .dropTableIfExists("users")


  


 
  
  

  


     


