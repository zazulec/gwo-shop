import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetWholeReduxAuthData } from '../../actions/authActions/authActions';
import { resetWholeReduxShopData } from '../../actions/shopActions/shopActions';
import { CustomButton } from '../../component/customButton/CustomButton';
import { CustomInput } from '../../component/customInput/CustomInput';
import { FormPageState } from '../../helpers/interfaces/interfaces';
import { myFetch } from '../../helpers/myFetch/myFetch';
import '../../scss/pages/formPage/formPage.scss';

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
            }).catch(() => {
                toast.error("Błąd pobierania danych.");
            }), setOrderDone("pending"),
            setTimeout(() => (setOrderDone("orderDone")), 3000)
        )
    }

    useEffect((): void => {
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
            dispatch(resetWholeReduxShopData()),
            dispatch(resetWholeReduxAuthData())
        )
    };
    return (
        <div className="formPage">
            {orderDone === "noOrder" ?
                (<>
                    <h1>Księgarnia online</h1>
                    <h3>Poniżej możesz zobaczyć podsumowanie swojego zamówienia. <br></br>
                        Podaj swoje dane by sfinalizować transakcje</h3>
                    <hr style={{ width: "80%" }}></hr>
                    <br></br>
                    <br></br>
                    <div className="formPage_contentWrapper">
                        <div className="formPage_contentWrapper--bill">
                            {cart.length > 0 ? <h3>Twoje zamówienie:</h3> : null}
                            <div className="formPage_contentWrapper--bill-wrapper">
                                {cart.length > 0 ? cart.map((e: any, index: number) => (
                                    <div className="formPage_contentWrapper--bill-data" key={index}>
                                        <span> {e.title.slice(0, 30) + "..."} </span>
                                        <span> x {e.quantity}szt.</span>
                                    </div>


                                )) : (
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <h3>Twój koszyk jest pusty!</h3>
                                            <h3>Wróć do wyboru książek</h3>
                                            <Link to="/mainPage" className="shoppingCart_emptyButton">
                                                <CustomButton title="powrót" />
                                            </Link>
                                        </div>)
                                }

                            </div>
                        </div>
                        {cart.length > 0 ?
                            <div className="formPage_contentWrapper--inputs">
                                <h3>Wypełnij pola by sfinalizować transakcje:</h3>
                                <CustomInput type="text" labelText="Imię" saveValue={setName} toggleError={setNameError} value={name} messageError='Wpisz minimum 4 litery bez cyfr.' error={nameError} />
                                <CustomInput type="text" labelText="Nazwisko" saveValue={setSurname} toggleError={setSurnameError} value={surname} messageError='Wpisz minimum 5 liter bez cyfr.' error={surnameError} />
                                <CustomInput type="text" labelText="Miejscowość" saveValue={setTown} toggleError={setTownError} value={town} messageError='Wypełnij pole używając wyłącznie liter' error={townError} />
                                <CustomInput type="text" labelText="Kod Pocztowy" saveValue={setZip} toggleError={setZipError} value={zip} messageError='Wypełnij pole według wzoru: XX-XXX' error={zipError} />
                                <div className="formPage_contentWrapper--button">
                                    <CustomButton title="zamawiam i płącę" style={{ marginTop: "20px" }} onClick={() => checkValidation()} />
                                    <Link to="/shoppingCart" className="shoppingCart_emptyButton">
                                        <CustomButton title="powrót" style={{ marginTop: "20px" }} />
                                    </Link>
                                </div>
                            </div> : null}
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
                            <Link to="/" className="shoppingCart_emptyButton">
                                <CustomButton title="Powrót do logowania" onClick={() => backToThePast()} />
                            </Link>
                        </>
                        : null}
        </div>
    )
}
