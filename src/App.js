import "./App.css";
import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Container,
  Text,
  Checkbox,
  UnorderedList,
  ListItem,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { Autocomplete } from "chakra-ui-simple-autocomplete";
import theme from "./theme";
import { classes, attributes, engravings, tiersColors } from "./data";

function App() {


  const [foundedClasses, setFoundedClasses] = useState([]);
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [selectedEngravings, setSelectedEngravings] = useState([]);

  const updateAttributes = (attr) => {
    if (selectedAttributes.includes(attr)) {
      setSelectedAttributes(selectedAttributes.filter((item) => item !== attr));
    } else {
      setSelectedAttributes([...selectedAttributes, attr]);
    }
  };

  const renderClasses = () => {
    if (foundedClasses.length <= 0)
      return (
        <Text fontSize="5xl" color="#4FD1C5">
          Not Found
        </Text>
      );

    return (
      <UnorderedList fontSize="5xl" color="#4FD1C5">
        {foundedClasses.map((cf) => (
          <ListItem style={{listStyle: 'none'}}>
            <Flex align="center">
              <img alt="class-logo" width="34" src={cf.iconSource} />
              {cf.name}{" "}
              <Text mt={2} ml={2} color="" fontSize="2xl">
                ({cf.stats.join(", ")})
              </Text>
            </Flex>
            <UnorderedList fontSize="2xl" color="#f59b5c" pl={20}>
              {cf.engravings.map((engr) => {
                return <ListItem>
                    <Flex direction="row">
                      {engr.name} -
                      <Text ml={2} color={tiersColors.find((tc) => tc.key === engr.tier)?.color}>
                        {engr.tier}
                      </Text>
                    </Flex>
                  </ListItem>}
              )}
            </UnorderedList>
          </ListItem>
        ))}
      </UnorderedList>
    );
  };

  useEffect(() => {
    if(selectedAttributes.length <= 0 && selectedEngravings.length <= 0) {
      setFoundedClasses([]);
      return;
    }

    let filteredClasses = classes;

    if (selectedAttributes.length > 0) {
      filteredClasses = filteredClasses.filter((filteredClass) => {
        return selectedAttributes.every((sa) =>
          filteredClass.stats.includes(sa)
        );
      });
    }

    filteredClasses = filteredClasses.filter((filteredClass) => {
      return selectedEngravings.every((se) =>
        filteredClass.engravings.map((e) => e.name).includes(se.value)
      );
    });

    setFoundedClasses(filteredClasses);
  }, [selectedEngravings, selectedAttributes]);

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Container maxW="container.lg">
          <Flex align="center" direction="column" justify="center" w="100%">
            <img
              src="https://images.ctfassets.net/umhrp0op95v1/S3yKwaVAOi8Bgqg4n4scf/adae769671b271b88f97d31721432986/LA_LOGO.png"
              className="App-logo"
              alt="logo"
            />
            <Flex
              direction="column "
              justify="left"
              align="left"
              w="100%"
              p={5}
            >
              <Text fontSize="2xl" fontWeight="bold" mb={5}>
                Attributes
              </Text>
              <Flex direction="row">
                {attributes.map((attr) => (
                  <Checkbox
                    m={2}
                    key={attr}
                    onChange={() => updateAttributes(attr)}
                  >
                    {attr}
                  </Checkbox>
                ))}
              </Flex>
            </Flex>

            <Divider m={4} />
            <Flex
              direction="column "
              justify="left"
              align="left"
              w="100%"
              p={5}
            >
              <Text fontSize="2xl" fontWeight="bold" mb={5}>
                Engravings
              </Text>
              <Autocomplete
                m={2}
                w={"50%"}
                options={engravings.map((engraving) => {
                  return { label: engraving, value: engraving };
                })}
                result={selectedEngravings}
                setResult={(options) => {
                  setSelectedEngravings(options);
                }}
                placeholder="Select Engravings"
                allowCreation={false}
                colorScheme={"primary"}
                bgHoverColor={"#a8ded9"}
              />
            </Flex>
            <Divider m={4} />
            {renderClasses()}
          </Flex>
        </Container>
      </ChakraProvider>
      <Flex align="center" justify="center" mt={20}>
        © Developed by <a style={{marginLeft: 10, fontWeight: "bold"}} href="https://github.com/renan-garcia/lost-ark-price-help" target="_blank">Renan Garcia</a>
      </Flex>
    </div>
  );
}

export default App;
