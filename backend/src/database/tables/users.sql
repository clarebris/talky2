 

CREATE  TABLE users (
	_id varchar(100) NOT NULL PRIMARY KEY,
	profileImage VARCHAR(500) NOT NULL,
	fullName VARCHAR(250) NOT NULL,
	username varchar(100) NOT NULL,	
	email varchar(250) NOT NULL,	
	isDeleted BIT Default 0,
	isAdmin Bit Default 0,
	resetPassword Bit default 0,
	justRegistered bit default 1,
	password varchar(250) NOT NULL,
	
);

-- DROP TABLE users



-- select * from users

-- update users set isAdmin = 1 where email = 'caleb.kellah@thejitu.com'

-- DELETE FROM users WHERE email = 'gamesmy177@gmail.com'HAR(255) NOT NULL UNIQUE,
    