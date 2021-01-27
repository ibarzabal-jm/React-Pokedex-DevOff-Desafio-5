import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { getMoveByName } from "../../api/getMoveByName";
import PropTypes from "prop-types";

const AddMoves = ({ setMoves }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const moveName = inputValue.replace(/ /g, "-").toLowerCase();
    console.log(moveName);

    if (moveName.length > 2) {
      await getMoveByName(moveName)
        .then((move) => {
          setLoading(false);
          setMoves((moves) => [move, ...moves]);
          setInputValue("");
        })
        .catch((error) => {
          setLoading(false);
          setError(`${inputValue} not found.`);
        });
    } else {
      setError("Move name to short");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputGroup variant="filled">
          <InputLeftElement
            children={<SearchIcon color="black" />}
            onClick={handleSubmit}
            cursor="pointer"
          />
          <Input
            placeholder="Search Move (example: Ember, Thunder, Rain-Dance, Swords-Dance etc)"
            type="text"
            isInvalid={error}
            errorBorderColor="crimson"
            value={inputValue}
            onChange={handleInputChange}
          />
        </InputGroup>
      </form>
      {error && <Text textColor="crimson">{error}</Text>}
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="blue.200"
          color="black"
          size="xl"
        />
      )}
    </>
  );
};

export default AddMoves;

AddMoves.propType = {
  setMoves: PropTypes.func.isRequired,
};