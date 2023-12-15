// import { Request, Response } from "express";
// import { execute, handleTVP, query } from "../services/dbconnect";
// import { v4 as uuidv4 } from "uuid";
// import { isEmpty } from "lodash";
// import { createPostSchema } from "../validators/postValidator";
// import { Post } from "../types/postInterface";

// export const createComment = async (req: Request, res: Response) => {
//   try {
//     console.log(req.body);

//     let {
//       created_by_user_id,
//       post_id,
//       comment,
//       comment_replied_to_id,
//       created_at,
//     } = req.body;

//     let comment_id = uuidv4();

//     let result = await execute("createComment", {
//       comment_id,
//       created_by_user_id,
//       post_id,
//       comment,
//       comment_replied_to_id,
//       created_at,
//     });

//     if (result.rowsAffected[0] === 0) {
//       return res.status(404).json({
//         message: "Something went wrong, Comment not created",
//       });
//     } else {
//       if (comment.includes("@")) {
//         const username_tagged = comment.split("@")[1].split(" ")[0]; // Extract username after @

//         console.log("username_tagged is ", username_tagged);

//         const userExists = (
//           await execute("getUserByUsername", { username_tagged })
//         ).recordset;

//         if (!isEmpty(userExists)) {
//           const user_id = userExists[0].user_id;
//           const post_user_tag_id = uuidv4();

//           let result = await execute("addToPostTaggedTable", {
//             post_user_tag_id,
//             post_id,
//             user_id,
//             created_at,
//           });

//           if (result.rowsAffected[0] === 0) {
//             return res.status(404).json({
//               message: "Something went wrong, user not added to tags",
//             });
//           }
//         }
//       }

//       return res.status(200).json({
//         message: "Comment created successfully",
//       });
//     }
//   } catch (error) {
//     console.log(error);

//     return res.json({
//       error: error,
//     });
//   }
// };

// export const editComment = async (req: Request, res: Response) => {
//   try {
//     console.log(req.body);

//     let { comment_id, updated_comment, updated_at } = req.body;

//     // Check if the comment_id is provided
//     if (!comment_id) {
//       return res.status(400).json({
//         message: "Comment ID is required for editing",
//       });
//     }

//     // Perform a database update to edit the comment
//     let result = await execute("editComment", {
//       comment_id,
//       updated_comment,
//       updated_at,
//     });

//     if (result.rowsAffected[0] === 0) {
//       return res.status(404).json({
//         message: "Something went wrong, Comment not updated",
//       });
//     } else {
//       return res.status(200).json({
//         message: "Comment updated successfully",
//       });
//     }
//   } catch (error) {
//     console.log(error);

//     return res.status(500).json({
//       error: "Internal Server Error",
//     });
//   }
// };

// export const deleteComment = async (req: Request, res: Response) => {
//   try {
//     console.log(req.body);

//     let { comment_id } = req.params;

//     if (!comment_id) {
//       return res.status(400).json({
//         message: "Comment ID is required for deletion",
//       });
//     }

//     let result = await execute("deleteComment", {
//       comment_id,
//     });

//     if (result.rowsAffected[0] === 0) {
//       return res.status(404).json({
//         message: "Something went wrong, Comment not deleted",
//       });
//     } else {
//       return res.status(200).json({
//         message: "Comment deleted successfully",
//       });
//     }
//   } catch (error) {
//     console.log(error);

//     return res.status(500).json({
//       error: "Internal Server Error",
//     });
//   }
// };