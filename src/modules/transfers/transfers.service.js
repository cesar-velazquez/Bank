import Transfers from "./transfers.model.js"

export class TransferService {
    static async createRecordTransfer(ammount, senderUserId, receiverUserId){
        return await Transfers.create({
            ammount,
            senderUserId,
            receiverUserId,
        })
    }
}