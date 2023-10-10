import React, { Component } from "react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Heading,
} from '@chakra-ui/react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

class CreateParticipantForm extends Component {
    constructor() {
        super()
        this.state = {
            uuidInput: '',
            nameInput: '',
            emailInput: '',
        }
    }


    render() {
        const { uuidInput, nameInput, emailInput } = this.state
        const handleUuidChange = (e) => this.setState({ uuidInput: e.target.value})
        const handleNameChange = (e) => this.setState({ nameInput: e.target.value})
        const handleEmailInput = (e) => this.setState({ emailInput: e.target.value})

        const emailRegex = new RegExp('^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$');

        const isNameError = Boolean(nameInput === '' | nameInput.length > 600)
        const isEmailError = Boolean(emailInput === '' | !emailRegex.test(emailInput))

        const submitDisabled = isNameError | isEmailError

        const handleSubmit = () => {
            let data = {
                id: uuidInput,
                name: nameInput,
                email: emailInput,
            }
            if(data.id == ''){
                data.id = uuidv4()
            }
            let apiURL = '/api/create-participant'
            axios.post(apiURL, data)
              .then(function (response) {
                //TODO: IMPLEMENT API RESPONSE
                console.log(response);
              })
              .catch(function (error) {
                //TODO: IMPLEMENT API ERROR RESPONSE
                console.log(error);
              });
        }

        return (
            <>
            <div>
                <Heading>Create Participant</Heading>
                <FormControl>
                    <FormLabel>UUID</FormLabel>
                    <Input type='text' value={uuidInput} onChange={handleUuidChange} placeholder="Set a UUID for the particpant, or leave blank for an auto-generated one..." />
                </FormControl>
                
                <FormControl isInvalid={isNameError}>
                    <FormLabel>Name</FormLabel>
                    <Input type='text' value={nameInput} onChange={handleNameChange} placeholder="Enter the name of the participant..." />
                    {isNameError &&
                        <FormErrorMessage>Name should be between 1 and 600 characters, inclusive.</FormErrorMessage>
                    }
                </FormControl>

                <FormControl isInvalid={isEmailError}>
                    <FormLabel>Host Email</FormLabel>
                    <Input type='email' value={emailInput} onChange={handleEmailInput} placeholder="Enter the email of the event host..." />
                    {isEmailError &&
                        <FormErrorMessage>Invalid email.</FormErrorMessage>
                    }
                </FormControl>
                <Button onClick={handleSubmit} isDisabled={submitDisabled}>Submit</Button>
            </div>
            </>
        )
    }
} export default CreateParticipantForm