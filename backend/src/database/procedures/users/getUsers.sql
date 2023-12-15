CREATE OR ALTER  PROCEDURE [dbo].[getUsers]
as

set nocount on;

begin
	select	u.[_id],
			u.username,
			u.fullName,
			u.email		

	from	[users] u where isDeleted = 0 
end;