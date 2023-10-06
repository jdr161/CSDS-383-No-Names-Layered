import React, { Component } from "react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
} from '@chakra-ui/react'
import axios from 'axios'

class RegisterParticipantForm extends Component {
    constructor() {
        super()
        this.state = {
            eventInput: '',
            participantInput: '',
        }
    }


    render() {
        const { eventInput, participantInput } = this.state
        const handleEventChange = (e) => this.setState({ eventInput: e.target.value})
        const handleParticipantChange = (e) => this.setState({ participantInput: e.target.value})

        const isEventError = eventInput === ''
        const isParticipantError = participantInput === ''

        const submitDisabled = isEventError | isParticipantError

        const handleSubmit = () => {
            let data = {
                event: eventInput,
                Participant: participantInput,
            }
            let apiURL = ''
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
                <FormControl isInvalid={isEventError}>
                    <FormLabel>Event UUID</FormLabel>
                    <Input type='text' value={eventInput} onChange={handleEventChange} placeholder="" />
                    {isEventError &&
                        <FormErrorMessage>Event UUID is required</FormErrorMessage>
                    }
                </FormControl>
                
                <FormControl isInvalid={isParticipantError}>
                    <FormLabel>Participant UUID</FormLabel>
                    <Input type='text' value={participantInput} onChange={handleParticipantChange} placeholder="" />
                    {isParticipantError &&
                        <FormErrorMessage>Participant UUID is required</FormErrorMessage>
                    }
                </FormControl>

                <Button onClick={handleSubmit} isDisabled={submitDisabled}>Submit</Button>
            </div>
            </>
        )
    }
} export default RegisterParticipantForm