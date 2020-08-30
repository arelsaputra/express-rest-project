/**
 * ################################################################# 
 * This file is for initiating your database in container 
 * You can put your schema, function definition, permission grant, 
 * type definition, trggier, Row level security here
 * #################################################################
 **/

\connect mydb

/** For some reserved keywords like user or group, we need to use double quote */
CREATE TABLE "user" (
    id          serial      not null unique              ,
    email       text        not null unique primary key  ,
    first_name  text                                     ,
    last_name   text                                     ,
    /** Use double quote to keep timestamp name consistency with sequelize */
    "createdAt"   timestamp   not null                     ,
    "updatedAt"   timestamp   not null                         
);
