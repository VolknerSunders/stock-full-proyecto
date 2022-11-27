import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import Button from "../button/button.component";
import { db } from "../../utils/firebase/firebase.utils";
import { updateDoc, getDoc,  setDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import "./create-item-form.styles.scss"

const defaultFormFields = {
    title: "",
    id:0,
    image: '',
    itemName: '',
    price: 0
}

const CreateItemForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {id,title,image,itemName,price} = formFields;


    const createItem = async (e) => {
        e.preventDefault()
        /* const ref = ((await (await (getDoc(doc(db, "categories",title)))).data().items.map(item => item.id).indexOf(Number(id))));
        const obj = await (await (getDoc(doc(db, "categories",title)))).data().items[ref];

        console.log(ref);
        console.log(obj); 
        console.log(obj.price); */
        if(!(await (await (getDoc(doc(db, "categories",title)))).data())){
            try{
                await setDoc(doc(db, "categories",title), {
                    items: [{
                        id:Number(id),
                        name:itemName,
                        imageUrl:image,
                        price:Number(price)
                    }],
                    title:title
                })
                alert("se creo la categoria y se agrego el articulo");
            }catch (err){
                alert(err)
            }
        }else if(((await (await (getDoc(doc(db, "categories",title)))).data().items.map(item => item.id).includes(Number(id))))){
            const ref = ((await (await (getDoc(doc(db, "categories",title)))).data().items.map(item => item.id).indexOf(Number(id))));
            const obj = await (await (getDoc(doc(db, "categories",title)))).data().items[ref];
            await updateDoc(doc(db, "categories",title), {
                items: arrayRemove({
                    id:obj.id,
                    imageUrl:obj.imageUrl,
                    name:obj.name,
                    price:obj.price
                })
            });
            await updateDoc(doc(db, "categories",title), {
                items: arrayUnion({
                    id:Number(id),
                    name:itemName,
                    imageUrl:image,
                    price:Number(price)
                })
            })
            alert("se actualizo el articulo");
        }else{
            try{
                await updateDoc(doc(db, "categories",title), {
                    items: arrayUnion({
                        id:Number(id),
                        name:itemName,
                        imageUrl:image,
                        price:Number(price)
                    }),
                    title:title
                })
                alert("se creo el articulo");
            }catch (err){
                alert(err)
            }
        }
    }

    const handleChange = (event) => {
        const {name,value} = event.target;

        setFormFields({...formFields, [name]:value});
    }

    return(
        <div className="create-item-container">
            <h2>Crear articulo de tienda</h2>
            <span>¡La categoria solo puede ser una palabra!</span>
            <form onSubmit={createItem}>
                <FormInput
                    label='id'
                    type="number" 
                    required 
                    onChange={handleChange} 
                    name="id" 
                    value={id}
                />

                <FormInput
                    label='Categoria'
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="title" 
                    value={title}
                />

                <FormInput
                    label='Link de imagen'
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="image" 
                    value={image}
                />

                <FormInput
                    label='Nombre articulo'
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name="itemName" 
                    value={itemName}
                />

                <FormInput 
                    label='Precio'
                    type='number' 
                    required 
                    onChange={handleChange} 
                    name="price" 
                    value={price}
                />

                <Button type="submit">Crear articulo</Button>
            </form>
        </div>
    )
}

export default CreateItemForm;