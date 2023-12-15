CREATE OR ALTER  PROCEDURE [dbo].[updateUser]
	@_id varchar(100),
	@username varchar(100),
	@email varchar(250)
	as

set nocount on;

begin
	UPDATE dbo.users
	SET 
	username=@username,
	email=@email 

	WHERE _id = @_id;
end;