create table users(
    _id VARCHAR(255) NOT NULL PRIMARY KEY,
    username  VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    isDeleted BIT Default 0,
	isAdmin Bit Default 0,
	resetPassword Bit default 0,

);