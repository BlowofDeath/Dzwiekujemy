import { useState } from "react";
import validator from "validator";

const useRegisterValidator = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [houseNumber, setHouseNumber] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const getErrorMessage = () => {
    if (email !== undefined && !validator.isEmail(email))
      setErrorMessage("Błedny adres email.");
    else if (
      password !== undefined &&
      !validator.isLength(password, { min: 2, max: 8 })
    )
      setErrorMessage("Hasło musi zawierać od 3 do 8 znaków.");
    else if (confirmPassword !== undefined && password !== confirmPassword)
      setErrorMessage("Hasła się różnią.");
    else if (city !== undefined && !validator.isAlpha(city, "pl-PL"))
      setErrorMessage("Podaj poprawną nazwę miejscowości. ");
    else if (street !== undefined && !validator.isAlpha(street, "pl-PL"))
      setErrorMessage("Podaj poprawną ulicę.");
    else if (houseNumber !== undefined) setErrorMessage("Podaj numer domu.");
    else setErrorMessage(null);

    return errorMessage;
  };

  return [
    getErrorMessage,
    setEmail,
    setPassword,
    setConfirmPassword,
    setCity,
    setStreet,
    setHouseNumber,
  ];
};

export default useRegisterValidator;
