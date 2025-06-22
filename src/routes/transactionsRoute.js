import express from "express"
import {
    createTransaction, deleteTransaction, getSummaryByUserId, getTransactionsByUserId
} from "../controller/transactionsController.js"


const router = express.Router()

router.get("/:userId", getTransactionsByUserId)

router.delete("/:id", createTransaction)

router.post("/", deleteTransaction)

router.get("/summary/:userId", getSummaryByUserId)

export default router