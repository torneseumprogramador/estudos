# Users schema
 
# --- !Ups
 
CREATE TABLE tasks (
    id bigint(20) NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    done boolean NOT NULL,
    due_date datetime NOT NULL,
    PRIMARY KEY (id)
);
 
# --- !Downs
 
DROP TABLE Task;