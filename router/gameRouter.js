import express, { response }  from "express"
import { GamesInfo } from "../models/game.js"

const router = express.Router()


router.get("/", async (requset , response) => {
    try{
        const allStudents = await GamesInfo.find( {} )
        return response.status( 200 ).json( {
            data: allStudents
        })}
    catch (error) {response.status(500).send(error.message)}
} )

router.delete("/:id" , async (request , response) => {
    try { 
        const { id } = request.params
        const result = await GamesInfo.findByIdAndDelete( id )
        if ( !result ) {return response.status( 404 ).send( "الطالب محذوف بالفعل" ) }
        return response.status(200).send("تم حذف الطالب  بنجاح")
    }
    catch (error) {response.status(500).send(error.message)}
} )
export default router