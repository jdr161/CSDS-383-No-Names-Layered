import React, { Component } from "react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
} from '@chakra-ui/react'

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

        const isDateError = dateInput === ''
        const isTimeError = timeInput === ''
        const isTitleError = titleInput === ''
        const isDescriptionError = descriptionInput === ''
        const isEmailError = emailInput === ''

        return (
            <>
            <FormControl>
                <FormLabel>UUID</FormLabel>
                <Input type='text' value={uuidInput} onChange={handleUuidChange} placeholder="Set a UUID for the event, or leave blank for an auto-generated one..." />
            </FormControl>

            <FormControl isInvalid={isDateError}>
                <FormLabel>Date</FormLabel>
                <Input type='date' value={dateInput} onChange={handleDateChange} placeholder="Set a date for the event..." />
                {!isDateError &&
                    <FormErrorMessage>Date is required.</FormErrorMessage>
                }
            </FormControl>

            <FormControl isInvalid={isTimeError}>
                <FormLabel>Time</FormLabel>
                <Input type='time' value={timeInput} onChange={handleTimeChange} placeholder="Set a time for the event..." />
                {!isTimeError &&
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                }
            </FormControl>

            <FormControl isInvalid={isTitleError}>
                <FormLabel>Title</FormLabel>
                <Input type='text' value={titleInput} onChange={handleTitleChange} placeholder="Set the title for the event..." />
                {!isTitleError &&
                    <FormErrorMessage>Title should be between 1 and 255 characters, inclusive. Try again</FormErrorMessage>
                }
            </FormControl>
            
            <FormControl isInvalid={isDescriptionError}>
                <FormLabel>Description</FormLabel>
                <Input type='text' value={descriptionInput} onChange={handleDescriptionChange} placeholder="Set the description for the event..." />
                {!isDescriptionError &&
                    <FormErrorMessage>Description should be between 1 and 600 characters, inclusive. Try again</FormErrorMessage>
                }
            </FormControl>

            <FormControl isInvalid={isEmailError}>
                <FormLabel>Host Email</FormLabel>
                <Input type='email' value={emailInput} onChange={handleEmailInput} placeholder="Enter the email of the event host..." />
                {!isEmailError &&
                    <FormErrorMessage>Invalid email. Try again</FormErrorMessage>
                }
            </FormControl>
            </>
        )
    }
} export default CreateEventForm