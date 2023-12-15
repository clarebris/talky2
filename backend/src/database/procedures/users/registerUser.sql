CREATE OR ALTER  PROCEDURE [dbo].[registerUser]
	@_id varchar(100),
	@username varchar(100),
	@profileImage VARCHAR(500),
    @fullName VARCHAR(250),	
	@email varchar(250),
	@password varchar(250)
	
	
as

set nocount on;

begin
	INSERT INTO dbo.users
	(_id, profileImage, fullName, email, password, username )
	VALUES
	(@_id, @profileImage, @fullName, @email, @password, @username );
end;