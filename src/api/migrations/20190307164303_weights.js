const tableName = 'weights';

exports.up = function(knex, Promise) {
    return knex.schema.createTable(tableName, function (table) {
        table.increments();
        table.string('user');
        table.string('weight');
        table.string('timestamp');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists(tableName);
};
