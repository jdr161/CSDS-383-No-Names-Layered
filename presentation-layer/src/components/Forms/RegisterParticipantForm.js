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
import toast, { Toaster } from 'react-hot-toast'

class RegisterParticipantForm extends Component {
    constructor() {
        super()
        this.state = {
            eventInput: '',
            participantInput: '',
        }
        this.resetState = this.resetState.bind(this)
    }

    handleEventChange = (e) => this.setState({ eventInput: e.target.value})
    handleParticipantChange = (e) => this.setState({ participantInput: e.target.value})
    resetState = () => this.setState({
        eventInput: '',
        participantInput: '',
    })

    render() {
        const { eventInput, participantInput } = this.state

        const isEventError = eventInput === ''
        const isParticipantError = participantInput === ''

        const submitDisabled = Boolean(isEventError | isParticipantError)

        const handleSubmit = () => {
            let apiURL = `/api/register-participant?participantId=${participantInput}&eventId=${eventInput}`
            axios.put(apiURL)
              .then(response => {
                this.resetState()
                toast.success("Participant registered successfully")
              })
              .catch(function (error) {
                console.log(error)
                toast.error(error.response.data.message)
              });
        }

        return (
            <>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <div>
                <Heading>Register Participant</Heading>
                <FormControl isInvalid={isEventError}>
                    <FormLabel>Event UUID</FormLabel>
                    <Input type='text' value={eventInput} onChange={this.handleEventChange} placeholder="" />
                    {isEventError &&
                        <FormErrorMessage>Event UUID is required</FormErrorMessage>
                    }
                </FormControl>
                
                <FormControl isInvalid={isParticipantError}>
                    <FormLabel>Participant UUID</FormLabel>
                    <Input type='text' value={participantInput} onChange={this.handleParticipantChange} placeholder="" />
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