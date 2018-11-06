CREATE TABLE PARENT_TASK
(
ID INT(15) NOT NULL,
TASK VARCHAR(100)
);

ALTER TABLE PARENT_TASK ADD CONSTRAINT PARENT_TASK_PK PRIMARY KEY(ID);

CREATE TABLE TASK
(
ID INT(15) NOT NULL AUTO_INCREMENT,
TASK VARCHAR(100),
START_DATE DATE,
END_DATE DATE,
PRIORITY INT(3),
PARENT_TASK_ID INT(15),
PRIMARY KEY (id)
);

ALTER TABLE TASK ADD (CONSTRAINT TAKS_FK FOREIGN KEY(PARENT_TASK_ID) REFERENCES  PARENT_TASK (ID));