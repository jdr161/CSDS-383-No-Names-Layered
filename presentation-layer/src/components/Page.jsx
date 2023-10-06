import React, { Component } from "react"

import CreateEventForm from './Forms/CreateEventForm'
import CreateParticipantForm from './Forms/CreateParticipantForm'
import RegisterParticipantForm from './Forms/RegisterParticipantForm'
import EventsTable from './Tables/EventsTable'
import ParticipantsTable from './Tables/ParticipantsTable'
import { Container, Stack, HStack, Button, Flex } from "@chakra-ui/react"


class Page extends Component {
    constructor() {
        super()
        this.state = {
            showCreateEventForm: false,
            showCreateParticipantForm: false,
            showRegisterParticipantForm: false,
            showEventsTable: false,
            showParticipantsTable: false
        }
    }

    showComponent(name) {
        switch (name) {
            case "showCreateEventForm":
                this.setState({
                    showCreateEventForm: true,
                    showCreateParticipantForm: false,
                    showRegisterParticipantForm: false,
                    showEventsTable: false,
                    showParticipantsTable: false
                })
                break
            case "showCreateParticipantForm":
                this.setState({
                    showCreateEventForm: false,
                    showCreateParticipantForm: true,
                    showRegisterParticipantForm: false,
                    showEventsTable: false,
                    showParticipantsTable: false
                })
                break
            case "showRegisterParticipantForm":
                this.setState({
                    showCreateEventForm: false,
                    showCreateParticipantForm: false,
                    showRegisterParticipantForm: true,
                    showEventsTable: false,
                    showParticipantsTable: false
                })
                break
            case "showEventsTable":
                this.setState({
                    showCreateEventForm: false,
                    showCreateParticipantForm: false,
                    showRegisterParticipantForm: false,
                    showEventsTable: true,
                    showParticipantsTable: false
                })
                break
            case "showParticipantsTable":
                this.setState({
                    showCreateEventForm: false,
                    showCreateParticipantForm: false,
                    showRegisterParticipantForm: false,
                    showEventsTable: false,
                    showParticipantsTable: true
                })
                break
            default:
                console.log("type somewhere")
                break
        }
    }
    render() {
        const { showCreateEventForm, showCreateParticipantForm, showRegisterParticipantForm, showEventsTable, showParticipantsTable } = this.state
        return (
            <Container maxWidth={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} mt={8}>
                <Stack display={'flex'} justifyContent={'center'}>
                    <HStack display={'flex'} justifyContent={'center'}>
                        <Button onClick={() => this.showComponent("showCreateEventForm")}>Create Event</Button>
                        <Button onClick={() => this.showComponent("showCreateParticipantForm")}>Create Participant</Button>
                        <Button onClick={() => this.showComponent("showRegisterParticipantForm")}>Register Participant</Button>
                        <Button onClick={() => this.showComponent("showEventsTable")}>Show All Event</Button>
                        <Button onClick={() => this.showComponent("showParticipantsTable")}>Show All Participants</Button>
                    </HStack>
                    <Flex>
                        {showCreateEventForm && <CreateEventForm />}
                        {showCreateParticipantForm && <CreateParticipantForm />}
                        {showRegisterParticipantForm && <RegisterParticipantForm />}
                        {showEventsTable && <EventsTable />}
                        {showParticipantsTable && <ParticipantsTable />}
                    </Flex>
                </Stack>
            </Container>
        )
    }
} export default Page