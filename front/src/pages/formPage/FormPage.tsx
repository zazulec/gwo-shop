import React, { FC, useEffect, useState } from 'react';
import { CustomButton } from '../../component/customButton/CustomButton';
import { CustomInput } from '../../component/customInput/CustomInput';
import '../../scss/pages/formPage/formPage.scss';

interface FormPageProps {

}

export const FormPage: FC<FormPageProps> = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState("");
    const [town, setTown] = useState("");
    const [zip, setZip] = useState("");

    const [nameError, setNameError] = useState("");
    const [surnameError, setSurnameError] = useState("");
    const [townError, setTownError] = useState("");
    const [zipError, setZipError] = useState("");

    useEffect(() => {
        if ((nameError === "noError" && surnameError === "noError" && townError === "noError" && zipError === "noError") === true) {
            return sendOrder()
        }
    }, [nameError, surnameError, townError, zipError])

    const checkName = () => {
        const nameValidation = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/;
        if (nameValidation.test(name) === true) {
            setNameError("noError")
        } else {
            setNameError("error")
        }

    }
    const checkSurname = () => {
        const surnameValidation = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/;
        if (surnameValidation.test(surname) === true) {
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
    const sendOrder = () => console.log("wysłano zamówinienie !!!!!")

    return (
        <div className="formPage">
            <div className="formPage_inputs">
                <CustomInput type="text" labelText="Imię" saveValue={setName} toggleError={setNameError} value={name} messageError='Wypełnij pole używając wyłącznie liter' error={nameError} />
                <CustomInput type="text" labelText="Nazwisko" saveValue={setSurname} toggleError={setSurnameError} value={surname} messageError='Wypełnij pole używając wyłącznie liter' error={surnameError} />
                <CustomInput type="text" labelText="Miejscowość" saveValue={setTown} toggleError={setTownError} value={town} messageError='Wypełnij pole używając wyłącznie liter' error={townError} />
                <CustomInput type="text" labelText="Kod Pocztowy" saveValue={setZip} toggleError={setZipError} value={zip} messageError='Wypełnij pole według wzoru: XX-XXX' error={zipError} />
            </div>
            <div className="formPage_button">
                <CustomButton title="zamawiam i płącę" style={{ marginTop: "20px" }} onClick={() => checkValidation()} />
            </div>
        </div>
    )
}
