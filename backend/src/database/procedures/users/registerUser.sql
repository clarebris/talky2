CREATE OR ALTER  PROCEDURE registerUser
	@_id varchar(255),
	@username varchar(255),	
	@email varchar(255),
	@password varchar(255)
	
as

set nocount on;

begin
	INSERT INTO dbo.users
	(_id, username, email, password )
	VALUES
	(@_id,@username, @email, @password );
end;

