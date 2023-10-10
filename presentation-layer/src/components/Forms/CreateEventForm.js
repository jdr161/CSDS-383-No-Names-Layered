import React, { Component } from "react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Heading,
} from '@chakra-ui/react'
import moment from 'moment'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

class CreateEventForm extends Component {
    constructor() {
        super()
        this.state = {
            uuidInput: '',
            dateInput: '',
            timeInput: '',
            titleInput: '',
            descriptionInput: '',
            emailInput: '',
        }
    }


    render() {
        const { uuidInput, dateInput, timeInput, titleInput, descriptionInput, emailInput } = this.state
        const handleUuidChange = (e) => this.setState({ uuidInput: e.target.value})
        const handleDateChange = (e) => this.setState({ dateInput: e.target.value})
        const handleTimeChange = (e) => this.setState({ timeInput: e.target.value})
        const handleTitleChange = (e) => this.setState({ titleInput: e.target.value})
        const handleDescriptionChange = (e) => this.setState({ descriptionInput: e.target.value})
        const handleEmailInput = (e) => this.setState({ emailInput: e.target.value})

        const emailRegex = new RegExp('^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$');

        const isDateError = Boolean(dateInput === '')
        const isTimeError = Boolean(timeInput === '')
        const isTitleError = Boolean(titleInput === '' | titleInput.length > 255)
        const isDescriptionError = Boolean(descriptionInput === '' | descriptionInput.length > 600)
        const isEmailError = Boolean(emailInput === '' | !emailRegex.test(emailInput))

        const submitDisabled = Boolean(isDateError | isTimeError | isTitleError | isDescriptionError | isEmailError)

        const handleSubmit = () => {
            let data = {
                id: uuidInput,
                date: dateInput, //input with type 'date' is already in form "YYYY-MM-DD"
                time: moment(timeInput, 'HH:mm').format('hh:mm a'),
                title: titleInput,
                description: descriptionInput,
                hostEmail: emailInput,
            }
            if(data.id == ''){
                data.id = uuidv4()
            }
            let apiURL = '/api/create-event'
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
                <Heading>Create Event</Heading>
                <FormControl>
                    <FormLabel>UUID</FormLabel>
                    <Input type='text' value={uuidInput} onChange={handleUuidChange} placeholder="Set a UUID for the event, or leave blank for an auto-generated one..." />
                </FormControl>

                <FormControl isInvalid={isDateError}>
                    <FormLabel>Date</FormLabel>
                    <Input type='date' value={dateInput} onChange={handleDateChange} placeholder="Set a date for the event..." />
                    {isDateError &&
                        <FormErrorMessage>Date is required.</FormErrorMessage>
                    }
                </FormControl>

                <FormControl isInvalid={isTimeError}>
                    <FormLabel>Time</FormLabel>
                    <Input type='time' value={timeInput} onChange={handleTimeChange} placeholder="Set a time for the event..." />
                    {isTimeError &&
                        <FormErrorMessage>Time is required.</FormErrorMessage>
                    }
                </FormControl>

                <FormControl isInvalid={isTitleError}>
                    <FormLabel>Title</FormLabel>
                    <Input type='text' value={titleInput} onChange={handleTitleChange} placeholder="Set the title for the event..." />
                    {isTitleError &&
                        <FormErrorMessage>Title should be between 1 and 255 characters, inclusive.</FormErrorMessage>
                    }
                </FormControl>
                
                <FormControl isInvalid={isDescriptionError}>
                    <FormLabel>Description</FormLabel>
                    <Input type='text' value={descriptionInput} onChange={handleDescriptionChange} placeholder="Set the description for the event..." />
                    {isDescriptionError &&
                        <FormErrorMessage>Description should be between 1 and 600 characters, inclusive.</FormErrorMessage>
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
} export default CreateEventForm