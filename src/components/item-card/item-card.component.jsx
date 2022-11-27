import './item-card.styles.scss';
import Button from '../button/button.component';
import { arrayRemove, doc, updateDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from '../../utils/firebase/firebase.utils';


const ItemCard = ({product, title}) => {
    const {id,name, price, imageUrl} = product;
    const docRef = doc(db, "categories", title);
    const deleteItem = async () => {
        await updateDoc(docRef, {
            items: arrayRemove({
                id:Number(id),
                name:name,
                imageUrl:imageUrl,
                price:Number(price)
            })
        });
        console.log("se elimino articulo")
        if((await (await (getDoc(doc(db, "categories",title)))).data()).items.length === 0){
            await deleteDoc(docRef);
            alert("se elimino el articulo y categoria por estar vacio")
        }else{
            alert("se elimino articulo de la categoria")
        }

    };

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={deleteItem}>
                Eliminar
            </Button>
        </div>
    )
}

export default ItemCard;