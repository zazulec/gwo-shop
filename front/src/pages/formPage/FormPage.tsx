import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton } from '../../component/customButton/CustomButton';
import { CustomInput } from '../../component/customInput/CustomInput';
import { history } from '../../helpers/history/history';
import { myFetch } from '../../helpers/myFetch/myFetch';
import '../../scss/pages/formPage/formPage.scss';
import { resetWholeReduxShopData } from '../../actions/shopActions/shopActions';
import { resetWholeReduxAuthData } from '../../actions/authActions/authActions';

interface FormPageState {
    shop: {
        shoppingCart: any[]
    }
}

export const FormPage: FC<FormPageState> = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState("");
    const [town, setTown] = useState("");
    const [zip, setZip] = useState("");

    const [nameError, setNameError] = useState("");
    const [surnameError, setSurnameError] = useState("");
    const [townError, setTownError] = useState("");
    const [zipError, setZipError] = useState("");
    const [orderDone, setOrderDone] = useState("noOrder");


    const cart = useSelector((state: FormPageState) => state.shop.shoppingCart);
    const dispatch = useDispatch();

    const sendOrder = (id: number, quantity: number, name: string, surname: string, town: string, zip: string) => {
        return (
            myFetch("/api/order", {
                method: "post",
                body: {
                    order: [{
                        id: id,
                        quantity: quantity,
                    }
                    ],
                    first_name: name,
                    last_name: surname,
                    city: town,
                    zip_code: zip
                }
            }), setOrderDone("pending"),
            setTimeout(() => (setOrderDone("orderDone")), 3000)
        )
    }

    useEffect((): any => {
        if ((nameError === "noError" && surnameError === "noError" && townError === "noError" && zipError === "noError") === true) {
            return (cart.forEach(e => sendOrder(e.id, e.quantity, name, surname, town, zip)))
        }
    }, [nameError, surnameError, townError, zipError, name, surname, town, zip, cart])
    const checkName = () => {
        const nameValidation = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/;
        if (nameValidation.test(name) === true && name.length >= 4) {
            setNameError("noError")
        } else {
            setNameError("error")
        }

    }
    const checkSurname = () => {
        const surnameValidation = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/;
        if (surnameValidation.test(surname) === true && surname.length >= 5) {
            setSurnameError("noError")
        } else {
            setSurnameError("error")
        }
    }
    const checkTown = () => {
        const townValidation = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/;
        if (townValidation.test(town) === true) {
            setTownError("noError")
        } else {
            setTownError("error")
        }
    }
    const checkZip = () => {
        const zipValidation = /^[0-9]{2}-[0-9]{3}$/;
        if (zipValidation.test(zip) === true) {
            setZipError("noError")
        } else {
            setZipError("error")
        }
    }
    const checkValidation = () => {
        return (
            checkName(),
            checkSurname(),
            checkTown(),
            checkZip())
    }
    const backToThePast = () => {
        return (
            history.push("/"),
            dispatch(resetWholeReduxShopData()),
            dispatch(resetWholeReduxAuthData())
        )
    };

    return (

        <div className="formPage">
            {orderDone === "noOrder" ?
                (<><h1>Księgarnia online</h1>
                    <h3>Poniżej możesz zobaczyć podsumowanie swojego zamówienia. <br></br>
                        Podaj swoje dane by sfinalizować transakcje</h3>
                    <hr style={{ width: "80%" }}></hr>
                    <br></br>
                    <br></br>
                    <div className="formPage_inputs">
                        <CustomInput type="text" labelText="Imię" saveValue={setName} toggleError={setNameError} value={name} messageError='Wpisz minimum 4 litery bez cyfr.' error={nameError} />
                        <CustomInput type="text" labelText="Nazwisko" saveValue={setSurname} toggleError={setSurnameError} value={surname} messageError='Wpisz minimum 5 liter bez cyfr.' error={surnameError} />
                        <CustomInput type="text" labelText="Miejscowość" saveValue={setTown} toggleError={setTownError} value={town} messageError='Wypełnij pole używając wyłącznie liter' error={townError} />
                        <CustomInput type="text" labelText="Kod Pocztowy" saveValue={setZip} toggleError={setZipError} value={zip} messageError='Wypełnij pole według wzoru: XX-XXX' error={zipError} />
                    </div>
                    <div className="formPage_button">
                        <CustomButton title="zamawiam i płącę" style={{ marginTop: "20px" }} onClick={() => checkValidation()} />
                    </div>
                </>)
                : orderDone === "pending"
                    ? <>
                        <h1>Księgarnia online</h1>
                        <h3>Proszę czekać. Trwa przetwarzanie płatności...</h3>
                        <div className="loader"></div>
                    </>
                    : orderDone === "orderDone"
                        ? <>
                            <h1>Księgarnia online</h1>
                            <h3>Dziękujemy za zakupy płaność przebiegła pomyślnie!</h3>
                            <CustomButton title="Powrót do logowania" onClick={() => backToThePast()} /></>
                        : null}
        </div>
    )
}
