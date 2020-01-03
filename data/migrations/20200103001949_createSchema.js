exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl.string("username", 128).notNullable();
      tbl.string("email", 128).notNullable();
      tbl.string("password", 128).notNullable();
      tbl.string("level").defaultTo("0");
    })
    .createTable("routes", tbl => {
      tbl.increments();
      tbl.string("createdBy", 128);
      tbl.string("grade", 128);
      tbl.string("description", 128).notNullable();
      tbl.string("image", 128).notNullable();
      tbl.string("type", 128);
      tbl.string("name", 128);
      tbl.string("location", 128);
    })
    .createTable("user_routes", tbl => {
      tbl.increments();
      tbl.string("notes");
      tbl.string("status");
      tbl.boolean("share").defaultTo(false);
      tbl
        .integer("userId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
      tbl
        .integer("routeId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("routes");
    })
    .createTable("ratings", tbl => {
      tbl.increments();
      tbl.integer("rating").unsigned();
      tbl.string("comment");
      tbl.date("createdDate");
      tbl
        .integer("userId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
      tbl
        .integer("routeId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("routes");
    })
    .createTable("panels", tbl => {
      tbl.increments();
      tbl.float("height").notNullable();
      tbl.float("width").notNullable();
      tbl.float("angle").notNullable();
      tbl
        .integer("routeId")
        .unsigned()
        .references("id")
        .inTable("routes");
    })
    .createTable("holds", tbl => {
      tbl.increments();
      tbl.string("type");
      tbl.string("image").notNullable();
    })
    .createTable("panel_holds", tbl => {
      tbl.increments();
      tbl.float("x").notNullable();
      tbl.float("y").notNullable();
      tbl.float("rotation").defaultTo(0);
      tbl.boolean("isStartHold").defaultTo(false);
      tbl
        .integer("panelId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("panels");
      tbl
        .integer("holdId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("holds");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("panel_holds")
    .dropTableIfExists("holds")
    .dropTableIfExists("panels")
    .dropTableIfExists("ratings")
    .dropTableIfExists("user_routes")
    .dropTableIfExists("routes")
    .dropTableIfExists("users");
};
