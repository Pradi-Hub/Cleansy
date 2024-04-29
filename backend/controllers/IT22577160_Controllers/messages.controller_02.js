import Messages from "../../models/IT22577160_Models/messages.model_02.js";

// create new message
export const createNewMessage = async (req, res, next) => {
   try {
      const messageData = req.body;
      messageData.conversationId = req.body.conversationId;
      messageData.sender = req.body.sender;

      const newMessage = new Messages({
         conversationId: messageData.conversationId,
         sender: messageData.sender,
      });
      await newMessage.save();
      res.status(201).json(newMessage);
   } catch (error) {
      next(error);
   }
};

// get all messages with conversation id
export const getAllMessages = async (req, res, next) => {
   try {
      const messages = await Messages.find({
         conversationId: req.params.id,
      });
   } catch (error) {
      next(error);
   }
};