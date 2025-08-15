import { collection, doc, getDoc } from "firebase/firestore"
import { firestore } from "../firebase"

export const doQualityCheck = async (url: string) => {

    const qualityDBDocument: undefined | boolean = (await (getDoc(doc(firestore, `/messages/bd1MlzXf94J8Jh6p5JBZ`)))).data()?.asdf

    const t = qualityDBDocument === undefined ? true : (!qualityDBDocument)

    return t 
}
