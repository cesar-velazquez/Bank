import { UserService } from "../users/users.service.js";
import { TransferService } from "./transfers.service.js";

export const makeTransfer = async (req, res) => {
    try {
        const { amount, recipientAccountNumber, senderAccountNumber } = req.body;

        const recipientUserPrimise = UserService.findOneAccount(recipientAccountNumber);

        const senderUserPromise = UserService.findOneAccount(senderAccountNumber);

        const [recipientUser, senderUser] = await Promise.all([
            recipientUserPrimise, senderUserPromise]); 


        if (!recipientUser) {
            return res.status(400).json({
                status: 'error',
                message:"Recipient account does not exist"
            })
        }
        
        if (!senderUser) {
            return res.status(400).json({
                status: 'error',
                message:"Recipient account does not exist"
            })
        }
        if (amount > senderUser.amount) {
            return res.status(400).json({
                status: 'error',
                message:"Insuficient Balance"
            })
        }

        const newRecipientBalance = amount + recipientUser.amount;
        const newSenderBalance = senderUser.amount - amount;
        
        await UserService.updateAmount(recipientUser, newRecipientBalance);
        await UserService.updateAmount(senderUser, newSenderBalance);
        await TransferService.createRecordTransfer(amount, senderUser.id, recipientUser.id)
        res.status(201).json(senderUser);
    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }
}

