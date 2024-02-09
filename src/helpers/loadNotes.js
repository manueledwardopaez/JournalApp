import { FirebaseDB } from "../ firebase/config"
import { getDocs, collection } from "firebase/firestore/lite"

export const loadNotes = async(uid = '') => {
    if(!uid) throw new Error("El uid del usuario no existe")

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
    const docs = await getDocs(collectionRef)

    const notes = []
    docs.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() })
    } )

    console.log(notes)
    return notes
}